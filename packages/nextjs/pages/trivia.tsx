import { MetaHeader } from '~~/components/header'
import { MenuMain } from '~~/components/menu'

export default function Trivia() {
  return (
    <>
      <MetaHeader />
      <main className="flex flex-col items-center flex-grow pt-10 pb-60">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="w-full mt-24 mb-10 text-center">
            <span className="text-6xl font-press">Trivia</span>
          </h1>
          <MenuMain />
        </div>
      </main>
    </>
  )
}
