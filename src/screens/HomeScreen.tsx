import React from 'react';
import { View, Text, Image } from 'react-native';
import { homeStyles } from '../styles/HomeStyles'; // Importar los estilos

const HomeScreen = () => {
    return (
        <View style={homeStyles.container}>
            {/* Encabezado con barra */}
            <View style={homeStyles.header}>
                <View style={homeStyles.headerBar}>
                    <Text style={homeStyles.headerText}>HappyGPT</Text>
                </View>
                <Text style={homeStyles.title}>Bienvenido a Happy GPT</Text>
                <Image
                    source={require('../../assets/image/Nitec.png')}  // Imagen del niño en la computadora
                    style={homeStyles.illustration}
                />
            </View>

            {/* Sección de bienvenida con padding de 20 */}
            <View style={homeStyles.welcomeContainer}>
                <Text style={homeStyles.welcomeText}>
                    ¡Hola! Soy Chatti, tu nuevo amigo virtual! 🎉{'\n'}
                    ¡Bienvenido a HappyGPT, donde la diversión y el aprendizaje se unen! 😄{'\n'}
                    Estoy aquí para ayudarte a descubrir cosas nuevas, responder tus preguntas, y pasar un buen rato juntos.
                </Text>
                <Image
                    source={require('../../assets/image/feliz.png')}  // Imagen del chatbot
                    style={homeStyles.chatbotImage}
                />
            </View>
        </View>
    );
};

export default HomeScreen;
