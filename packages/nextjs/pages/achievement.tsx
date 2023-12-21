import { useAccount } from 'wagmi'
import { MetaHeader } from '~~/components/header'
import { RainbowKitCustomConnectButton } from '~~/components/scaffold-eth'
import { MyHoldings } from '~~/components/simple-nft'

export default function MyAchievements() {
  const { isConnected, isConnecting } = useAccount()

  return (
    <>
      <MetaHeader />
      {/* <div className="flex flex-col items-center pt-10">
        <div className="px-5">
          <h1 className="flex flex-col w-full mt-24 mb-6 text-center">
            <span className="text-5xl font-press">Achievements</span>
          </h1>
        </div>
      </div> */}
      <div className="flex justify-center">
        {!isConnected || isConnecting ? <RainbowKitCustomConnectButton /> : null}
      </div>
      <MyHoldings type={'achievement'} />
    </>
  )
}
