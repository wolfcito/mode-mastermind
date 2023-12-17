import Image from 'next/image'
import { DidacticContentCoverflow } from '~~/components/carousel-didactic-content'
import { FooterDecorator } from '~~/components/footer'
import { MetaHeader } from '~~/components/header'

export default function Home() {
  return (
    <>
      <MetaHeader />
      <main className="flex flex-col items-center flex-grow pt-10 pb-60">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="w-full mb-6 text-center">
            <span className="text-6xl font-VT323">LEARN MODE AND UNLOCK RARE BADGES</span>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center max-w-lg">
              <p className="mt-8 text-2xl font-light text-center font-ibm-mono text-slate-400">
                Challenge yourself with mind-boggling trivia, earn badges as you conquer each level, and strive for epic
                achievements.
              </p>
              <Image
                src="/assets/mode/separator.png"
                width="50"
                height="50"
                alt="challenge banner"
                priority
                className="object-contain w-12 h-12"
              />
              <p className="mt-8 text-2xl font-light text-center font-ibm-mono text-slate-400">
                Your journey to becoming a Mode Mastermind begins here! Challenge yourself with mind-boggling trivia,
                earn badges as you conquer each level, and strive for epic achievements. Your journey to becoming a Mode
                Mastermind begins here! Challenge yourself with mind-boggling trivia, earn badges as you conquer each
                level, and strive for epic achievements. Your journey to becoming a Mode Mastermind begins here!
                Challenge yourself with mind-boggling trivia, earn badges as you conquer each level, and strive for epic
                achievements. Your journey to becoming a Mode Mastermind begins here!
              </p>
            </div>
            <section>
              <DidacticContentCoverflow />
            </section>
            <FooterDecorator />
          </div>
        </div>
      </main>
    </>
  )
}
