import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
      apiKey: "AIzaSyCw9Q9hm-Mey6GY7ylALEzOfLPyl7h4j_o",
      authDomain: "collateral-management-f7209.firebaseapp.com",
      projectId: "collateral-management-f7209",
      storageBucket: "collateral-management-f7209.appspot.com",
      messagingSenderId: "796900781229",
      appId: "1:796900781229:web:47160c3c19648e15612a24"
    };
  export const app = initializeApp(firebaseConfig);
  export const database=getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />    
);


