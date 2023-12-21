import { Collectible } from '~~/components/simple-nft/simple-nft.type'

export const getKnowledgeAreas = (badges: Collectible[]) => {
  const valoresUnicos: Set<string> = new Set()

  badges.forEach(badge => {
    badge.attributes?.forEach((attribute: any) => {
      if (attribute.trait_type === 'Area') {
        valoresUnicos.add(attribute.value)
      }
    })
  })

  return Array.from(valoresUnicos)
}
