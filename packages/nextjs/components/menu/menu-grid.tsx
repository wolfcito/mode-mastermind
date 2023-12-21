// import { useId } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BadgeButton } from '../button'
import clsx from 'clsx'
import { nanoid } from 'nanoid'
import { DidacticContentCards } from '~~/constants/didacitc-contnet.constants'
import styles from '~~/styles/gradient-border.module.css'

// import styles from '~~/styles/carousel-didactic-content.module.css'

export function MenuMain() {
  //   const idMenuMain = useId()
  const router = useRouter()

  return (
    <section className="flex flex-row flex-wrap justify-center w-full gap-6 wap-1">
      {DidacticContentCards.map(content => (
        <div
          className={`${clsx('max-w-[350px] card card-compact')} ${styles.gradientBorder} backdrop-blur-xl`}
          key={nanoid()}
        >
          <figure className="z-10">
            <Image
              src={content.img.path}
              alt={`${content.title} image`}
              className={clsx('object-cover h-60 max-w-sm w-full')}
              width={150}
              height={150}
            />
          </figure>
          <div className="space-y-3 card-body">
            <div className="flex items-center justify-center">
              <p className="p-0 m-0 text-xl font-semibold">{content.title}</p>
              <div className="flex flex-wrap mt-1 space-x-2">
                <span className="py-3 badge badge-primary">{content.attributes.area}</span>
              </div>
            </div>
            <div className="flex flex-col justify-center flex-1 mt-1">
              <p className="my-0 text-base font-light">{content.description}</p>
            </div>
            <div className="flex items-end justify-center px-10 pt-4 pb-2">
              <BadgeButton
                label="START"
                onClick={() => {
                  router.push(`content-didactic/${content.id}`)
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

{
  /*<div className={`max-w-xs rounded overflow-hidden shadow-lg border border-white rounded m-10 ${styles.itemMenu}`}
                  key={`${idMenuMain}-${index}-${content.id}`}>
                  <img className="w-full h-64 p-6"  src={content.img.path} alt={content.title} />
                  <div className="px-6 py-4">
                      <div className="mb-2 text-xl font-bold">{content.title}</div>
                      <p className="text-base text-gray-100">
                          {content.description}
                      </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                      <Button label="START!" onClick={() => { router.push(`content-didactic/${content.id}`) }} />
                  </div>
          </div>*/
}
