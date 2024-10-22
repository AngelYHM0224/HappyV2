import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

export const profileEditStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    headerBar: {
        backgroundColor: '#FBC63C',
        width: '100%',  
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
        marginTop: 80, 
        marginBottom: 16,
        textAlign: 'center',
        paddingHorizontal: 20,  
    },
    inputContainer: {
        marginBottom: 20,  
        paddingHorizontal: 20, 
    },
    label: {
        fontSize: 16,
        marginBottom: 8,  
        color: '#7A5C1E',
        fontWeight: '600',  
        paddingHorizontal: 20,  
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,  
        backgroundColor: '#F0E8D8',
        fontSize: 16,  
    },
    saveButton: {
        backgroundColor: '#FBC63C',
        paddingVertical: 10,  
        paddingHorizontal: 20,  
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 40,  
        width: width * 0.5,  
        alignSelf: 'center',  
    },
    saveButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
