import { Collectible } from './my-holdings.component'

export interface CardProps {
  nft: Collectible
}

export interface NFTCardProps extends CardProps {
  classcard: string
}
