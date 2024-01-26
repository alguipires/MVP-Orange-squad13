// import { initializeApp } from 'firebase/app';
// import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import './App.css';
import AppRoutes from './routes/routes';

// const provider = new GoogleAuthProvider();

// const firebaseConfig = {
//   apiKey: "AIzaSyC88p1Smr1TY3hti-5PxcPX_MWHBxH7s14",
//   authDomain: "login-fcamara.firebaseapp.com",
//   projectId: "login-fcamara",
//   storageBucket: "login-fcamara.appspot.com",
//   messagingSenderId: "337859391197",
//   appId: "1:337859391197:web:7fab81d30a01dae8d57534",
//   measurementId: "G-LCB8WMQJZH"
// };

function App() {
  return (
      <AppRoutes />
  );
}

export default App;
