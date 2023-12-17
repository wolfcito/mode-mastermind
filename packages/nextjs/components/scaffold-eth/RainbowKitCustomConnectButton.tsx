import { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { QRCodeSVG } from 'qrcode.react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useDisconnect, useSwitchNetwork } from 'wagmi'
import {
  ArrowLeftOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline'
import { Address, Balance, BlockieAvatar } from '~~/components/scaffold-eth'
import { useAutoConnect, useNetworkColor } from '~~/hooks/scaffold-eth'
import { PlayIcon } from '~~/icons'
import { getBlockExplorerAddressLink, getTargetNetwork } from '~~/utils/scaffold-eth'

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  useAutoConnect()
  const networkColor = useNetworkColor()
  const configuredNetwork = getTargetNetwork()
  const { disconnect } = useDisconnect()
  const { switchNetwork } = useSwitchNetwork()
  const [addressCopied, setAddressCopied] = useState(false)

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(getTargetNetwork(), account.address)
          : undefined

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button className="normal-case btn btn-secondary btn-sm" onClick={openConnectModal} type="button">
                    <PlayIcon />
                    Play me
                  </button>
                )
              }

              if (chain.unsupported || chain.id !== configuredNetwork.id) {
                return (
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="gap-1 btn btn-error btn-sm dropdown-toggle">
                      <span>Wrong network</span>
                      <ChevronDownIcon className="w-4 h-6 ml-2 sm:ml-0" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="gap-1 p-2 mt-1 dropdown-content menu shadow-center shadow-accent bg-base-100 rounded-box"
                    >
                      <li>
                        <button
                          className="btn-sm !rounded-xl flex py-3 gap-3"
                          type="button"
                          onClick={() => switchNetwork?.(configuredNetwork.id)}
                        >
                          <ArrowsRightLeftIcon className="w-4 h-6 ml-2 sm:ml-0" />
                          <span className="whitespace-nowrap">
                            Switch to <span style={{ color: networkColor }}>{configuredNetwork.name}</span>
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="menu-item text-error btn-sm !rounded-xl flex gap-3 py-3"
                          type="button"
                          onClick={() => disconnect()}
                        >
                          <ArrowLeftOnRectangleIcon className="w-4 h-6 ml-2 sm:ml-0" /> <span>Disconnect</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )
              }

              return (
                <div className="flex items-center justify-end px-2">
                  <div className="flex flex-col items-center mr-1">
                    <Balance address={account.address} className="h-auto min-h-0" />
                    <span className="text-xs" style={{ color: networkColor }}>
                      {chain.name}
                    </span>
                  </div>
                  <div className="leading-3 dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-secondary btn-sm pl-0 pr-2 shadow-md dropdown-toggle gap-0 !h-auto"
                    >
                      <BlockieAvatar address={account.address} size={30} ensImage={account.ensAvatar} />
                      <span className="ml-2 mr-1">{account.displayName}</span>
                      <ChevronDownIcon className="w-4 h-6 ml-2 sm:ml-0" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu z-[2] p-2 mt-2 shadow-center shadow-accent bg-base-200 rounded-box gap-1"
                    >
                      <li>
                        {addressCopied ? (
                          <div className="btn-sm !rounded-xl flex gap-3 py-3">
                            <CheckCircleIcon
                              className="w-4 h-6 ml-2 text-xl font-normal cursor-pointer sm:ml-0"
                              aria-hidden="true"
                            />
                            <span className=" whitespace-nowrap">Copy address</span>
                          </div>
                        ) : (
                          <CopyToClipboard
                            text={account.address}
                            onCopy={() => {
                              setAddressCopied(true)
                              setTimeout(() => {
                                setAddressCopied(false)
                              }, 800)
                            }}
                          >
                            <div className="btn-sm !rounded-xl flex gap-3 py-3">
                              <DocumentDuplicateIcon
                                className="w-4 h-6 ml-2 text-xl font-normal cursor-pointer sm:ml-0"
                                aria-hidden="true"
                              />
                              <span className=" whitespace-nowrap">Copy address</span>
                            </div>
                          </CopyToClipboard>
                        )}
                      </li>
                      <li>
                        <label htmlFor="qrcode-modal" className="btn-sm !rounded-xl flex gap-3 py-3">
                          <QrCodeIcon className="w-4 h-6 ml-2 sm:ml-0" />
                          <span className="whitespace-nowrap">View QR Code</span>
                        </label>
                      </li>
                      <li>
                        <button className="menu-item btn-sm !rounded-xl flex gap-3 py-3" type="button">
                          <ArrowTopRightOnSquareIcon className="w-4 h-6 ml-2 sm:ml-0" />
                          <a
                            target="_blank"
                            href={blockExplorerAddressLink}
                            rel="noopener noreferrer"
                            className="whitespace-nowrap"
                          >
                            View on Block Explorer
                          </a>
                        </button>
                      </li>
                      <li>
                        <button
                          className="menu-item text-error btn-sm !rounded-xl flex gap-3 py-3"
                          type="button"
                          onClick={() => disconnect()}
                        >
                          <ArrowLeftOnRectangleIcon className="w-4 h-6 ml-2 sm:ml-0" /> <span>Disconnect</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <input type="checkbox" id="qrcode-modal" className="modal-toggle" />
                    <label htmlFor="qrcode-modal" className="cursor-pointer modal">
                      <label className="relative modal-box">
                        {/* dummy input to capture event onclick on modal box */}
                        <input className="absolute top-0 left-0 w-0 h-0" />
                        <label
                          htmlFor="qrcode-modal"
                          className="absolute btn btn-ghost btn-sm btn-circle right-3 top-3"
                        >
                          ✕
                        </label>
                        <div className="py-6 space-y-3">
                          <div className="flex flex-col items-center gap-6 space-x-4">
                            <QRCodeSVG value={account.address} size={256} />
                            <Address address={account.address} format="long" disableAddressLink />
                          </div>
                        </div>
                      </label>
                    </label>
                  </div>
                </div>
              )
            })()}
          </>
        )
      }}
    </ConnectButton.Custom>
  )
}
