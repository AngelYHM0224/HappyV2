import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StandbyScreen from '../screens/StandbyScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeNavigator from './HomeNavigator'; // Importa el Tab Navigator
import ProfileEditScreen from '../screens/ProfileEditScreen'; // Importa la pantalla de edición de perfil

// Define el tipo RootParamList
export type RootParamList = {
    Standby: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    HomeNavigator: undefined; // Ahora apunta a HomeNavigator
    ProfileEdit: undefined; // Añade la ruta para editar perfil
};

// Crea el stack usando RootParamList como tipo genérico
const Stack = createStackNavigator<RootParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Standby">
            <Stack.Screen
                name="Standby"
                component={StandbyScreen}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name="HomeNavigator"
                component={HomeNavigator}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name="ProfileEdit"
                component={ProfileEditScreen}
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
