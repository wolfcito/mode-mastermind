import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AchievementButton, BadgeButton } from '../button'
import { NFTCard } from './nft-card.component'
import { Collectible } from './simple-nft.type'
import { nanoid } from 'nanoid'
import { useAccount } from 'wagmi'
import { RainbowKitCustomConnectButton } from '~~/components/scaffold-eth'
import { Spinner } from '~~/components/spinner'
import { useScaffoldContract, useScaffoldContractRead, useScaffoldContractWrite } from '~~/hooks/scaffold-eth'
import { getKnowledgeAreas } from '~~/utils/filters'
import { notification } from '~~/utils/scaffold-eth'
import { NFTMetaData, badgesMetadata, getNFTMetadataFromIPFS, ipfsClient } from '~~/utils/simpleNFT'
import { defaultMetadata } from '~~/utils/simpleNFT/nfts-metadata.type'

export function MyHoldings({ type = 'badge' }: { type?: string }) {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount()
  const [myAllCollectibles, setMyAllCollectibles] = useState<Collectible[]>([])
  const [allCollectiblesLoading, setAllCollectiblesLoading] = useState(false)
  const router = useRouter()

  const [myAchievements, setMyAchievements] = useState<Collectible[]>([])

  const { data: modeMasterMindContract } = useScaffoldContract({
    contractName: 'ModeMasterMind',
  })

  const { data: myTotalBalance } = useScaffoldContractRead({
    contractName: 'ModeMasterMind',
    functionName: 'balanceOf',
    args: [connectedAddress],
    watch: true,
  })

  const { writeAsync: mintItem } = useScaffoldContractWrite({
    contractName: 'ModeMasterMind',
    functionName: 'mintItem',
    args: [connectedAddress, ''],
  })

  const { data: tokenIdCounter } = useScaffoldContractRead({
    contractName: 'ModeMasterMind',
    functionName: 'tokenIdCounter',
    watch: true,
    cacheOnBlock: true,
  })

  useEffect(() => {
    const updateMyCollectibles = async (): Promise<void> => {
      if (myTotalBalance === undefined || modeMasterMindContract === undefined || connectedAddress === undefined) return

      setAllCollectiblesLoading(true)
      const collectibleUpdate: Collectible[] = []
      const totalBalance = parseInt(myTotalBalance.toString())
      for (let tokenIndex = 0; tokenIndex < totalBalance; tokenIndex++) {
        try {
          const tokenId = await modeMasterMindContract.read.tokenOfOwnerByIndex([
            connectedAddress,
            BigInt(tokenIndex.toString()),
          ])

          const tokenURI = await modeMasterMindContract.read.tokenURI([tokenId])

          const ipfsHash = tokenURI.replace('https://ipfs.io/ipfs/', '')

          const nftMetadata: NFTMetaData = await getNFTMetadataFromIPFS(ipfsHash)

          collectibleUpdate.push({
            id: parseInt(tokenId.toString()),
            uri: tokenURI,
            owner: connectedAddress,
            ...nftMetadata,
          })
        } catch (e) {
          notification.error('Error fetching all collectibles')
          setAllCollectiblesLoading(false)
          console.log(e)
        }
      }
      collectibleUpdate.sort((a, b) => a.id - b.id)
      const collectibleAchivements = collectibleUpdate.filter(collected => collected.type === type)
      const myAchievements = collectibleUpdate.filter(collected => collected.type === 'achievement')

      setMyAchievements(myAchievements)
      setMyAllCollectibles(collectibleAchivements)
      setAllCollectiblesLoading(false)
    }

    updateMyCollectibles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedAddress, myTotalBalance])

  const handleMintItem = async ({ type = 'achievement', area }: { type?: string; area: string }) => {
    // circle back to the zero item if we've reached the end of the array
    if (tokenIdCounter === undefined) return

    const currentTokenMetaData =
      badgesMetadata.find(badge => {
        return (
          badge.type === type &&
          badge.attributes.some(atributo => atributo.trait_type === 'Area' && atributo.value === area)
        )
      }) ?? defaultMetadata

    const notificationId = notification.loading('Uploading to IPFS')
    try {
      const uploadedItem = await ipfsClient.add(JSON.stringify(currentTokenMetaData))

      // First remove previous loading notification and then show success notification
      notification.remove(notificationId)
      notification.success('Metadata uploaded to IPFS')

      await mintItem({
        args: [connectedAddress, uploadedItem.path],
      })

      router.push('/achievement')
    } catch (error) {
      notification.remove(notificationId)
      console.error(error)
    }
  }
  if (allCollectiblesLoading)
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    )

  if (myAllCollectibles.length === 0)
    return (
      <>
        {type === 'achievement' ? (
          <div className="flex flex-col items-center pt-10">
            <h1 className="flex flex-col w-full mb-6 text-center">
              <span className="text-4xl font-press">My Achievements</span>
            </h1>

            <div className="flex justify-center">
              <Image src={'/assets/mode/treasure-chest.png'} alt="empty badges" width={288} height={288} />
            </div>
            <div className="flex flex-col items-center justify-center max-w-lg">
              <p className="mt-10 text-2xl font-light text-center font-ibm-mono text-neutral-400">
                {"You havent's unlocked any epic achievement. Complete a trivia and claim three badges to unlock one."}
              </p>
            </div>
            <div className="flex justify-center mt-3 mb-6">
              {!isConnected || isConnecting ? (
                <RainbowKitCustomConnectButton />
              ) : (
                <BadgeButton
                  label=" Play Now"
                  onClick={function (): void {
                    if (!isConnected) {
                      notification.warning('Connect your Wallet')
                      return
                    }
                    router.push('/trivia')
                  }}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center pt-10">
            <h1 className="flex flex-col w-full mb-6 text-center">
              <span className="text-4xl font-press">My Badges</span>
            </h1>

            <div className="flex justify-center">
              <Image src={'/assets/mode/treasure-chest.png'} alt="empty badges" width={288} height={288} />
            </div>
            <div className="flex flex-col items-center justify-center max-w-lg">
              <p className="mt-10 text-2xl font-light text-center font-ibm-mono text-neutral-400">
                {"You havent's unlocked any badge. Complete a trivia and claim badge to unlock one."}
              </p>
            </div>
            <div className="flex justify-center mt-3 mb-6">
              <div className="flex justify-center">
                {!isConnected || isConnecting ? (
                  <RainbowKitCustomConnectButton />
                ) : (
                  <BadgeButton
                    label=" Play Now"
                    onClick={function (): void {
                      if (!isConnected) {
                        notification.warning('Connect your Wallet')
                        return
                      }
                      router.push('/trivia')
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </>
    )

  return (
    <>
      <div className="flex flex-col items-center pt-10">
        {getKnowledgeAreas(myAllCollectibles).map(area => {
          const badgesByArea = myAllCollectibles.filter(badge => {
            return (
              badge.type === 'badge' &&
              badge.attributes?.some(atributo => atributo.trait_type === 'Area' && atributo.value === area)
            )
          })

          return badgesByArea.length === 3 ? (
            <>
              {getKnowledgeAreas(myAchievements).map(achieveArea => {
                if (achieveArea !== area) {
                  return (
                    <div className="flex-wrap" key={nanoid()}>
                      <h1 className="flex flex-col w-full mb-6 text-center">
                        <span className="text-4xl font-press">Epic Achievement</span>
                        <span className="text-4xl font-press">Unlocked</span>
                      </h1>
                      <div className="flex justify-center">
                        <AchievementButton
                          onClick={() => handleMintItem({ type: 'achievement', area: area })}
                          label={`Claim Epic Achievment Badge - ${area}`}
                        />
                      </div>
                    </div>
                  )
                }
              })}
            </>
          ) : null
        })}
      </div>
      <>
        <div className="flex flex-col items-center pt-10">
          <div className="px-5">
            <h1 className="flex flex-col w-full mt-20 mb-6 text-center">
              <span className="text-5xl font-press">
                {type === 'achievement' ? 'You are now a Mode Master' : 'Level Up Badges'}
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 px-5 my-8">
          {myAllCollectibles.map(item => (
            <NFTCard nft={item} key={item.id} />
          ))}
        </div>
      </>
    </>
  )
}
