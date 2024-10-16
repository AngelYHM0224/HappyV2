import { StyleSheet, Dimensions } from 'react-native';

// Obtén las dimensiones de la pantalla
const { width } = Dimensions.get('window');

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerBar: {
        backgroundColor: '#FBC63C', // Fondo amarillo
        width: width, // Ancho completo de la pantalla
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', // Hace que se ajuste a la parte superior
        top: 0, // Asegura que esté en la parte superior de la pantalla
        zIndex: 1, // Asegura que esté por encima del contenido
    },
    headerText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#C3922F',
        marginTop: 80, // Añadir margen superior para que el título no se solape con el header
        textAlign: 'center', // Centrar el texto
    },
    illustration: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    welcomeContainer: {
        backgroundColor: '#F0E8D8',
        padding: 15, // Ajuste de padding para mayor espacio interno
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    welcomeText: {
        flex: 1,
        fontSize: 16,
        color: '#7A5C1E',
        marginRight: 10,
    },
    chatbotImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
});
