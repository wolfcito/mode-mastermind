import Image from 'next/image'
import { nanoid } from 'nanoid'
import { MetaHeader } from '~~/components/header'

export default function Trivia() {
  const team = [
    {
      name: 'Wolfcito',
      url: '/assets/team/wolfcito.png',
    },
    {
      name: 'Danny',
      url: '/assets/team/danny.jpeg',
    },
    {
      name: 'Koha',
      url: '/assets/team/koha.png',
    },
  ]
  return (
    <>
      <MetaHeader />
      <main className="flex flex-col items-center flex-grow pt-10 pb-60">
        <h1 className="w-full mt-24 mb-10 text-center">
          <span className="text-6xl font-press">Our Heros</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map(member => (
            <div className="shadow-xl card compact" key={nanoid()}>
              <figure>
                <Image
                  className="rounded-xl mask mask-squircle"
                  width={200}
                  height={200}
                  src={member.url}
                  alt={`${member.name} image`}
                />
              </figure>
              <h2 className="py-4 font-semibold text-center">{member.name}</h2>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
