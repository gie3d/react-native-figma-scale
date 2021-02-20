import * as React from 'react';

import { View } from 'react-native';
import { ScaleProvider, swidth, sheight } from 'react-native-figma-scale';


export default function App() {
  return (
    <ScaleProvider width={375} height={812}>
      <AppForTest />
    </ScaleProvider>
  );
}

const AppForTest = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{
        width: swidth(350), 
        height: sheight(400), 
        backgroundColor: 'red', 
        justifyContent: 'center', 
        alignItems: 'center'}}
      >
      </View>
    </View>
  )
}