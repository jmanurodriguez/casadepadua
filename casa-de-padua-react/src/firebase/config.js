import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJntQoH0QGHhnhheAVfvhiVKZ_CDMnSNU",
  authDomain: "casa-de-padua-d3552.firebaseapp.com",
  projectId: "casa-de-padua-d3552",
  storageBucket: "casa-de-padua-d3552.firebasestorage.app",
  messagingSenderId: "950961073952",
  appId: "1:950961073952:web:71129ea74499345cf2f145",
  measurementId: "G-2K9E3ZGBFV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);