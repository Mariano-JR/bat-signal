import React, { useState } from 'react';
import { Text } from 'react-native';

import { styles } from './ButtonStyle';

interface iProps {
    children: string
    isVisible: boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function Button({ children, isVisible, setIsVisible }: iProps) {

  return (
    <Text 
      style={ styles.button }
      onPress={() => setIsVisible(!isVisible)}
    >
        { children }
    </Text>
  );
}