import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native'
import { TextInput, Headline, Button,  Paragraph, Dialog, Portal } from 'react-native-paper'
import globalStyles from '../styles/global'
import axios from 'axios';

const NuevoCliente = () => {

    //TODO: copiar lo mismo de APP para cambiar los colores de los inputText

    //--- Campos Formularios ---//
    const [ nombre, guardarNombre ] = useState('');
    const [ telefono, guardarTelefono ] = useState('');
    const [ correo, guardarCorreo ] = useState('');
    const [ empresa, guardarEmpresa ] = useState('');
    const [ alerta, guardarAlerta ] = useState(false);



    //--- Almacena el cliente en  la BD ---//
    const guardarCliente = async () => {

        //--- validar ---//
        if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
            //console.log('Hay campos vacios')
            guardarAlerta(true);
            return
        }

        //--- generar el cliente ---//
        const cliente = { nombre, telefono, empresa, correo };
        console.log(cliente)



        //--- guardar el cliente en la API ---//
        try {

            if (Platform.OS === 'ios' ) {
                //--- para IOS --///
                await axios.post('http://localhost:3000/clientes', cliente)
            }else{
                //--- para android --//
                await axios.post('http://10.0.2.2:3000/clientes', cliente)
            }   


        } catch (error) {
            console.log(error)
        }


        //--- redereccionar ---//



        //---  limpiar el form (opcional) ---//

        
    }


    

    return ( 
        <View style={ globalStyles.contedor }>

            <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

            <TextInput 
                label='Nombre'
                placeholder='Enrique'
                onChangeText={ (texto) => guardarNombre(texto)}
                value={ nombre }// para poder resetear mas facil el formulario
                style={ styles.input }
                
            />

            <TextInput 
                label='Teléfono'
                placeholder='34674311'
                onChangeText={ (texto) => guardarTelefono(texto)}
                value={ telefono }// para poder resetear mas facil el formulario
                style={ styles.input }
                keyboardType='numeric'
            />

            <TextInput 
                label='Correo'
                placeholder='correo@correo.com'
                onChangeText={ (texto) => guardarCorreo(texto) }
                value={ correo }// para poder resetear mas facil el formulario
                style={ styles.input }
                keyboardType='email-address'
            />

            <TextInput
                label='Empresa'
                placeholder='APPLAND'
                onChangeText={ (texto) => guardarEmpresa(texto) }
                value={ empresa }// para poder resetear mas facil el formulario
                style={ styles.input }
            /> 

            <Button 
                icon='pencil-circle' 
                mode='contained'
                onPress={ () => guardarCliente() }
            >
                Guardar Cliente
            </Button>

            {/*** MUESTRO LA ALERTA AL USUARIO */}
            <Portal>
                <Dialog
                    visible={ alerta }
                    onDismiss={ () => guardarAlerta(false) }
                >
                    <Dialog.Title>Error</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>Todos los campos son obligatorios</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={ () => guardarAlerta(false) }>OK</Button>
                        </Dialog.Actions>
                </Dialog>
            </Portal>
            

        </View>
     );
}




const styles = StyleSheet.create({
    input:{
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
})

 
export default NuevoCliente;