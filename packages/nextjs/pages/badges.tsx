import { useAccount } from 'wagmi'
import { Button } from '~~/components/button'
import { MetaHeader } from '~~/components/header'
import { RainbowKitCustomConnectButton } from '~~/components/scaffold-eth'
import { MyHoldings } from '~~/components/simpleNFT'
import { useScaffoldContractRead, useScaffoldContractWrite } from '~~/hooks/scaffold-eth'
import { notification } from '~~/utils/scaffold-eth'
import { ipfsClient } from '~~/utils/simpleNFT'
import nftsMetadata from '~~/utils/simpleNFT/nftsMetadata'

export default function MyNFTs() {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount()

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

  const handleMintItem = async () => {
    // circle back to the zero item if we've reached the end of the array
    if (tokenIdCounter === undefined) return

    const tokenIdCounterNumber = parseInt(tokenIdCounter.toString())
    const currentTokenMetaData = nftsMetadata[tokenIdCounterNumber % nftsMetadata.length]
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
      <div className="flex flex-col items-center pt-10">
        <div className="px-5">
          <h1 className="mb-8 text-center">
            <span className="block text-4xl font-bold">Achievements</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        {!isConnected || isConnecting ? (
          <RainbowKitCustomConnectButton />
        ) : (
          <Button label="Mint Badge" onClick={handleMintItem} />
        )}
      </div>
      <MyHoldings />
    </>
  )
}
