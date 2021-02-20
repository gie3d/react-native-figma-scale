import { useContext } from 'react';
import { Dimensions } from 'react-native';

import { ScaleContext, ScaleProviderType } from './ScaleProvider';

export const swidth = (figmaWidth: number) => {
    const screenWidth = Dimensions.get('window').width;
    const figmaScreenSize: ScaleProviderType = useContext(ScaleContext);
    return figmaWidth * screenWidth / figmaScreenSize.width;
}

export const sheight = (figmaHeight: number) => {
    const screenHeight = Dimensions.get('window').height;
    const figmaScreenSize: ScaleProviderType = useContext(ScaleContext);
    return figmaHeight * screenHeight / figmaScreenSize.height;
}