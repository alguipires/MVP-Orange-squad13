import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: window.env.REACT_APP_FIREBASE_API_KEY || 'env not-found',
  authDomain: window.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'env not-found',
  projectId: window.env.REACT_APP_FIREBASE_PROEJCT_ID || 'env not-found',
  storageBucket:
    window.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'env not-found',
  messagingSenderId:
    window.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || 'env not-found',
  appId: window.env.REACT_APP_FIREBASE_APP_ID || 'env not-found',
  measurementId:
    window.env.REACT_APP_FIREBASE_MEASUREMENT_ID || 'env not-found',
};

export const app = initializeApp(firebaseConfig);
