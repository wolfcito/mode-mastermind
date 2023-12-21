import Image from 'next/image'
import { Address } from '../scaffold-eth'
import { NFTCardProps } from './simple-nft.type'
import clsx from 'clsx'

export function BadgeCard({ nft, classcard }: NFTCardProps) {
  return (
    <div className="flex content-center justify-center mt-3">
      <article className="flex flex-col items-center content-center justify-center">
        <div
          className={clsx(
            'max-w-sm w-full rounded overflow-hidden shadow-lg flex flex-col content-center justify-center items-center',
            classcard,
          )}
        >
          <Image
            className="block m-auto my-8 "
            src={nft.image as string}
            alt={`${nft.type} image`}
            width={150}
            height={150}
          />
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-neutral-content">{nft.name}</div>
              <div className="px-6 pt-4 pb-2">
                {nft.attributes?.map(item => {
                  if (item.trait_type === 'Area')
                    return (
                      <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-secondary-content bg-neutral">
                        {item.value}
                      </span>
                    )
                })}
              </div>
            </div>
            <p className="text-base text-current">{nft.description}</p>
          </div>

          <div className="flex items-center mt-1 mb-4 space-x-3">
            <span className="text-lg font-semibold">Owner : </span>
            <Address address={nft.owner} />
          </div>
        </div>
      </article>
    </div>
  )
}
