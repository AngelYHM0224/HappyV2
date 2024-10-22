import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { profileEditStyles } from '../styles/ProfileEditStyles';
import { getAuth } from 'firebase/auth';
import { doc, getFirestore, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { app } from '../api/firebaseAuth'; // Asegúrate de que la configuración esté correcta

const ProfileEditScreen = () => {
    const auth = getAuth(app);
    const db = getFirestore(app);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Cargar datos del usuario cuando se monta el componente
    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userRef);
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setName(userData.name || '');
                    setEmail(userData.email || user.email);
                    setPhone(userData.phone || '');
                }
            }
        };

        fetchUserData();
    }, []);

    // Guardar los cambios en Firestore
    const handleSave = async () => {
        const user = auth.currentUser;
        if (user) {
            try {
                const userRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userRef);

                // Verifica si el documento existe
                if (userDoc.exists()) {
                    // Si existe, actualiza los datos
                    await updateDoc(userRef, {
                        name,
                        phone,
                    });
                    Alert.alert('Éxito', 'Datos actualizados correctamente.');
                } else {
                    // Si no existe, créalo con los datos proporcionados
                    await setDoc(userRef, {
                        name,
                        email: user.email,  // Incluye también el email, que no debe cambiar
                        phone,
                    });
                    Alert.alert('Éxito', 'Documento creado y datos actualizados correctamente.');
                }
            } catch (error) {
                Alert.alert('Error', 'Hubo un problema al actualizar los datos.');
                console.error('Error al actualizar los datos:', error);
            }
        } else {
            Alert.alert('Error', 'Usuario no autenticado.');
        }
    };

    return (
        <ScrollView style={profileEditStyles.container}>
            <View style={profileEditStyles.headerBar}>
                <Text style={profileEditStyles.headerText}>HappyGPT</Text>
            </View>
            <Text style={profileEditStyles.title}>Datos Personal</Text>

            <View style={profileEditStyles.inputContainer}>
                <Text style={profileEditStyles.label}>Nombre completo</Text>
                <TextInput
                    style={profileEditStyles.input}
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={profileEditStyles.inputContainer}>
                <Text style={profileEditStyles.label}>Correo Electrónico</Text>
                <TextInput
                    style={profileEditStyles.input}
                    value={email}
                    editable={false} // No editable, ya que normalmente el email no cambia
                />
            </View>

            <View style={profileEditStyles.inputContainer}>
                <Text style={profileEditStyles.label}>Número de Teléfono</Text>
                <TextInput
                    style={profileEditStyles.input}
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
            </View>

            <TouchableOpacity style={profileEditStyles.saveButton} onPress={handleSave}>
                <Text style={profileEditStyles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ProfileEditScreen;
