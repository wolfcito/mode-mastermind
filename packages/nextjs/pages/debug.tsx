import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useLocalStorage } from 'usehooks-ts'
import { MetaHeader } from '~~/components/header'
import { ContractUI } from '~~/components/scaffold-eth'
import { ContractName } from '~~/utils/scaffold-eth/contract'
import { getContractNames } from '~~/utils/scaffold-eth/contractNames'

const selectedContractStorageKey = 'scaffoldEth2.selectedContract'
const contractNames = getContractNames()

const Debug: NextPage = () => {
  const [selectedContract, setSelectedContract] = useLocalStorage<ContractName>(
    selectedContractStorageKey,
    contractNames[0],
  )

  useEffect(() => {
    if (!contractNames.includes(selectedContract)) {
      setSelectedContract(contractNames[0])
    }
  }, [selectedContract, setSelectedContract])

  return (
    <>
      <MetaHeader
        title="Debug Contracts | Scaffold-ETH 2"
        description="Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way"
      />
      <div className="flex flex-col items-center justify-center py-8 gap-y-6 lg:gap-y-8 lg:py-12">
        {contractNames.length === 0 ? (
          <p className="text-3xl mt-14">No contracts found!</p>
        ) : (
          <>
            {contractNames.length > 1 && (
              <div className="flex flex-row flex-wrap w-full gap-2 px-6 pb-1 max-w-7xl lg:px-10">
                {contractNames.map(contractName => (
                  <button
                    className={`btn btn-secondary btn-sm normal-case font-thin ${
                      contractName === selectedContract ? 'bg-base-300' : 'bg-base-100'
                    }`}
                    key={contractName}
                    onClick={() => setSelectedContract(contractName)}
                  >
                    {contractName}
                  </button>
                ))}
              </div>
            )}
            {contractNames.map(contractName => (
              <ContractUI
                key={contractName}
                contractName={contractName}
                className={contractName === selectedContract ? '' : 'hidden'}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Debug
