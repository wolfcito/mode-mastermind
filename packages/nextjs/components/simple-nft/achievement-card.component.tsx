import Image from 'next/image'
import { Address } from '../scaffold-eth'
import { NFTCardProps } from './simple-nft.type'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

export function AchievementCard({ nft, classcard }: NFTCardProps) {
  return (
    <article className="flex flex-col items-center content-center justify-center">
      <div
        className={clsx(
          'max-w-sm w-full rounded overflow-hidden shadow-lg flex flex-col content-center relative h-96',
          classcard,
        )}
      >
        <Image
          className="w-auto m-auto bg-cover h-80"
          src={nft.image as string}
          alt={`${nft.type} image`}
          width={150}
          height={150}
        />
        <div className="absolute flex flex-col justify-between w-full h-full py-4">
          <div className="flex flex-col h-full">
            <div className="flex flex-col flex-1 text-xl font-bold text-neutral-content">{nft.name}</div>
            <div className="px-6 pt-4 pb-2">
              {nft.attributes?.map(item => {
                if (item.trait_type === 'Area')
                  return (
                    <span
                      key={nanoid()}
                      className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-secondary-content bg-neutral"
                    >
                      {item.value}
                    </span>
                  )
              })}
            </div>
          </div>

          <div className="flex justify-center w-full mt-1 mb-4 space-x-3 bg-black/70">
            <span className="text-lg font-semibold">Owner : </span>
            <Address address={nft.owner} />
          </div>
        </div>
      </div>
    </article>
  )
}
