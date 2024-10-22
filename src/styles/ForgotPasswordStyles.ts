import { StyleSheet } from 'react-native';

export const forgotPasswordStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#F0E8D8',
        fontSize: 16,
        marginBottom: 20,
    },
    resetButton: {
        backgroundColor: '#FBC63C',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    resetButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
