import React from 'react';
import DigimonCard from './DigimonCard';
import '../styles/digimonDeck.css';

const DigimonDeck = ({digimons, onChooseDigimon}) => {
 return <ul id='digimon-deck'>
     {digimons.map((digimon)=><DigimonCard key={`card-${digimon.name}`} digimon={digimon} onClickHandle={onChooseDigimon}/>)}
 </ul>
};

export default DigimonDeck;