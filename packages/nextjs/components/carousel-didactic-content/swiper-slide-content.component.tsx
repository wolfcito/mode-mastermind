import { useContext, useState } from 'react'
import Image from 'next/image'
import { Toast } from '../alerts/toast.component'
import { BadgeButton, Button } from '../button'
import { SwiperSlideContentProps } from './interfaces'
import { nanoid } from 'nanoid'
import { useSwiper } from 'swiper/react'
import { ContentDidacticByIdContext } from '~~/contexts/ContentDidacticById'
import { ContentDidacticSlideTypes } from '~~/contexts/ContentDidacticById/interfaces'
import styles from '~~/styles/swiper-slide-content.module.css'

export function SwiperSlideContent({ slide }: SwiperSlideContentProps) {
  const pageContext = useContext(ContentDidacticByIdContext)
  const [isCorrectAns, setIsCorrectAns] = useState<boolean>(false)
  const swiper = useSwiper()

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
                <h4 className="mb-2 text-6xl text-center font-VT323">{slide.title}</h4>
                <p className="text-base text-justify text-lime-300">{slide.desciption}</p>
              </div>
              <div>
                <Button
                  label="Take Quiz!"
                  onClick={() => {
                    pageContext.dispatch.setProgress(pageContext.value.progress + 5)
                    swiper.slideNext()
                  }}
                />
              </div>
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
                <h4 className="mb-2 text-6xl text-center font-VT323">{slide.title}</h4>
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

              <div>
                <Button
                  label="Check answer"
                  onClick={() => {
                    Toast.fire({
                      icon: isCorrectAns ? 'success' : 'error',
                      title: isCorrectAns ? 'Good job!' : 'Try Again 😪',
                    })

                    if (isCorrectAns) {
                      pageContext.dispatch.setProgress(pageContext.value.progress + 20)
                      swiper.slideNext()
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </article>
      )
    case ContentDidacticSlideTypes.BAGDET:
      return (
        <div className="flex flex-col content-center justify-center ">
          <article className="flex h-[75vh] content-center justify-center ">
            <div
              className={`max-w-sm w-[20vw] rounded overflow-hidden shadow-lg border borger-lime-600 my-6 flex flex-col content-center justify-center  ${styles.badget}`}
            >
              <Image
                className="block m-auto my-8 "
                src={slide.badget.img.path}
                alt={slide.badget.title}
                width={slide.badget.img.width}
                height={slide.badget.img.heigth}
              />
              <div className="px-6 py-4 bg-purple-300 border-t border-b border-purple-600">
                <div className="mb-2 text-xl font-bold text-black">{slide.badget.title}</div>
                <p className="text-base text-black ">{slide.badget.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {slide.badget.tags.map(tag => (
                  <span
                    key={nanoid()}
                    className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="px-6 pt-4 pb-2">
                <BadgeButton />
              </div>
            </div>
          </article>
        </div>
      )
    default:
      return null
  }
}
