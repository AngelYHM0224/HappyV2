import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyBjERcMUyfJbdMUimXoE_wS20hI9FXHNB4",
    authDomain: "happygpt-eb94f.firebaseapp.com",
    projectId: "happygpt-eb94f",
    storageBucket: "happygpt-eb94f.firebasestorage.app",
    messagingSenderId: "760116835237",
    appId: "1:760116835237:web:b9a9c8548a345bb2b62e4c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Auth con persistencia
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence) // Esto asegura que la persistencia sea en el navegador/local (no en memoria)
    .catch((error) => {
        console.log(error.message);
    });

const db = getFirestore(app);

// Monitorear el estado de autenticación
onAuthStateChanged(auth, async (user) => {
    if (user) {
        await AsyncStorage.setItem('user', JSON.stringify(user)); // Guardar usuario
    } else {
        await AsyncStorage.removeItem('user'); // Eliminar usuario si no está autenticado
    }
});

export { app, auth, db };
