import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../navigation/AppNavigator'; // Importa RootParamList
import { FontAwesome } from '@expo/vector-icons';
import { LoginStyles } from '../styles/LoginStyles'; // Asegúrate de tener los estilos importados
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth para iniciar sesión
import { auth } from '../api/firebaseAuth'; // Importa la configuración de Firebase

// Define el tipo de navegación
type LoginScreenNavigationProp = StackNavigationProp<RootParamList, 'Login'>;

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<LoginScreenNavigationProp>(); // Tipar correctamente useNavigation

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Usuario logueado:', user);
                Alert.alert('Inicio de sesión exitoso', '¡Bienvenido de nuevo!');
                navigation.navigate('HomeNavigator');
            })
            .catch((error) => {
                const errorMessage = error.message;
                Alert.alert('Error al iniciar sesión', errorMessage);
            });
    };

    return (
        <View style={LoginStyles.container}>
            {/* Logo por encima del icono y texto */}
            <View style={LoginStyles.logoContainer}>
                <Image
                    source={require('../../assets/image/logosinfondo.png')} // Ruta de la imagen
                    style={LoginStyles.logoImage} // Asegúrate de definir el estilo en LoginStyles
                />
                <FontAwesome name="user-circle" size={100} color="#FFF" />
                <Text style={LoginStyles.logoText}>Happy GPT</Text>
            </View>

            <View style={LoginStyles.inputContainer}>
                <FontAwesome name="envelope" size={24} color="white" />
                <TextInput
                    style={LoginStyles.input}
                    placeholder="Correo electrónico"
                    placeholderTextColor="#FFF"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={LoginStyles.inputContainer}>
                <FontAwesome name="lock" size={24} color="white" />
                <TextInput
                    style={LoginStyles.input}
                    placeholder="Password"
                    placeholderTextColor="#FFF"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            {/* Asegúrate de que este botón navegue correctamente a ForgotPassword */}
            <TouchableOpacity style={LoginStyles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={LoginStyles.forgotText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={LoginStyles.button} onPress={handleLogin}>
                <Text style={LoginStyles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={LoginStyles.registerText}>¿No tienes cuenta? Regístrate</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
