import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AchievementButton, BadgeButton } from '../button'
import { NFTCard } from './nft-card.component'
import { useAccount } from 'wagmi'
import { Spinner } from '~~/components/spinner'
import { useScaffoldContract, useScaffoldContractRead, useScaffoldContractWrite } from '~~/hooks/scaffold-eth'
import { notification } from '~~/utils/scaffold-eth'
import { NFTMetaData, getNFTMetadataFromIPFS, ipfsClient } from '~~/utils/simpleNFT'
import { RainbowKitCustomConnectButton } from '~~/components/scaffold-eth'


export interface Collectible extends Partial<NFTMetaData> {
  id: number
  uri: string
  owner: string
}

export function MyHoldings({ type = 'badge' }: { type?: string }) {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount()
  const [myAllCollectibles, setMyAllCollectibles] = useState<Collectible[]>([])
  const [allCollectiblesLoading, setAllCollectiblesLoading] = useState(false)
  const router = useRouter()

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
      setMyAllCollectibles(collectibleAchivements)
      setAllCollectiblesLoading(false)
    }

    updateMyCollectibles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedAddress, myTotalBalance])

  const handleMintItem = async ({ type = 'achievement' }: { type?: string }) => {
    // circle back to the zero item if we've reached the end of the array
    if (tokenIdCounter === undefined) return

    const currentTokenMetaData = null
    console.log('currentTokenMetaData', currentTokenMetaData)

    // const tokenIdCounterNumber = parseInt(tokenIdCounter.toString())
    // const badgesByTopic = badgesMetadata.filter(badge => badge.type === type)
    // console.log('badges', badgesByTopic)
    // const currentTokenMetaData = badgesByTopic[tokenIdCounterNumber % badgesByTopic.length]
    const notificationId = notification.loading('Uploading to IPFS')
    try {
      const uploadedItem = await ipfsClient.add(JSON.stringify(currentTokenMetaData))

      // First remove previous loading notification and then show success notification
      notification.remove(notificationId)
      notification.success('Metadata uploaded to IPFS')

      await mintItem({
        args: [connectedAddress, uploadedItem.path],
      })
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
              {!isConnected || isConnecting ? <RainbowKitCustomConnectButton /> : <BadgeButton
                label=" Play Now"
                onClick={function (): void {
                  if (!isConnected) {
                    notification.warning('Connect your Wallet')
                    return
                  }
                  router.push('/trivia')
                }}
              />}
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
                {!isConnected || isConnecting ? <RainbowKitCustomConnectButton /> : <BadgeButton
                  label=" Play Now"
                  onClick={function (): void {
                    if (!isConnected) {
                      notification.warning('Connect your Wallet')
                      return
                    }
                    router.push('/trivia')
                  }}
                />}
              </div>
            </div>
          </div>
        )}
      </>
    )

  return (
    <>
      {myAllCollectibles.length === 3 ? (
        <div className="flex flex-col items-center pt-10">
          <h1 className="flex flex-col w-full mb-6 text-center">
            <span className="text-4xl font-press">Epic Achievement</span>
            <span className="text-4xl font-press">Unlocked</span>
          </h1>

          <div className="flex justify-center">
            <AchievementButton onClick={() => handleMintItem({ type: 'achievement' })} />
          </div>
        </div>
      ) : null}
      <>
        <div className="flex flex-col items-center pt-10">
          <div className="px-5">
            <h1 className="flex flex-col w-full mt-24 mb-6 text-center">
              <span className="text-5xl font-press">Level Up Badges</span>
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
