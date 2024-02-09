"use client"
import { useState, useEffect } from "react";
import React from "react";

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

export default function Home() {

  const [comando, setComando] = useState("");

  const db = getFirestore(firebaseApp);

  //referencia para a coleção comando colecao comando, documento crg58kSUnAonCiHu4P6g, campo comando
  const docRef = doc(db, "comando", "crg58kSUnAonCiHu4P6g");


  ///////////////////////////////////////
  //funcao assincrona para buscar o comando no banco de dados
  const getComando = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data().comando;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }
  ///////////////////////////////////////

    getComando().then((comando) => {
      console.log(comando);
    });


    
    //useEffect para buscar o comando no banco de dados quando a página carregar

    useEffect(() => {
      getComando().then((comando) => {
        setComando(comando);
      });
    }
    , []);

  
  //setar o comando no banco de dados como ligar

  const SetComandoLigar = async () => {
    await setDoc(docRef, {comando: "ligar"});
    setComando("ligar");
  }

  const setComandoDesligar = async () => {
    await setDoc(docRef, {comando: "desligar"});
    setComando("desligar"); 
  }


  return (
    <div>
      <h1>API Arduino</h1>
      <p>API para controle de dispositivos eletrônicos</p>

      <button onClick={SetComandoLigar}>Ligar</button>

      <button onClick={setComandoDesligar}>Desligar</button>

      {comando && <p>Comando: {comando}</p>}
      
    </div>
  );
}
