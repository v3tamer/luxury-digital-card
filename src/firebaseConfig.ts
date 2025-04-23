// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpwhiSDunFI2WTcNO83uXwVsGuE7O5E94",
  authDomain: "luxury-digital-card.firebaseapp.com",
  projectId: "luxury-digital-card",
  storageBucket: "luxury-digital-card.firebasestorage.app",
  messagingSenderId: "1061283913420",
  appId: "1:1061283913420:web:a471916795a10897f56c69",
  measurementId: "G-B8NCDE9P41" // (إن وُجد)
};

const app = initializeApp(firebaseConfig);

export default app;
