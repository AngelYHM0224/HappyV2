import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerBar: {
        backgroundColor: '#FBC63C',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    content: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionWelcome: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 87,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    subtitle: {
        fontSize: 16,
        color: '#FFF',
    },
    articlesContainer: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24, // Tamaño más grande para el título de la sección
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20, // Espacio inferior para separar el título de los artículos
    },
    article: {
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#F0E8D8',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },
    articleImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
        margin: 10, // Agrega un espacio alrededor de la imagen
    },
    articleContent: {
        flex: 1,
        padding: 10,
    },
    articleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    articleDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
});