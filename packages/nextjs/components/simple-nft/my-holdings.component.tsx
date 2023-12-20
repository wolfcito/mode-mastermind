import { useEffect, useState } from 'react'
import { NFTCard } from './nft-card.component'
import { useAccount } from 'wagmi'
import { Spinner } from '~~/components/spinner'
import { useScaffoldContract, useScaffoldContractRead } from '~~/hooks/scaffold-eth'
import { notification } from '~~/utils/scaffold-eth'
import { NFTMetaData, getNFTMetadataFromIPFS } from '~~/utils/simpleNFT'

export interface Collectible extends Partial<NFTMetaData> {
  id: number
  uri: string
  owner: string
}

export function MyHoldings({ type = 'badge' }: { type?: string }) {
  const { address: connectedAddress } = useAccount()
  const [myAllCollectibles, setMyAllCollectibles] = useState<Collectible[]>([])
  const [allCollectiblesLoading, setAllCollectiblesLoading] = useState(false)

  const { data: modeMasterMindContract } = useScaffoldContract({
    contractName: 'ModeMasterMind',
  })

  const { data: myTotalBalance } = useScaffoldContractRead({
    contractName: 'ModeMasterMind',
    functionName: 'balanceOf',
    args: [connectedAddress],
    watch: true,
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

  if (allCollectiblesLoading)
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    )

  return (
    <>
      {myAllCollectibles.length === 0 ? (
        <div className="flex items-center justify-center mt-10">
          <div className="text-2xl text-primary-content">What are you waiting for to get your {type}?</div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 px-5 my-8">
          {myAllCollectibles.map(item => (
            <NFTCard nft={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  )
}
