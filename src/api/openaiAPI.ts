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
      return true;  // Contenido inapropiado detectado
    }

    return false;  // Contenido apropiado
  } catch (error) {
    console.error('Error al verificar contenido con la API de moderación:', error);
    return true;  // Si hay un error, por precaución, asume que el contenido es inapropiado
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
