import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwlLoduM_fGdetdKqStw_z48r12jY7x64",
  authDomain: "galaxy23-bd4bf.firebaseapp.com",
  projectId: "galaxy23-bd4bf",
  storageBucket: "galaxy23-bd4bf.firebasestorage.app",
  messagingSenderId: "457967463890",
  appId: "1:457967463890:web:df9cc8aef8e744926c6c0b",
  measurementId: "G-JP5FXTZCLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app; 