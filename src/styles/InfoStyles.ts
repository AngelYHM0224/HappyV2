import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const infoStyles = StyleSheet.create({
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
    contentContainer: {
        paddingTop: 70, 
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    titleContainer: {
        backgroundColor: '#FBC63C',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    titleText: {
        flex: 1,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
    },
    titleImage: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    descriptionContainer: {
        flexDirection: 'row',
        backgroundColor: '#F0E8D8',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center',
    },
    descriptionText: {
        flex: 1,
        fontSize: 16,
        color: '#7A5C1E',
        marginRight: 10,
    },
    descriptionImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
});
