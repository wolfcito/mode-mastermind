import { createContext, useState } from "react";
import { ContentDidacticByIdActions, ContentDidacticByIdProviderProps, ContentDidacticByIdState, IContentDidacticByIdContext } from "./interfaces";

const contextStateInit: ContentDidacticByIdState = {
    progress: 0
}

const contextInit : IContentDidacticByIdContext = {
    value: contextStateInit,
    dispatch: {
        setProgress: () => {}
    }
}

export const ContentDidacticByIdContext = createContext<IContentDidacticByIdContext>(contextInit);

export const ContentDidacticByIdProvider = ({ children } : ContentDidacticByIdProviderProps) => {
    const [progress, setProgress] = useState<number>(0);

    const value: ContentDidacticByIdState = {
        progress,
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