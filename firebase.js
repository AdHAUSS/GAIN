// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB8cAupg-6_S7TxoiIyprZTBa5jAV6Uc0M",
    authDomain: "estrat-sorte.firebaseapp.com",
    projectId: "estrat-sorte",
    storageBucket: "estrat-sorte.firebasestorage.app",
    messagingSenderId: "66246076527",
    appId: "1:66246076527:web:741e38b3e03d5e0126459a",
    measurementId: "G-YE6036S9ZP"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
