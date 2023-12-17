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