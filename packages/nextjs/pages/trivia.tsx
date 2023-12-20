import Image from 'next/image'
import { nanoid } from 'nanoid'
import { DidacticContentCoverflow } from '~~/components/carousel-didactic-content'
import { FooterDecorator } from '~~/components/footer'
import { MetaHeader } from '~~/components/header'
import { MenuMain } from '~~/components/menu'
import { HOME_ROADMAP } from '~~/constants'

export default function Home() {
  return (
    <>
      <MetaHeader />
      <main className="flex flex-col items-center flex-grow pt-10 pb-60">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="w-full mb-6 text-center">
            <span className="text-6xl font-VT323">Trivia</span>
          </h1>

          <MenuMain />
        </div>
      </main>
    </>
  )
}
