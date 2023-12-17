import React from "react"
import { DidacticContentClasses } from "~~/components/carousel-didactic-content/interfaces";

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