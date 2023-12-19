import React, { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { FaucetButton, RainbowKitCustomConnectButton } from '~~/components/scaffold-eth'
import { useOutsideClick } from '~~/hooks/scaffold-eth'
import { ModeLogoIcon } from '~~/icons'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? 'bg-secondary shadow-md' : ''
      } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral-content py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
    >
      {children}
    </Link>
  )
}

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const burgerMenuRef = useRef<HTMLDivElement>(null)
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  )

  const navLinks = (
    <>
      <li>
        <NavLink href="/badge">Badges</NavLink>
      </li>
      <li>
        <NavLink href="/achievement">Achievements</NavLink>
      </li>
      <li>
        <NavLink href="/transfers">Transfers</NavLink>
      </li>

      <li>
        <NavLink href="/debug">Debug Contracts</NavLink>
      </li>
    </>
  )

  return (
    <div className="sticky top-0 z-20 justify-between flex-shrink-0 min-h-0 px-0 bg-transparent xl:static navbar sm:px-2">
      <div className="w-auto navbar-start xl:w-1/2">
        <div className="xl:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? 'hover:bg-secondary' : 'hover:bg-transparent'}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState)
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false)
              }}
            >
              {navLinks}
            </ul>
          )}
        </div>
        <Link href="/" passHref className="items-center hidden gap-1 ml-4 mr-6 xl:flex shrink-0">
          <div className="relative flex w-10 h-10">
            <ModeLogoIcon />
          </div>
          <div className="flex flex-col ml-1">
            <span className="font-bold leading-tight">Mode Mastermind</span>
          </div>
        </Link>
        <ul className="hidden gap-2 px-1 xl:flex xl:flex-nowrap menu menu-horizontal text-neutral-500">{navLinks}</ul>
      </div>
      <div className="flex-grow mr-4 navbar-end">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  )
}
