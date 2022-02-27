import React from 'react';
import DigimonCard from './DigimonCard';

const DigimonDeck = ({digimons, onChooseDigimon}) => {
 return <ul>
     {digimons.map((digimon)=><DigimonCard key={`card-${digimon.name}`} digimon={digimon} onClickHandle={onChooseDigimon}/>)}
 </ul>
};

export default DigimonDeck;