import { MetaHeader } from '~~/components/header'
import { MyHoldings } from '~~/components/simple-nft'

export default function MyAchievements() {
  return (
    <>
      <MetaHeader />
      <MyHoldings type={'achievement'} />
    </>
  )
}
