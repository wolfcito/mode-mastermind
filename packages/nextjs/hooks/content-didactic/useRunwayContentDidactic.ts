import { useContext } from "react";
import { ContentDidacticByIdContext } from "~~/contexts/ContentDidacticById";
import { ContentDidacticSlideTypes, ContentDidacticSwiperSlide, UseRunwayContentDidactic } from "~~/contexts/ContentDidacticById/interfaces";

export default function useRunwayContentDidactic(): UseRunwayContentDidactic {
    const { value } = useContext(ContentDidacticByIdContext)
    const { contentDidactic } = value

    const idContent = contentDidactic.id;
    const badget = contentDidactic.badget;

    const swiperSlides: ContentDidacticSwiperSlide[] = [];

    contentDidactic.slides.forEach((slide, index) => {
        const slideBase = {
            id: `${idContent}-${index}-`,
            badget,
            desciption: slide.desciption,
            img: slide.img,
            title: slide.title,
            quizz: slide.quizz,
            type: ContentDidacticSlideTypes.INFORMATIVE
        };

        swiperSlides.push(
            {
                ...slideBase,
                id: slideBase.id.concat(ContentDidacticSlideTypes.INFORMATIVE.toString()),
            },
            {
                ...slideBase,
                id: slideBase.id.concat(ContentDidacticSlideTypes.TEST.toString()),
                type: ContentDidacticSlideTypes.TEST
            }
        );
    });

    swiperSlides.push({
        id: `${idContent}-${ContentDidacticSlideTypes.BAGDET}`,
        badget,
        desciption: '',
        quizz: {
            questions: []
        },
        img: badget.img,
        title: contentDidactic.badget.title,
        type: ContentDidacticSlideTypes.BAGDET
    })


    return {
        swiperSlides
    }
}