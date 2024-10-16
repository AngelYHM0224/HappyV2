import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 20,
    },
    logoImage: {
        width: 120, // Tamaño del logo
        height: 120, // Tamaño del logo
        marginBottom: 0, // Eliminamos el margen inferior
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10, // Margen entre el logo/texto y el siguiente contenido (inputs, etc.)
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FBC63C',
        marginTop: -70, // Reducimos el margen superior para acercar el texto al logo (puedes ajustarlo según el diseño)
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
        color: '#FFF',
        marginLeft: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    forgotText: {
        color: '#A17D1C',
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
    registerText: {
        marginTop: 20,
        color: '#A17D1C',
    },
});
