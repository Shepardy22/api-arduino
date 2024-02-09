"use client"
import { useState } from "react";
import React from "react";

import { initializeApp } from "firebase/app";
//import getfirestore from "firebase/firestore";
import { getFirestore, collection, getDocs, setDoc } from "firebase/firestore/lite";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyAEP7Eqm6Vo68KB3tP36W89YcAMdrTk9_E",
  authDomain: "apiarduino-137c4.firebaseapp.com",
  projectId: "apiarduino-137c4",
  storageBucket: "apiarduino-137c4.appspot.com",
  messagingSenderId: "403188004897",
  appId: "1:403188004897:web:a45368973396d556d04b60"
});

export default function Home() {

  const [comando, setComando] = useState("");

  const db = getFirestore(firebaseApp);

  //referencia para a coleção comando colecao comando, documento crg58kSUnAonCiHu4P6g, campo comando
  const docRef = doc(db, "comando", "crg58kSUnAonCiHu4P6g");


  //setar o comando no banco de dados como ligar

  const setComandoLigar = async () => {
    await setDoc(docRef, {comando: "ligar"});
    
  }

  const setComandoDesligar = async () => {
    await setDoc(docRef, {comando: "desligar"});
    
  }


  return (
    <div>
      <h1>API Arduino</h1>
      <p>API para controle de dispositivos eletrônicos</p>

      <button onClick={setComandoLigar}>Ligar</button>

      <button onClick={setComandoDesligar}>Desligar</button>
      
    </div>
  );
}
