import 'react-native-gesture-handler';// esto es lo primero que tiene que ir cuando use Stack nativagator
import React from 'react';
import {StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider  } from 'react-native-paper';


import Inicio from './views/Inicio';
import DetallesCliente from './views/DetallesCliente';
import NuevoCliente from './views/NuevoCliente';

const Stack = createStackNavigator();

//--- Definir el tema del diseño ---//
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary: '#1774F2',//aqui puedo modificar el color de las variables
    accent: '#0655BF'
  }
}

//console.log(theme.colors)

const App = () => {

  return(
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Inicio'
            screenOptions={{
              headerStyle:{
                backgroundColor: theme.colors.primary
              },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerTitleAlign: 'center'
            }}
          >
              <Stack.Screen
                name='Inicio'
                component={Inicio}
                options={ ({ navigation, route }) => ({

                  /*headerLeft: (props) => <BarraSuperior {...props} 
                                      navigation={navigation}
                                      route={route}
                                    />*/
                }) }
                            
              />

              <Stack.Screen 
                name='NuevoCliente'
                component={NuevoCliente}
                options={{
                  title: 'Nuevo Cliente'
                }}

              />

              <Stack.Screen
                name='DetallesCliente'
                component={DetallesCliente}
                options={{
                  title: 'Detalles Clientes'
                }}
              
              />
              
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>

  )
  
};

const styles = StyleSheet.create({
  
});

export default App;
