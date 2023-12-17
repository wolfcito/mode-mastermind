import { DidacticContentCoverflowCardProps } from "~~/components/carousel-didactic-content/interfaces";

export const DidacticContentCards : DidacticContentCoverflowCardProps[]= [
    {
        id: "decentralization",
        title: "Decentralization",
        img: {
            path: "/assets/badge-1.png",
            width: 50,
            height: 50
        },
        description: "",
        link: `content-didactic/decentralization`
    },
    {
        id: "interoperability",
        title: "Interoperability",
        img: {
            path: "/assets/badge-2-without-backgound.png",
            width: 50,
            height: 50
        },
        description: "",
        link: "content-didactic/interoperability"
    },
    {
        id: "semantic-web",
        title: "Semantic Web",
        img: {
            path: "/assets/moon-badget-without-background.png",
            width: 50,
            height: 50
        },
        description: "",
        link: "content-didactic/semantic-web"
    },
    {
        id: "privacy",
        title: "Privacy and Security",
        img: {
            path: "/assets/square-badget-removebg-preview.png",
            width: 50,
            height: 50
        },
        description: "",
        link: "content-didactic/privacy"
    }
]