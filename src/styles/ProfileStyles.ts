import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
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
    profileContainer: {
        marginTop: 100,
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    editProfileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
    },
    icon: {
        marginRight: 10,
    },
    editProfileText: {
        fontSize: 18,
        color: '#FFB700',
    },
    logoutButton: {
        marginTop: 20,
        backgroundColor: '#FFB700',
        padding: 10,
        borderRadius: 10,
        width: width * 0.5,
        alignItems: 'center',
    },
    logoutText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
