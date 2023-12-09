import { useState } from 'react'
import { Address, AddressInput } from '../scaffold-eth'
import { Collectible } from './MyHoldings'
import { useScaffoldContractWrite } from '~~/hooks/scaffold-eth'

export const NFTCard = ({ nft }: { nft: Collectible }) => {
  const [transferToAddress, setTransferToAddress] = useState('')

  const { writeAsync: transferNFT } = useScaffoldContractWrite({
    contractName: 'ModeMasterMind',
    functionName: 'transferFrom',
    args: [nft.owner, transferToAddress, BigInt(nft.id.toString())],
  })

  return (
    <div className="card card-compact bg-base-100 shadow-lg sm:min-w-[300px] shadow-secondary">
      <figure className="relative">
        {/* eslint-disable-next-line  */}
        <img src={nft.image} alt="NFT Image" className="min-w-full h-60" />
        <figcaption className="absolute p-4 glass bottom-4 left-4 w-25 rounded-xl">
          <span className="text-white "># {nft.id}</span>
        </figcaption>
      </figure>
      <div className="space-y-3 card-body">
        <div className="flex items-center justify-center">
          <p className="p-0 m-0 text-xl font-semibold">{nft.name}</p>
          <div className="flex flex-wrap mt-1 space-x-2">
            {nft.attributes?.map((attr, index) => (
              <span key={index} className="py-3 badge badge-primary">
                {attr.value}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center mt-1">
          <p className="my-0 text-lg">{nft.description}</p>
        </div>
        <div className="flex items-center mt-1 space-x-3">
          <span className="text-lg font-semibold">Owner : </span>
          <Address address={nft.owner} />
        </div>
        <div className="flex flex-col my-2 space-y-1">
          <span className="mb-1 text-lg font-semibold">Transfer To: </span>
          <AddressInput
            value={transferToAddress}
            placeholder="receiver address"
            onChange={newValue => setTransferToAddress(newValue)}
          />
        </div>
        <div className="justify-end card-actions">
          <button className="px-8 tracking-wide btn btn-secondary btn-md" onClick={() => transferNFT()}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
