import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './HomePageStyle';
import { Button } from '../../components/Button';
import batSignal from '../../../assets/bat-signal.png'

interface iProps {
    isVisible: boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function HomePage( { isVisible, setIsVisible }: iProps) {
  return (
    <View style={ styles.home }>
            <Image
                source={ batSignal }
            />
            <Button
                isVisible={ isVisible }
                setIsVisible={ setIsVisible }
            >
                ACTIVE BAT SIGNAL
            </Button>
        </View>
  );
}