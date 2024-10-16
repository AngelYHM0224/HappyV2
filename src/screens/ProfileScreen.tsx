import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { profileStyles } from '../styles/ProfileStyles';
import { getAuth, signOut } from 'firebase/auth'; // Importa Firebase

const ProfileScreen = () => {
    const navigation = useNavigation();
    const auth = getAuth(); // Obtén la instancia de autenticación

    const handleEditProfile = () => {
        navigation.navigate('ProfileEdit');
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Navegar a la pantalla de inicio de sesión
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
                console.log('Sesión cerrada');
            })
            .catch((error) => {
                console.error('Error al cerrar sesión:', error);
            });
    };

    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.headerBar}>
                <Text style={profileStyles.headerText}>HappyGPT</Text>
            </View>

            <View style={profileStyles.profileContainer}>
                <Image
                    source={require('../../assets/image/feliz.png')}
                    style={profileStyles.profileImage}
                />
                <Text style={profileStyles.userName}>Angel Yael Hernandez Medina</Text>
            </View>

            <TouchableOpacity style={profileStyles.editProfileButton} onPress={handleEditProfile}>
                <FontAwesome name="edit" size={24} color="#FFB700" style={profileStyles.icon} />
                <Text style={profileStyles.editProfileText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={profileStyles.logoutButton} onPress={handleLogout}>
                <Text style={profileStyles.logoutText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;
