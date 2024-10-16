import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { infoStyles } from '../styles/InfoStyles';

const InfoScreen = () => {
    return (
        <View style={infoStyles.container}>
            {/* Barra de encabezado */}
            <View style={infoStyles.headerBar}>
                <Text style={infoStyles.headerText}>HappyGPT</Text>
            </View>

            <ScrollView contentContainerStyle={infoStyles.contentContainer}>
                {/* Título con imagen */}
                <View style={infoStyles.titleContainer}>
                    <Text style={infoStyles.titleText}>¿Que es Happy GPT?</Text>
                    <Image 
                        source={require('../../assets/image/robotinfo.png')} // Imagen del robot
                        style={infoStyles.titleImage}
                    />
                </View>

                {/* Descripción con imágenes */}
                <View style={infoStyles.descriptionContainer}>
                    <Text style={infoStyles.descriptionText}>
                        En Happy GPT, podrás hablar con Chatti, un amiguito especial que siempre está aquí para ayudarte a aprender cosas nuevas, responder tus preguntas.
                    </Text>
                    <Image 
                        source={require('../../assets/image/robot.png')} // Imagen del robot secundario
                        style={infoStyles.descriptionImage}
                    />
                </View>

                <View style={infoStyles.descriptionContainer}>
                    <Text style={infoStyles.descriptionText}>
                        Es como tener un compañero de aventuras que te enseña mientras te diviertes. ¿Tienes una pregunta curiosa o quieres aprender algo genial? ¡Chatti te ayudará!
                    </Text>
                    <Image 
                        source={require('../../assets/image/niño.png')} // Imagen del niño
                        style={infoStyles.descriptionImage}
                    />
                </View>

                <View style={infoStyles.descriptionContainer}>
                    <Text style={infoStyles.descriptionText}>
                        Recuerda, en HappyGPT siempre estamos para ti, haciendo que aprender sea súper divertido. ¡Vamos a descubrir juntos!
                    </Text>
                    <Image 
                        source={require('../../assets/image/logosinfondo.png')} // Imagen del logo de la app
                        style={infoStyles.descriptionImage}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default InfoScreen;
