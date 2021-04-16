import React from 'react';
import { View, StyleSheet, Alert, Platform } from 'react-native'
import { Headline, Text, Subheading, Button, FAB } from 'react-native-paper'
import globalStyles from '../styles/global';
import axios from 'axios'


const DetallesCliente = ({navigation, route }) => {

    const { guardarConsultarAPI } = route.params

    //console.log(route.params)
    const { nombre, telefono, correo, empresa, id }  = route.params.item;

    const mostrarConfirmacion = () => {
        Alert.alert(
            '¿Deseas eliminar este cliente?',
            'Un contacto eliminado no se puede recuperar',
            [
                {text: 'Sí Eliminar', onPress: () => eliminarContacto()},
                {text: 'Cancelar', style: 'cancel'}
            ]
        )
    }

    const eliminarContacto = async() => {

        try {

            if (Platform.OS === 'ios') {
                await axios.delete(`http://localhost:3000/clientes/${id}`)
            } else {
                await axios.delete(`http://192.168.33.106:3000/clientes/${id}`)
            }

            //--- Redireccionar ---//
            navigation.navigate('Inicio');

            //--- volver a consultar la API ---//
            guardarConsultarAPI(true);

            
        } catch (error) {
            console.log(error);
        }
        
    }

    return ( 
       <View style={ globalStyles.contedor }>
           <Headline style={ globalStyles.titulo } >{ nombre }</Headline>
           <Text style={ styles.texto } >Empresa: <Subheading>{empresa}</Subheading></Text>
           <Text style={ styles.texto } >Correo: <Subheading>{correo}</Subheading></Text>
           <Text style={ styles.texto } >Teléfono: <Subheading>{telefono}</Subheading></Text>

           <Button 
                style={ styles.boton } 
                mode='contained' 
                icon='cancel'
                onPress={ () => mostrarConfirmacion() }
                >
               Eliminar Cliente
           </Button>


           <FAB 
                icon='pencil'
                style={ globalStyles.fab }
                onPress={ () => navigation.navigate('NuevoCliente', {cliente: route.params.item ,guardarConsultarAPI}) } /** le paso la funcion al componente  */
            />

       </View>
     );
}


const styles = StyleSheet.create({

    texto:{
        marginBottom: 20,
        fontSize:18,

    },
    boton:{
        marginTop: 100,
        backgroundColor: 'red'
    }



})
 
export default DetallesCliente;