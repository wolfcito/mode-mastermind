import { AchievementCard } from './achievement-card.component'
import { BadgeCard } from './badge-card.component'
import { CardProps } from './simple-nft.type'
import styles from '~~/styles/swiper-slide-content.module.css'

export function NFTCard({ nft }: CardProps) {
  const classcard = nft.type === 'badge' ? styles.badget : styles.achievement
  return nft.type === 'badge' ? (
    <BadgeCard nft={nft} classcard={classcard} />
  ) : (
    <AchievementCard nft={nft} classcard={classcard} />
  )
}
