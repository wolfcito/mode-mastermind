import { useAccount } from 'wagmi'
import { MetaHeader } from '~~/components/header'
import { RainbowKitCustomConnectButton } from '~~/components/scaffold-eth'
import { MyHoldings } from '~~/components/simple-nft'

export default function MyBagdes() {
  const { isConnected, isConnecting } = useAccount()

  return (
    <>
      <MetaHeader />

      <div className="flex justify-center">
        {!isConnected || isConnecting ? <RainbowKitCustomConnectButton /> : null}
      </div>
      <MyHoldings />
    </>
  )
}
