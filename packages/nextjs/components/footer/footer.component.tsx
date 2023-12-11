import { hardhat } from 'wagmi/chains'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { SwitchTheme } from '~~/components/footer/switch-theme'
import { Faucet } from '~~/components/scaffold-eth'
import { useGlobalState } from '~~/services/store/store'
import { getTargetNetwork } from '~~/utils/scaffold-eth'

/**
 * Site footer
 */
export function Footer() {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrencyPrice)

  return (
    <div className="min-h-0 px-1 py-5 mb-11 lg:mb-0">
      <div>
        <div className="fixed bottom-0 left-0 z-10 flex items-center justify-between w-full p-4 pointer-events-none">
          <div className="flex space-x-2 pointer-events-auto">
            {nativeCurrencyPrice > 0 && (
              <div className="gap-0 font-normal cursor-auto btn btn-primary btn-sm">
                <CurrencyDollarIcon className="h-4 w-4 mr-0.5" />
                <span>{nativeCurrencyPrice}</span>
              </div>
            )}
            {getTargetNetwork().id === hardhat.id && <Faucet />}
          </div>
          <SwitchTheme className="pointer-events-auto" />
        </div>
      </div>
    </div>
  )
}
