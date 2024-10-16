import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const chatbotStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    headerBar: {
        backgroundColor: '#FBC63C',
        width: width,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    headerText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 80, // Ajuste para que el logo esté debajo del header
    },
    logoImage: {
        width: 120,
        height: 120,
        marginBottom: 5,
    },
    chatContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 10,
        marginTop: 20, // Espacio adicional para que el contenido no se superponga
    },
    message: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    userMessage: {
        backgroundColor: '#FFB700',
        alignSelf: 'flex-end',
    },
    botMessage: {
        backgroundColor: '#F0E8D8',
        alignSelf: 'flex-start',
    },
    messageText: {
        color: '#000',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0E8D8',
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        margin: 10,
        width: width * 0.9,
        alignSelf: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        color: '#000',
    },
    sendButton: {
        backgroundColor: '#FFB700',
        borderRadius: 50,
        padding: 10,
    },
    loadingText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
    },
});
