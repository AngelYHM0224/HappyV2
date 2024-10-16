import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { chatbotStyles } from '../styles/chatbotStyles';
import { getChatbotResponse } from '../api/openaiAPI';

// Define la interfaz del mensaje
interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

const ChatbotScreen = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleSend = async () => {
        if (inputText.trim()) {
            // Oculta el teclado
            Keyboard.dismiss();

            // Agregar el mensaje del usuario
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: prevMessages.length + 1, text: inputText, sender: 'user' },
            ]);

            // Desplazar la vista hacia el final
            scrollViewRef.current?.scrollToEnd({ animated: true });

            setInputText('');

            setLoading(true);
            try {
                const botResponse = await getChatbotResponse(inputText);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { id: prevMessages.length + 1, text: botResponse, sender: 'bot' },
                ]);

                // Desplazar la vista hacia el final después de recibir la respuesta del bot
                scrollViewRef.current?.scrollToEnd({ animated: true });
            } catch (error) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { id: prevMessages.length + 1, text: 'Error al procesar tu mensaje. Intenta nuevamente.', sender: 'bot' },
                ]);

                // Desplazar la vista hacia el final en caso de error
                scrollViewRef.current?.scrollToEnd({ animated: true });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <View style={chatbotStyles.container}>
            {/* Barra de encabezado */}
            <View style={chatbotStyles.headerBar}>
                <Text style={chatbotStyles.headerText}>HappyGPT</Text>
            </View>

            {/* Logo y Texto */}
            <View style={chatbotStyles.logoContainer}>
                <Image
                    source={require('../../assets/image/logosinfondo.png')}
                    style={chatbotStyles.logoImage}
                />
            </View>

            {/* Conversación */}
            <ScrollView
                style={chatbotStyles.chatContainer}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
                {messages.map((message) => (
                    <View
                        key={message.id}
                        style={[
                            chatbotStyles.message,
                            message.sender === 'user' ? chatbotStyles.userMessage : chatbotStyles.botMessage,
                        ]}
                    >
                        <Text style={chatbotStyles.messageText}>{message.text}</Text>
                    </View>
                ))}
                {loading && <Text style={chatbotStyles.loadingText}>Cargando...</Text>}
            </ScrollView>

            {/* Campo de entrada */}
            <View style={chatbotStyles.inputContainer}>
                <TextInput
                    style={chatbotStyles.input}
                    placeholder="Escribe un mensaje..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity onPress={handleSend} style={chatbotStyles.sendButton}>
                    <FontAwesome name="send" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatbotScreen;
