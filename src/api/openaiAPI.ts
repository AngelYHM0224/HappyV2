import axios from 'axios';

// Clave API de OpenAI
const API_KEY = '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'; // Asegúrate de que esta clave sea la correcta y esté activa

// Configura Axios para hacer solicitudes a la API 
const openaiAPI = axios.create({
  baseURL: 'https://api.openai.com/v1',  
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,  
  },
});

// Función para obtener la respuesta del chatbot usando OpenAI
export const getChatbotResponse = async (userInput: string) => {
  try {
    const response = await openaiAPI.post('/chat/completions', {
      model: 'gpt-3.5-turbo',  
      messages: [{ role: 'user', content: userInput }],
      max_tokens: 150,    
      temperature: 0.7,
    });

    return response.data.choices[0].message.content.trim();  
  } catch (error) {
    console.error('Error al obtener la respuesta de OpenAI:', error);
    return 'Lo siento, hubo un error al procesar tu solicitud.';
  }
};
