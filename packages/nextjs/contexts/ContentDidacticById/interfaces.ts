import React from "react"

export interface ContentDidacticByIdState {
    progress: number
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