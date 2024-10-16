import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebaseAuth'; // Importa la configuración de Firebase
import { RegisterStyles } from '../styles/RegisterStyles'; 
import { useNavigation } from '@react-navigation/native'; // Importar navegación

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    
    const navigation = useNavigation(); // Inicializar la navegación

    const handleRegister = () => {
        // Firebase: Crear usuario con correo electrónico y contraseña
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuario registrado:', user);
            Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada.');
            
            // Navegar a la pantalla Home después del registro exitoso
            navigation.navigate('HomeNavigator');
        })
        .catch((error) => {
            const errorMessage = error.message;
            Alert.alert('Error', errorMessage);
        });
    };

    return (
        <View style={RegisterStyles.container}>
            <View style={RegisterStyles.logoContainer}>
                <Image
                    source={require('../../assets/image/logosinfondo.png')}  // Ruta del logo
                    style={RegisterStyles.logoImage}  // Estilo del logo
                />
                <Text style={RegisterStyles.logoText}>Happy GPT</Text>
            </View>

            <View style={RegisterStyles.inputContainer}>
                <FontAwesome name="user" size={24} color="white" />
                <TextInput
                    style={RegisterStyles.input}
                    placeholder="Nombre Completo"
                    placeholderTextColor="#FFF"  // Cambiar el color del placeholder a blanco
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={RegisterStyles.inputContainer}>
                <FontAwesome name="envelope" size={24} color="white" />
                <TextInput
                    style={RegisterStyles.input}
                    placeholder="Correo Electrónico"
                    placeholderTextColor="#FFF"  // Cambiar el color del placeholder a blanco
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={RegisterStyles.inputContainer}>
                <FontAwesome name="phone" size={24} color="white" />
                <TextInput
                    style={RegisterStyles.input}
                    placeholder="Número de Teléfono"
                    placeholderTextColor="#FFF"  // Cambiar el color del placeholder a blanco
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
            </View>

            <View style={RegisterStyles.inputContainer}>
                <FontAwesome name="lock" size={24} color="white" />
                <TextInput
                    style={RegisterStyles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="#FFF"  // Cambiar el color del placeholder a blanco
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={RegisterStyles.button} onPress={handleRegister}>
                <Text style={RegisterStyles.buttonText}>Crear</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterScreen;
