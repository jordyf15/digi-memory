import React from 'react';

const DigimonCard = ({digimon, onClickHandle}) =>{
    return <button onClick={()=>onClickHandle(digimon)}>
        <img src={digimon.img} alt={digimon.name}/>
        <p>{digimon.name}</p>
    </button>
};

export default DigimonCard;