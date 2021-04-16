import { StyleSheet } from 'react-native'



/**
 * Creo mi hoja de estilo de manera Global
 */
const globalStyles = StyleSheet.create({

    contedor:{
        flex:1,
        marginTop: 20,
        marginHorizontal: '2.5%'
    },
    titulo:{
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 30
    },
    fab:{
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 20
    }

})

export default globalStyles;