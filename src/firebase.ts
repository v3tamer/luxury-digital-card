// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBpwhiSDunFI2WTcNO83uXwVsGuE7O5E94",
  authDomain: "luxury-digital-card.firebaseapp.com",
  projectId: "luxury-digital-card",
  storageBucket: "luxury-digital-card.firebasestorage.app",
  messagingSenderId: "1061283913420",
  appId: "1:1061283913420:web:a471916795a10897f56c69"
};

// ✅ تهيئة Firebase
const app = initializeApp(firebaseConfig);

// ✅ تهيئة الخدمات
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
