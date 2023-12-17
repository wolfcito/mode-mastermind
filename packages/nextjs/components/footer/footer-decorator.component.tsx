import Image from 'next/image'

export function FooterDecorator() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-between w-full bg-gradient-to-t from-black">
      <Image
        src="/assets/mode/mode003-2.png"
        width="50"
        height="90"
        alt="challenge banner"
        priority
        className="w-auto h-60 grayscale"
      />
    </div>
  )
}
