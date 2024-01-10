import React, { useState } from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyles';
import { HomePage } from '../../components/HomePage';
import { FormPage } from '../../components/FormPage';

export function Home() {
    const [ isVisible, setIsVisible ] = useState(true)

  return (
    <View style={styles.container}>
        { isVisible ? 
                        <HomePage
                            isVisible={ isVisible }
                            setIsVisible={ setIsVisible }
                        /> 
                    : 
                        <FormPage
                            isVisible={ isVisible }
                            setIsVisible={ setIsVisible }
                        />
        }
    </View>
  );
}