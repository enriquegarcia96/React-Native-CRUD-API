import React, { useEffect, useState } from 'react'
import { Text, FlatList, View } from 'react-native';
import axios from 'axios'
import { List, Headline, Button, FAB } from 'react-native-paper'
import globalStyles from '../styles/global'

export const Inicio = ({ navigation }) => {

    //--- state de la APP ---//
    const [ clientes, guardarCliente ] = useState([]);
    const [ consultarAPI, guardarConsultarAPI ] = useState(true);


    const obtenerClientesApi = async () =>{
        try {
            const resultado = await axios.get('http://192.168.33.106:3000/clientes');
            //console.log(resultado.data);
            guardarCliente(resultado.data);
            guardarConsultarAPI(false)
        } catch (error) {

            console.log(error);
        }
    }
    
    /**
     * UseEffect: se ejecuta cuando algo cambia en el componente y cuando carga el componente 
     * 
    */
    useEffect( () => {

        if (consultarAPI) {
            obtenerClientesApi();
        }

    }, [consultarAPI]);

    return (
        <View style={ globalStyles.contedor }>

            <Button icon='plus-circle' onPress={ () => navigation.navigate('NuevoCliente', {guardarConsultarAPI}) }>
                Nuevo Cliente
            </Button>

            <Headline style={ globalStyles.titulo }> { clientes.length > 0 ? 'Clientes' : 'Aún no hay clientes' }</Headline>

            <FlatList 
                data={clientes}
                keyExtractor={ cliente => (cliente.id).toString() }
                renderItem={ ({ item }) => (
                    <List.Item 
                        title={item.nombre}
                        description={ item.empresa }

                        //*-- cuando el usuario toque un nombre, lo dirije a otro componente, le paso el listado del cliente --*//
                        onPress={ () => navigation.navigate('DetallesCliente', { item, guardarConsultarAPI }) }
                    />
                )}
            />

            <FAB 
                icon='plus'
                style={ globalStyles.fab }
                onPress={ () => navigation.navigate('NuevoCliente', {guardarConsultarAPI}) } /** le paso la funcion al componente  */
            />

        </View>
    )
}



export default Inicio;