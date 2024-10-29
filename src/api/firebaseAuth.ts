import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyBjERcMUyfJbdMUimXoE_wS20hI9FXHNB4",
    authDomain: "happygpt-eb94f.firebaseapp.com",
    projectId: "happygpt-eb94f",
    storageBucket: "happygpt-eb94f.appspot.com",
    messagingSenderId: "760116835237",
    appId: "1:760116835237:web:b9a9c8548a345bb2b62e4c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

// Guardar el usuario autenticado en AsyncStorage
onAuthStateChanged(auth, async (user) => {
    if (user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    } else {
        await AsyncStorage.removeItem('user');
    }
});

export { app, auth, db }; 
