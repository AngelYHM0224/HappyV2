import axios from 'axios';

// Clave API de OpenAI
const API_KEY = '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'; 

// Configura Axios para hacer solicitudes a la API de OpenAI
const openaiAPI = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

// Función para moderar el contenido utilizando la API de OpenAI Moderation
const moderateContent = async (content: string) => {
  try {
    const response = await openaiAPI.post('/moderations', {
      input: content,
    });

    const results = response.data.results[0];

    // Si cualquier categoría problemática es detectada, devuelve true
    if (
      results.categories['sexual'] ||
      results.categories['violence'] ||
      results.categories['hate'] ||
      results.categories['self-harm'] ||
      results.categories['sexual/minors']
    ) {
      return true;  
    }

    return false;  
  } catch (error) {
    console.error('Error al verificar contenido con la API de moderación:', error);
    return true;  
  }
};

// Función para obtener la respuesta del chatbot usando OpenAI
export const getChatbotResponse = async (userInput: string) => {
  try {
    // Llama a OpenAI para generar una respuesta
    const response = await openaiAPI.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userInput }],
      max_tokens: 150,
      temperature: 0.7,
    });

    const generatedContent = response.data.choices[0].message.content.trim();

    // Verifica si el contenido generado es inapropiado
    const isInappropriate = await moderateContent(generatedContent);

    if (isInappropriate) {
      return 'Lo siento, pero no puedo generar contenido apropiado en este momento. Por favor intenta nuevamente.';
    }

    return generatedContent;
  } catch (error) {
    console.error('Error al obtener la respuesta de OpenAI:', error);
    return 'Lo siento, hubo un error al procesar tu solicitud.';
  }
};
