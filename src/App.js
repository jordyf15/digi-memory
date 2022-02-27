import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React, {useEffect, useState} from 'react';
import DigimonDeck from './components/DigimonDeck';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [currentDigimonDeck, setCurrentDigimonDeck] = useState([]);
  const [chosenDigimons, setChosenDigimons] = useState([]);
  const [allDigimons, setAllDigimons] = useState([]);

  useEffect(()=>{
    fetch('https://digimon-api.vercel.app/api/digimon').then((res)=>{
      return res.json();
    }).then((data)=>{
      setAllDigimons(data);
    });
  }, []);

  useEffect(()=>{
    if(allDigimons.length>0){
      setCurrentLevelDigimons();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[allDigimons]);

  useEffect(()=>{
    if(level!==1){//set current level digimons when player get next level
      setCurrentLevelDigimons();
    }else if(level===1 && bestScore!==0){//set current level digimons when player get game over
      setCurrentLevelDigimons();
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level])

  const setCurrentLevelDigimons = () => {
    const randomedIndex = [];
    const currentLevelDigimons = [];
    console.log(level);
    for(let i = 0;i<(level*2);i++){
      const randomIndex = Math.floor(Math.random()*allDigimons.length);
      if(randomedIndex.includes(randomIndex)){//if already in randomedIndex
        i--;
      }else{
        currentLevelDigimons.push(allDigimons[randomIndex]);
        randomedIndex.push(randomIndex);
      }
    }
    setChosenDigimons([]);
    setCurrentDigimonDeck(currentLevelDigimons);
  }

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const gameOver = () => {
    if(currentScore>bestScore){
      setBestScore(currentScore);
    }
    setCurrentScore(0);
    setLevel(1);
  }

  const checkLevelCompletion = () => {
    if(chosenDigimons.length+1===currentDigimonDeck.length){
      nextLevel();
    }else{
      shuffleDigimonDeck();
    }
  }

  const shuffleDigimonDeck = () => {
    const shuffledArray = [].concat(currentDigimonDeck);
    shuffleArray(shuffledArray);
    setCurrentDigimonDeck(shuffledArray);
  }

  const nextLevel = () => {
    setLevel(level+1);
  }

  const chooseDigimon = (digimon) => {
    const alreadyChosen = chosenDigimons.filter((chosenDigimon)=>chosenDigimon.name===digimon.name).length>0;
    if(alreadyChosen){
      gameOver();
    }else{
      checkLevelCompletion();
      setCurrentScore(currentScore+1);
      setChosenDigimons(chosenDigimons.concat(digimon));
    }
  }

  return <div>
    <Header />
      <main>
        <p>current score: {currentScore} best score: {bestScore} level: {level}</p>
        {allDigimons.length>0
        ?<DigimonDeck digimons={currentDigimonDeck} onChooseDigimon={chooseDigimon}/>
        :null}
      </main>
    <Footer />
  </div>
}

export default App;
