import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './FormPageStyles';
import { Button } from '../Button';
import { InputText } from '../InputText';
import inputValues from '../../JSON/inputValues.json'
import batSignal from '../../../assets/bat-signal.png'


interface iProps {
    isVisible: boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function FormPage({ isVisible, setIsVisible }: iProps) {
  return (
    <View style={styles.form}>
        <Image
            source={batSignal}
            style={styles.img}
        />
        { inputValues.map(value => {
            return <InputText
                        placeholder={ value.placeholder }
                    >
                        { value.label }
                    </InputText>
                                    }
                        )
        }
        <Button
                isVisible={ isVisible }
                setIsVisible={ setIsVisible }
            >
                HELP ME!
        </Button>
    </View>
  );
}