import { useReducer } from 'react'
import { ContractReadMethods } from './ContractReadMethods'
import { ContractVariables } from './ContractVariables'
import { ContractWriteMethods } from './ContractWriteMethods'
import { Address, Balance } from '~~/components/scaffold-eth'
import { Spinner } from '~~/components/spinner/spinner.component'
import { useDeployedContractInfo, useNetworkColor } from '~~/hooks/scaffold-eth'
import { getTargetNetwork } from '~~/utils/scaffold-eth'
import { ContractName } from '~~/utils/scaffold-eth/contract'

type ContractUIProps = {
  contractName: ContractName
  className?: string
}

/**
 * UI component to interface with deployed contracts.
 **/
export const ContractUI = ({ contractName, className = '' }: ContractUIProps) => {
  const [refreshDisplayVariables, triggerRefreshDisplayVariables] = useReducer(value => !value, false)
  const configuredNetwork = getTargetNetwork()

  const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo(contractName)
  const networkColor = useNetworkColor()

  if (deployedContractLoading) {
    return (
      <div className="mt-14">
        <Spinner classname="w-12 h-12" />
      </div>
    )
  }

  if (!deployedContractData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of "${contractName}" on chain "${configuredNetwork.name}"!`}
      </p>
    )
  }

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0 ${className}`}>
      <div className="grid grid-cols-1 col-span-5 gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="flex flex-col col-span-1">
          <div className="px-6 py-4 mb-6 space-y-1 border shadow-md bg-base-100 border-base-300 shadow-secondary rounded-3xl lg:px-8">
            <div className="flex">
              <div className="flex flex-col gap-1">
                <span className="font-bold">{contractName}</span>
                <Address address={deployedContractData.address} />
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold">Balance:</span>
                  <Balance address={deployedContractData.address} className="px-0 h-1.5 min-h-[0.375rem]" />
                </div>
              </div>
            </div>
            {configuredNetwork && (
              <p className="my-0 text-sm">
                <span className="font-bold">Network</span>:{' '}
                <span style={{ color: networkColor }}>{configuredNetwork.name}</span>
              </p>
            )}
          </div>
          <div className="px-6 py-4 shadow-lg bg-base-300 rounded-3xl lg:px-8 shadow-base-300">
            <ContractVariables
              refreshDisplayVariables={refreshDisplayVariables}
              deployedContractData={deployedContractData}
            />
          </div>
        </div>
        <div className="flex flex-col col-span-1 gap-6 lg:col-span-2">
          <div className="z-10">
            <div className="relative flex flex-col mt-10 border shadow-md bg-base-100 rounded-3xl shadow-secondary border-base-300">
              <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                <div className="flex items-center justify-center space-x-2">
                  <p className="my-0 text-sm">Read</p>
                </div>
              </div>
              <div className="p-5 divide-y divide-base-300">
                <ContractReadMethods deployedContractData={deployedContractData} />
              </div>
            </div>
          </div>
          <div className="z-10">
            <div className="relative flex flex-col mt-10 border shadow-md bg-base-100 rounded-3xl shadow-secondary border-base-300">
              <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                <div className="flex items-center justify-center space-x-2">
                  <p className="my-0 text-sm">Write</p>
                </div>
              </div>
              <div className="p-5 divide-y divide-base-300">
                <ContractWriteMethods
                  deployedContractData={deployedContractData}
                  onChange={triggerRefreshDisplayVariables}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
