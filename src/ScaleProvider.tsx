import React from 'react';
import { Dimensions } from 'react-native';

export interface ScaleProviderType {
    width: number
    height: number
    children?: React.ReactNode
}

export const ScaleContext = React.createContext<ScaleProviderType>({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
});

const ScaleProvider: React.FC<ScaleProviderType> = ({width, height, children}) => {
    return (
        <ScaleContext.Provider value={{width: width, height: height}}>
            {children}
        </ScaleContext.Provider>
    )
}

export default ScaleProvider;