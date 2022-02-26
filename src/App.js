import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React, {useEffect, useState} from 'react';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [availableDigimons, setAvailableDigimons] = useState([]);
  const [chosenDigimons, setChosenDigimons] = useState([]);
  const [allDigimons, setAllDigimons] = useState([]);

  useEffect(()=>{
    fetch('https://digimon-api.vercel.app/api/digimon').then((res)=>{
      return res.json();
    }).then((data)=>{
      setAllDigimons(data);
    });
  });

  const setCurrentLevelDigimons = () => {
    const randomedIndex = [];
    for(let i = 0;i<level;i++){
      const randomIndex = Math.floor(Math.random()*allDigimons.length);
      if(randomedIndex.includes(randomIndex)){//if already in randomedIndex
        i--;
      }else{
        availableDigimons.push(allDigimons[randomIndex]);
        randomedIndex.push(randomIndex);
      }
    }
  }

  const checkLevelCompletion = () => {

  }

  return <div>
    <Header />
      
    <Footer />
  </div>
}

export default App;
