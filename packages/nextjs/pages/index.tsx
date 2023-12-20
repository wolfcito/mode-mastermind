import Image from 'next/image'
import { DidacticContentCoverflow } from '~~/components/carousel-didactic-content'
import { FooterDecorator } from '~~/components/footer'
import { nanoid } from 'nanoid'
import { MetaHeader } from '~~/components/header'
import { HOME_ROADMAP } from '~~/constants'

export default function Home() {
  return (
    <>
      <MetaHeader />
      <main className="flex flex-col items-center flex-grow pt-10 pb-60">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="w-full mb-6 text-center">
            <span className="text-6xl font-VT323">LEARN MODE AND UNLOCK RARE BADGES</span>
          </h1>

          {HOME_ROADMAP.map(item => (
            <>
              <div className="flex flex-col items-center justify-center" key={nanoid()}>
                <div className="flex flex-col items-center justify-center max-w-lg">
                  <p className="mt-8 text-2xl font-light text-center font-ibm-mono text-neutral-400">
                    {item.description}
                  </p>
                  <Image
                    src={item.image}
                    width="50"
                    height="50"
                    alt="challenge banner"
                    priority
                    className="object-contain w-12 h-12"
                  />
                </div>
              </div>
              <section>
                <DidacticContentCoverflow />
              </section>
              <FooterDecorator />
            </>
          ))}
        </div>
      </main>
    </>
  )
}
