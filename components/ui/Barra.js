import React from 'react';

import { Button } from 'react-native-paper'


const BarraSuperior = ({ navigation, route }) => {

    const handlePress  = () => {
    
        console.log('vamos a crear un cliente')
        
    }
    

    return (  
        <Button onPress={ () => handlePress() } >
            Cliente
        </Button>
    );
}
 
export default BarraSuperior;