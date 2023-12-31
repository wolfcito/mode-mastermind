import { ContentDidacticSwiperSlide } from '~~/contexts/ContentDidacticById/interfaces'

export interface DidacticContentAttributes {
  area: string
  value: number
}

export interface DidacticContentCoverflowCardProps {
  id: string
  title: string
  img: {
    path: string
    width: number
    height: number
  }
  description: string
  link: string
  attributes: DidacticContentAttributes
}

export interface QuizzAnswer {
  label: string
  name: string
  value: string
  isCorrect: boolean
}

export interface QuizzQuestion {
  statement: string
  answers: QuizzAnswer[]
}

export interface Quizz {
  questions: QuizzQuestion[]
}

export interface Slide {
  title: string
  img: {
    path: string
    width: number
    heigth: number
  }
  desciption: string
  quizz: Quizz
}

export interface DidacticContentClasses {
  id: string
  slides: Slide[]
  badget: {
    area: string
    value: number
    img: {
      path: string
      width: number
      heigth: number
    }
    title: string
    description: string
    tags: string[]
  }
}

export interface SwiperSlideContentProps {
  slide: ContentDidacticSwiperSlide
  allSlides: ContentDidacticSwiperSlide[]
}
