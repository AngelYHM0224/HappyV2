import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { forgotPasswordStyles } from '../styles/ForgotPasswordStyles';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../api/firebaseAuth'; // Asegúrate de que la configuración esté correcta

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const auth = getAuth(app);

    const handlePasswordReset = async () => {
        if (!email) {
            Alert.alert('Error', 'Por favor ingresa tu correo electrónico');
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert('Éxito', 'Se ha enviado un correo para restablecer tu contraseña');
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al enviar el correo de recuperación');
            console.error('Error al enviar el correo de recuperación:', error);
        }
    };

    return (
        <View style={forgotPasswordStyles.container}>
            <Text style={forgotPasswordStyles.title}>Recuperar Contraseña</Text>

            <TextInput
                style={forgotPasswordStyles.input}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TouchableOpacity style={forgotPasswordStyles.resetButton} onPress={handlePasswordReset}>
                <Text style={forgotPasswordStyles.resetButtonText}>Enviar correo de recuperación</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPasswordScreen;
