import React from 'react';
import '../styles/digimonCard.css';

const DigimonCard = ({digimon, onClickHandle}) =>{
    return <button className='digimon-cards' onClick={()=>onClickHandle(digimon)}>
        <img src={digimon.img} alt={digimon.name}/>
        <p>{digimon.name}</p>
    </button>
};

export default DigimonCard;