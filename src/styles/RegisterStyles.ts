import { StyleSheet } from 'react-native';

export const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoImage: {
        width: 120,  // Tamaño del logo
        height: 120, // Tamaño del logo
        marginBottom: 10,
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FBC63C',
        marginTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FBC63C',
        borderRadius: 30,
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: '#FFF',  // Cambiar el color del texto del input a blanco
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#FBC63C',
        borderRadius: 30,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
