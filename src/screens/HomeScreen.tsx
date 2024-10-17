import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { homeStyles } from '../styles/HomeStyles'; // Archivo de estilos aparte

const HomeScreen = () => {
    return (
        <View style={homeStyles.container}>
        {/* Barra de encabezado */}
        <View style={homeStyles.headerBar}>
            <Text style={homeStyles.headerText}>HappyGPT</Text>
        </View>

        {/* Contenido de la pantalla */}
        <ScrollView style={homeStyles.content}>

            {/* Sección de bienvenida con imagen de fondo */}
            <ImageBackground
            source={require('../../assets/image/fondo1.jpg')}  // Reemplaza con tu imagen de fondo
            style={homeStyles.backgroundImage}
            >
            <View style={homeStyles.sectionWelcome}>
                <Text style={homeStyles.title}>Bienvenido a</Text>
                <Text style={homeStyles.subtitle}>Happy GPT</Text>
            </View>
            </ImageBackground>

            {/* Sección de Datos Curiosos */}
            <View style={homeStyles.articlesContainer}>
            {/* Título de la sección */}
            <Text style={homeStyles.sectionTitle}>Datos Curiosos</Text>

            <View style={homeStyles.article}>
                <Image
                source={require('../../assets/image/emoji.png')}
                style={homeStyles.articleImage}
                />
                <View style={homeStyles.articleContent}>
                <Text style={homeStyles.articleTitle}>El emoji de la carita sonriente es más viejo de lo que crees:</Text>
                <Text style={homeStyles.articleDescription}>
                    El primer "emoji" fue creado en 1999 por Shigetaka Kurita en Japón. ¡Hoy hay más de 3,000 emojis diferentes!
                </Text>
                </View>
            </View>

            <View style={homeStyles.article}>
                <Image
                source={require('../../assets/image/abeja.png')}
                style={homeStyles.articleImage}
                />
                <View style={homeStyles.articleContent}>
                <Text style={homeStyles.articleTitle}>
                    Las abejas se comunican bailando: 
                </Text>
                <Text style={homeStyles.articleDescription}>
                    Las abejas obreras realizan una especie de "baile" para mostrarle a las demás abejas dónde encontrar flores con néctar.
                </Text>
                </View>
            </View>

            <View style={homeStyles.article}>
                <Image
                source={require('../../assets/image/minecraft.jpg')}
                style={homeStyles.articleImage}
                />
                <View style={homeStyles.articleContent}>
                <Text style={homeStyles.articleTitle}>
                    El videojuego más vendido de todos los tiempos es Minecraft: 
                </Text>
                <Text style={homeStyles.articleDescription}>
                    Hasta hoy, Minecraft ha vendido más de 238 millones de copias en todo el mundo. ¡Es un juego en el que puedes construir lo que imagines con bloques!
                </Text>
                </View>
            </View>

            <View style={homeStyles.article}>
                <Image
                source={require('../../assets/image/colibri2.png')}
                style={homeStyles.articleImage}
                />
                <View style={homeStyles.articleContent}>
                <Text style={homeStyles.articleTitle}>
                    El colibrí puede volar hacia atrás:
                </Text>
                <Text style={homeStyles.articleDescription}>
                    Los colibríes son los únicos pájaros que pueden volar en todas las direcciones, incluso hacia atrás.
                </Text>
                </View>
            </View>

            <View style={homeStyles.article}>
                <Image
                source={require('../../assets/image/robot4.png')}
                style={homeStyles.articleImage}
                />
                <View style={homeStyles.articleContent}>
                <Text style={homeStyles.articleTitle}>
                    El primer robot fue construido en 1954: 
                </Text>
                <Text style={homeStyles.articleDescription}>
                    Se llamaba "Unimate" y fue el primer robot industrial, diseñado para trabajar en fábricas ayudando a construir coches.
                </Text>
                </View>
            </View>
            </View>
        </ScrollView>
        </View>
    );
};

export default HomeScreen;
