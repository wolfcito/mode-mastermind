import { NFTMetaData } from '~~/utils/simpleNFT'

export interface CardProps {
  nft: Collectible
}

export interface NFTCardProps extends CardProps {
  classcard: string
}

export interface Collectible extends Partial<NFTMetaData> {
  id: number
  uri: string
  owner: string
}
