import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './InputTextStyle';

interface iProps {
    children: string
    placeholder: string
}

export function InputText({ children, placeholder }: iProps) {
  return (
    <View style={styles.container}>
        <Text
            style={styles.text}
        >
            { children }
        </Text>
        <TextInput
            style={children === 'Location:' || children === 'Observation:' ? styles.bigInput : styles.input}
            keyboardType={children === 'Phone:' ? 'phone-pad' : 'default'}
            multiline={true}
            placeholder={ placeholder }
        />
    </View>
  );
}