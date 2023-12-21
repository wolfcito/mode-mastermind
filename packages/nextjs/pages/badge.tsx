import { useAccount } from 'wagmi'
import { AchievementButton } from '~~/components/button'
import { MetaHeader } from '~~/components/header'
import { RainbowKitCustomConnectButton } from '~~/components/scaffold-eth'
import { MyHoldings } from '~~/components/simple-nft'
import { useScaffoldContractRead, useScaffoldContractWrite } from '~~/hooks/scaffold-eth'
import { notification } from '~~/utils/scaffold-eth'
import { ipfsClient } from '~~/utils/simpleNFT'
import { badgesMetadata } from '~~/utils/simpleNFT/nftsMetadata'

export default function MyBagdes() {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount()

  // TODO: use correct structure
  const badgesCollected = [1, 2]

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

  const handleMintItem = async ({ type = 'achievement' }: { type?: string }) => {
    // circle back to the zero item if we've reached the end of the array
    if (tokenIdCounter === undefined) return

    const tokenIdCounterNumber = parseInt(tokenIdCounter.toString())
    const badgesByTopic = badgesMetadata.filter(badge => badge.type === type)
    console.log('badges', badgesByTopic)
    const currentTokenMetaData = badgesByTopic[tokenIdCounterNumber % badgesByTopic.length]
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

  return (
    <>
      <MetaHeader />
      {badgesCollected.length === 3 ? (
        <div className="flex flex-col items-center pt-10">
          <h1 className="flex flex-col w-full mb-6 text-center">
            <span className="text-4xl font-VT323">Epic Achievement</span>
            <span className="text-4xl font-VT323">Unlocked</span>
          </h1>

          {isConnected || !isConnecting ? (
            <div className="flex justify-center">
              <AchievementButton onClick={() => handleMintItem({ type: 'achievement' })} />
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-col items-center pt-10">
        <div className="px-5">
          <h1 className="flex flex-col w-full mt-24 mb-6 text-center">
            <span className="text-5xl font-press">Level Up Badges</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        {!isConnected || isConnecting ? <RainbowKitCustomConnectButton /> : null}
      </div>
      <MyHoldings />
    </>
  )
}
