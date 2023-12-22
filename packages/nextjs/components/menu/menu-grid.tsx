import Image from 'next/image'
import { useRouter } from 'next/router'
import { BadgeButton } from '../button'
import clsx from 'clsx'
import { nanoid } from 'nanoid'
import { DidacticContentCards } from '~~/constants/didacitc-contnet.constants'
import styles from '~~/styles/gradient-border.module.css'

export function MenuMain() {
  const router = useRouter()

  return (
    <section className="flex flex-wrap justify-center w-full gap-6 wap-1">
      {DidacticContentCards.map(content => (
        <div className={clsx('shadow-xl card w-96 bg-neutral card-compact', styles.gradientBorder)} key={nanoid()}>
          <figure>
            <Image src={content.img.path} alt={`${content.title} image`} width={150} height={150} className="w-full" />
          </figure>
          <div className="card-body bg-primary">
            <h2 className="card-title">{content.title}</h2>
            <p>{content.description}</p>
            <div className="justify-center card-actions">
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
