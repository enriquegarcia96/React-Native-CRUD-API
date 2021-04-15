import React from 'react';

import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'

const BarraSuperior = ({ navigation, route }) => {

    const handlePress  = () => {
    
        navigation.navigate('NuevoCliente')// que navegue a Nuevo Cliente
        


    }
    

    return (  
        <Button  icon='plus-circle' color={'#FFF'}  onPress={ () => handlePress() } >
            Cliente
        </Button>
    );
}
 
export default BarraSuperior;