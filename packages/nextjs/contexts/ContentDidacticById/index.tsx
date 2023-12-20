import { createContext, useState } from "react";
import { ContentDidacticByIdActions, ContentDidacticByIdProviderProps, ContentDidacticByIdState, IContentDidacticByIdContext } from "./interfaces";
import { MasterClasses } from "~~/constants/didacitc-contnet.constants";

const contextStateInit: ContentDidacticByIdState = {
    progress: 20,
    contentDidactic: {
        id: "",
        slides: [],
        badget: {
            img: {
                path: "",
                width: 0,
                heigth: 0
            },
            title: "",
            description: "",
            tags: []
        }
    }
}

const contextInit : IContentDidacticByIdContext = {
    value: contextStateInit,
    dispatch: {
        setProgress: () => {}
    }
}

export const ContentDidacticByIdContext = createContext<IContentDidacticByIdContext>(contextInit);

export const ContentDidacticByIdProvider = ({ children, idContent } : ContentDidacticByIdProviderProps) => {
    const [progress, setProgress] = useState<number>(20);

    const value: ContentDidacticByIdState = {
        progress,
        contentDidactic: MasterClasses.find( cl => cl.id === idContent) || contextStateInit.contentDidactic
    }

    const actions: ContentDidacticByIdActions = {
        setProgress
    }

    return (
        <ContentDidacticByIdContext.Provider value={{value, dispatch: actions}}>
            {children}
        </ContentDidacticByIdContext.Provider>
    );
}