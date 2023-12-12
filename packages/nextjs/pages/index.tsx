import Image from 'next/image'
import { MetaHeader } from '~~/components/header'

export default function Home() {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center flex-grow pt-10">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="mb-6 text-center">
            <span className="block text-4xl font-bold">Mode Mastermind</span>
            <span className="block text-2xl font-bold">Unleash Your Knowledge!</span>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/mode/mode001.jpg"
              width="727"
              height="231"
              alt="challenge banner"
              priority
              className="object-contain w-auto border-4 rounded-xl border-neutral h-80"
            />
            <div className="max-w-3xl">
              <p className="mt-8 text-lg text-center">
                Dive into a world where learning is an adventure and every question is a stepping stone to mastery. 🎓✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
