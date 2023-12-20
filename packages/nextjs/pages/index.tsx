import Image from 'next/image'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import { BadgeButton } from '~~/components/button'
import { MetaHeader } from '~~/components/header'
import { HOME_ROADMAP } from '~~/constants'
import { BadgeButton } from '~~/components/button'
import { Slider } from '~~/components/animation'
import { ModeIcon } from '~~/icons'

export default function Home() {
  return (
    <>
      <MetaHeader />
      <main className="flex flex-col items-center flex-grow pt-10 pb-60">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="w-[750px] mt-24 mx-auto mb-6 text-center">
            <span className="text-5xl font-press">LEARN <span className='block mt-1 mb-4'><ModeIcon /></span> AND UNLOCK RARE BADGES</span>
          </h1>

          <div className='flex justify-center mt-3 mb-6'>
            <BadgeButton label=" Play Now" onClick={function (): void {
              console.log("Play Now")
            } } />
          </div>
        
          {HOME_ROADMAP.map(item => (
            <div className="flex flex-col items-center justify-center" key={nanoid()}>
              <div className="flex flex-col items-center justify-center max-w-lg">
                <p className="mt-10 text-2xl font-light text-justify font-ibm-mono text-neutral-400">
                  {item.description}
                </p>
                <Image
                  src={item.image}
                  width="50"
                  height="50"
                  alt="challenge banner"
                  priority
                  className="object-contain w-12 h-12 mt-4"
                />
              </div>
            </div>
          ))}
        </div>
        <div className='pointer-events-none w-full h-2/3 bg-gradient-to-t from-black to-transparent fixed bottom-0 flex items-end'>
          <Slider/>
        </div>
      </main>
    </>
  )
}
