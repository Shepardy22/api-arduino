import { NextResponse } from "next/server";

import { initializeApp } from "firebase/app";

import {  getFirestore, doc, setDoc, getDoc } from "firebase/firestore";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyAEP7Eqm6Vo68KB3tP36W89YcAMdrTk9_E",
  authDomain: "apiarduino-137c4.firebaseapp.com",
  projectId: "apiarduino-137c4",
  storageBucket: "apiarduino-137c4.appspot.com",
  messagingSenderId: "403188004897",
  appId: "1:403188004897:web:a45368973396d556d04b60"
});

// Obtenha uma referência para o banco de dados Firestore
const db = getFirestore(firebaseApp);
// Referência para o documento específico
const docRef = doc(db, "comando", "crg58kSUnAonCiHu4P6g");


// Função assíncrona para buscar o comando no banco de dados
const getComando = async () => {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data().comando;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
      return null;
    }
  };




  

export async function GET(request) {
    const comando = await getComando();
    
    return NextResponse.json({ comando: comando });
    };




