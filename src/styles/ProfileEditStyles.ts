import { StyleSheet } from 'react-native';

export const profileEditStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 16,
    },
    headerBar: {
        backgroundColor: '#FBC63C',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 16,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
        color: '#7A5C1E',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#F0E8D8',
    },
    saveButton: {
        backgroundColor: '#FBC63C',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
