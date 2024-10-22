import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { profileStyles } from '../styles/ProfileStyles';
import { getAuth, signOut } from 'firebase/auth'; // Asegúrate de importar 'signOut'
import { doc, getFirestore, getDoc } from 'firebase/firestore'; // Importa Firestore
import { app } from '../api/firebaseAuth'; // Asegúrate de que la configuración esté correcta

const ProfileScreen = () => {
    const navigation = useNavigation();
    const auth = getAuth(app); // Obtén la instancia de autenticación
    const db = getFirestore(app); // Obtén la instancia de Firestore

    const [userName, setUserName] = useState(''); // Estado para almacenar el nombre del usuario

    useEffect(() => {
        const fetchUserName = async () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userRef);
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUserName(userData.name || user.displayName || 'Usuario');
                }
            }
        };

        fetchUserName();
    }, [auth, db]); // Se ejecutará nuevamente si cambian auth o db

    const handleEditProfile = () => {
        navigation.navigate('ProfileEdit');
    };

    const handleLogout = async () => {
        try {
            await signOut(auth); // Cerrar sesión del usuario
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
            console.log('Sesión cerrada');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.headerBar}>
                <Text style={profileStyles.headerText}>HappyGPT</Text>
            </View>

            <View style={profileStyles.profileContainer}>
                <Image
                    source={require('../../assets/image/avatar1.png')}
                    style={profileStyles.profileImage}
                />
                {/* Mostrar el nombre dinámico del usuario */}
                <Text style={profileStyles.userName}>{userName}</Text>
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
