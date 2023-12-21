export interface NftsMetadataProps {
  type: string
  description: string
  external_url: string
  image: string
  name: string
  attributes: (
    | {
        trait_type: string
        value: string
      }
    | {
        trait_type: string
        value: number
      }
  )[]
}

export const defaultMetadata: NftsMetadataProps = {
  type: 'empty',
  description: '',
  external_url: '',
  image: '',
  name: '',
  attributes: [],
}
