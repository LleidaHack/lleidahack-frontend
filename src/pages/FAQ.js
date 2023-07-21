// FAQPage.js
import React from 'react';
import FAQContainer from '../components/FAQ_container/FAQ_container.js'
import './FAQ.css'
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'

const faqs = [
  {
    question: 'Què és la HackEPS?',
    answer: "És la setena edició de la hackató organitzada per l'Associació Juvenil LleidaHack. Té com a objectiu motivar la programació com a afició i forjar relacions laborals entre la universitat, els programadors i les empreses del sector.",
  },
  {
    question: 'Quan és la HackEPS?',
    answer: 'El cap de setmana del 25 i 26 de novembre del 2023. 24h de pura programació!',
  },
  {
    question: 'On serà la HackEPS?',
    answer: "A l'Escola Politècnica Superior de la Universitat de Lleida (Carrer Jaume ll 69, 25001, Lleida)",
  },
  {
    question: 'Com hi puc participar?',
    answer: "T'has d'inscriure a la nostra web i, un cop registrat, podràs formar un equip de fins a 4 persones. També podeu participar en solitari, però us animem a treballar amb altres hackers!",
  },
  {
    question: 'I si no tinc equip?',
    answer: "No et preocupis! Et donarem els recursos necessaris perquè puguis conèixer altres participants durant el període d'inscripcions o al mateix esdeveniment.",
  },
  {
    question: "Quin és el preu de l'esdeveniment?",
    answer: "La HackEPS és un esdeveniment gratuït. Només hauràs d'encarregar-te de portar moltes ganes de dissenyar, programar i aprendre! Tindràs a la teva disposició begudes, menjars, snacks, regalets i molt més.",
  },
  {
    question: "24 hores sense dormir?",
    answer: "Si t'has bloquejat enmig de la nit o estàs esgotat i no en pots més, tindràs una sala habilitada per poder dormir durant la nit. Només assegura't de portar-te tot el que necessitis per estar còmode: sac de dormir, matalàs inflable, estoreta, etc.",
  },
  {
    question: "Qui es pot presentar?",
    answer: "Qualsevol persona >= 18 anys (o que en tingui 16 o més amb autorització signada per un representant legal) amb ganes de programar, dissenyar, aprendre i, sobretot, passar una bona estona programant! Obrirem inscripcions amb un màxim de 160 places.",
  },
  {
    question: "Vols col·laborar amb nosaltres?",
    answer: "Estem oberts a qualsevol tipus de col·laboració ja sigui com a organitzador o sponsor. Contacta amb nosaltres a lleidahack@gmail.com.",
  },

];

const FAQPage = () => {
  return (
    <div className="faq-page">
      <Header /> 
        <FAQContainer faqs={faqs} />
      <Footer /> 
    </div>
  );
};

export default FAQPage;
