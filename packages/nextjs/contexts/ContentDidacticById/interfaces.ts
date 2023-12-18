import React from "react"
import { DidacticContentClasses, Quizz } from "~~/components/carousel-didactic-content/interfaces";

export interface ContentDidacticByIdState {
    progress: number,
    contentDidactic: DidacticContentClasses
}

export interface ContentDidacticByIdActions {
    setProgress: (progress: number) => void
}

export interface IContentDidacticByIdContext {
    value: ContentDidacticByIdState,
    dispatch: ContentDidacticByIdActions
}


export interface ContentDidactic {
    title: string;

}


export interface ContentDidacticByIdProviderProps {
    children: React.ReactNode;
    idContent: string | string[] | undefined;
}

export enum ContentDidacticSlideTypes {
    INFORMATIVE, 
    TEST,
    BAGDET
}

export interface ContentDidacticSwiperSlide {
    id: string;
    type: ContentDidacticSlideTypes,
    title: string;
    img: {
        path: string;
        width: number;
        heigth: number;
    }
    desciption: string;
    quizz: Quizz,
    badget: {
        img: {
            path: string,
            width: number,
            heigth: number
        },
        title: string;
        description: string;
        tags: string[]
    }
}

export interface UseRunwayContentDidactic {
    swiperSlides: ContentDidacticSwiperSlide[]
}