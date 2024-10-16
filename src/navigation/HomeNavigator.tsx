import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import InfoScreen from '../screens/InfoScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Crear el Tab Navigator
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = 'home';
            } else if (route.name === 'Chatbot') {
                iconName = 'android'; 
            } else if (route.name === 'Info') {
                iconName = 'info-circle';
            } else if (route.name === 'Profile') {
                iconName = 'user';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
            backgroundColor: '#FBC63C',
            borderTopWidth: 0,
            elevation: 5,
            },
        })}
        >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Chatbot" component={ChatbotScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Info" component={InfoScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default HomeNavigator;
