import { useContext, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SwiperSlideContentProps } from './interfaces'
import { nanoid } from 'nanoid'
import { useSwiper } from 'swiper/react'
import { useAccount } from 'wagmi'
import { Toast } from '~~/components/alerts/toast.component'
import { BadgeButton } from '~~/components/button'
import { ContentDidacticByIdContext } from '~~/contexts/ContentDidacticById'
import { ContentDidacticSlideTypes } from '~~/contexts/ContentDidacticById/interfaces'
import { useScaffoldContractRead, useScaffoldContractWrite } from '~~/hooks/scaffold-eth'
import styles from '~~/styles/swiper-slide-content.module.css'
import { notification } from '~~/utils/scaffold-eth'
import { ipfsClient } from '~~/utils/simpleNFT'
import { NftsMetadataProps, defaultMetadata } from '~~/utils/simpleNFT/nfts-metadata.type'
import { badgesMetadata } from '~~/utils/simpleNFT/nftsMetadata'

export function SwiperSlideContent({ slide }: SwiperSlideContentProps) {
  const pageContext = useContext(ContentDidacticByIdContext)
  const [isCorrectAns, setIsCorrectAns] = useState<boolean>(false)
  const swiper = useSwiper()
  const router = useRouter()

  let currentValueBadge: number
  let currentAreaBadge: string
  let currentTokenMetaData: NftsMetadataProps

  const { address: connectedAddress, isConnected, isConnecting } = useAccount()

  const { writeAsync: mintItem } = useScaffoldContractWrite({
    contractName: 'ModeMasterMind',
    functionName: 'mintItem',
    args: [connectedAddress, ''],
  })

  const { data: tokenIdCounter } = useScaffoldContractRead({
    contractName: 'ModeMasterMind',
    functionName: 'tokenIdCounter',
    watch: true,
    cacheOnBlock: true,
  })

  const handleMintItem = async ({ currentTokenMetaData }: { currentTokenMetaData: NftsMetadataProps }) => {
    // circle back to the zero item if we've reached the end of the array
    if (tokenIdCounter === undefined) return

    const notificationId = notification.loading('Uploading to IPFS')
    try {
      const uploadedItem = await ipfsClient.add(JSON.stringify(currentTokenMetaData))

      // First remove previous loading notification and then show success notification
      notification.remove(notificationId)
      notification.success('Metadata uploaded to IPFS')

      await mintItem({
        args: [connectedAddress, uploadedItem.path],
      })

      router.push('/badge')
    } catch (error) {
      notification.remove(notificationId)
      console.error(error)
    }
  }

  switch (slide.type) {
    case ContentDidacticSlideTypes.INFORMATIVE:
      return (
        <article className="flex h-[70vh] content-center justify-center ">
          <div className="max-w-sm w-[80-vw] lg:max-w-[80vw] lg:min-w-[70vw] lg:flex my-10 px-10 shadow-lg ">
            <div
              className="flex-none w-1/3 h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-1/3 lg:rounded-t-none lg:rounded-l"
              style={{ backgroundImage: `url('${slide.img.path}')` }}
              title={slide.title}
            ></div>
            <div className="flex flex-col justify-between w-2/3 p-4 leading-normal bg-black border rounded-b border-lime-300 lg:border lg:border-lime-300 lg:rounded-b-none lg:rounded-r">
              <div className="mb-8">
                <h4 className="mb-2 text-3xl text-center font-press">{slide.title}</h4>
                <p className="text-base text-justify text-lime-300">{slide.desciption}</p>
              </div>

              <BadgeButton
                label="Take Quiz"
                onClick={() => {
                  pageContext.dispatch.setProgress(pageContext.value.progress + 5)
                  swiper.slideNext()
                }}
              />
            </div>
          </div>
        </article>
      )
    case ContentDidacticSlideTypes.TEST:
      return (
        <article className="flex h-[70vh] content-center justify-center ">
          <div className="max-w-sm w-[80-vw] lg:max-w-[80vw] lg:min-w-[70vw] lg:flex my-10 px-10 shadow-lg ">
            <div
              className="flex-none w-1/3 h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-1/3 lg:rounded-t-none lg:rounded-l"
              style={{ backgroundImage: `url('${slide.img.path}')` }}
              title={slide.title}
            ></div>
            <div className="flex flex-col justify-between w-2/3 p-4 leading-normal bg-black border rounded-b border-lime-300 lg:border lg:border-lime-300 lg:rounded-b-none lg:rounded-r">
              <div className="mb-8">
                {slide.quizz.questions.map(question => (
                  <label key={nanoid()} className="text-white">
                    {question.statement}
                    <ul className="w-full my-6 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      {question.answers.map(answer => (
                        <li
                          className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                          key={nanoid()}
                        >
                          <div className="flex items-center ps-3">
                            <input
                              id="list-radio-license"
                              type="radio"
                              value={answer.value}
                              name={answer.name}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-lime-500 dark:focus:ring-lime-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                              onChange={() => setIsCorrectAns(answer.isCorrect)}
                            />
                            <label
                              htmlFor="list-radio-license"
                              className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                            >
                              {answer.label}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </label>
                ))}
              </div>

              <BadgeButton
                label="Check answer"
                onClick={() => {
                  Toast.fire({
                    icon: isCorrectAns ? 'success' : 'error',
                    title: isCorrectAns ? 'Good job!🌟' : "Don't worry, keep trying 🤔",
                  })

                  if (isCorrectAns) {
                    pageContext.dispatch.setProgress(pageContext.value.progress + 20)
                    swiper.slideNext()
                  }
                }}
              />
            </div>
          </div>
        </article>
      )
    case ContentDidacticSlideTypes.BAGDET:
      currentValueBadge = slide.badget.value
      currentAreaBadge = slide.badget.area

      currentTokenMetaData =
        badgesMetadata.find(badge => {
          return (
            badge.type === 'badge' &&
            badge.attributes.some(
              atributo => atributo.trait_type === 'Ability' && atributo.value === currentValueBadge,
            ) &&
            badge.attributes.some(atributo => atributo.trait_type === 'Area' && atributo.value === currentAreaBadge)
          )
        }) ?? defaultMetadata

      if (currentTokenMetaData.type === 'empty') {
        console.error('currentTokenMetaData is undefined')
        return null
      }

      return (
        <div className="flex content-center justify-center mt-3">
          <article className="flex flex-col items-center content-center justify-center">
            <h1 className="my-6">
              <span className="text-4xl font-press">Badge Unlocked</span>
            </h1>
            <div
              className={` max-w-sm w-full rounded overflow-hidden shadow-lg my-6 flex flex-col content-center justify-center items-center ${styles.badget}`}
            >
              <Image
                className="block m-auto my-8 "
                src={currentTokenMetaData.image}
                alt={currentTokenMetaData.name}
                width={150}
                height={150}
              />
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-neutral-content">{currentTokenMetaData.name}</div>
                  <div className="px-6 pt-4 pb-2">
                    {currentTokenMetaData.attributes.map(item => {
                      if (item.trait_type === 'Area')
                        return (
                          <span
                            className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-secondary-content bg-neutral"
                            key={nanoid()}
                          >
                            {item.value}
                          </span>
                        )
                    })}
                  </div>
                </div>
                <p className="text-base text-current">{currentTokenMetaData.description}</p>
              </div>

              <div className="px-6 pt-4 mb-4">
                <BadgeButton
                  label="Claim Badge"
                  onClick={() => handleMintItem({ currentTokenMetaData: currentTokenMetaData })}
                />
              </div>
            </div>
          </article>
        </div>
      )
    default:
      return null
  }
}
