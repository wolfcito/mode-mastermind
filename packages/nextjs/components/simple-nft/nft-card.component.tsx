import Image from 'next/image'
import { Address } from '../scaffold-eth'
import { Collectible } from './my-holdings.component'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

export function NFTCard({ nft }: { nft: Collectible }) {
  return (
    <div className="max-w-sm shadow-lg card card-compact bg-base-100 shadow-secondary">
      <figure className="relative">
        <Image
          src={nft.image as string}
          alt="NFT Image"
          className={clsx(
            'object-cover h-60',
            { 'max-w-sm pt-4': nft.type === 'badge' },
            { 'w-full ': nft.type !== 'badge' },
          )}
          width={150}
          height={150}
        />
      </figure>
      <div className="space-y-3 card-body">
        <div className="flex items-center justify-center">
          <p className="p-0 m-0 text-xl font-semibold">{nft.name}</p>
          <div className="flex flex-wrap mt-1 space-x-2">
            {nft.attributes?.map(attr => {
              if (attr.trait_type === 'Area')
                return (
                  <span key={nanoid()} className="py-3 badge badge-primary">
                    {attr.value}
                  </span>
                )
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center mt-1">
          <p className="my-0 text-lg">{nft.description}</p>
        </div>
        <div className="flex items-center mt-1 space-x-3">
          <span className="text-lg font-semibold">Owner : </span>
          <Address address={nft.owner} />
        </div>
      </div>
    </div>
  )
}
