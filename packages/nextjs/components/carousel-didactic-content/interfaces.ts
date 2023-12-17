export interface DidacticContentCoverflowCardProps {
    id: string,
    title: string,
    img: {
        path: string,
        width: number,
        height: number
    },
    description: string,
    link: string
}
export interface QuizzAnswer {
    label: string;
    value: string;
    isCorrect: boolean;
    
}

export interface QuizzQuestion {
    statement: string;
    answers: QuizzAnswer[]
}

export interface Quizz {
    questions: QuizzQuestion[]
}

export interface Slide {
    title: string;
    img: {
        path: string;
        width: number;
        heigth: number;
    }
    desciption: string;
    quizz: Quizz
}


export interface  DidacticContentClasses {
    id: string;
    slides: Slide[],
    badget: {
        img: {
            path: string,
            width: number,
            height: number
        },
        title: string;
        description: string;
        tags: string[]
    }
}
