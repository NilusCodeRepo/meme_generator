import './App.css';

import Header from "./Components/Header"
import Main from "./Components/Main"
import Counter from "./Components/counter"
import TextForm from "./Components/TextForm"
import ListDemo from './Components/ListDemo';
import ChallengeTernary from './Components/ChallengTernary';
import StateArrayDemo from './Components/StateArrayDemo'
import BusinessCard from './Components/BusinessCard';
import Main2 from './Components/Main2';
import { useState } from 'react';
import BoxesDemo from './Components/BoxesDemo';
import JokesDemo from './Components/JokesDemo';
import MessageDemo from './Components/MessageDemo';
import FormDemo from './Components/FormDemo';
import BoxParct2 from './Components/BoxPract2';
import Signup from './Components/Signup';
function App() {

  const[count,setCount]=useState(3)
  return (
    <div className="App">
      <Header/>
      <Main2/>
    </div>
  );
}

export default App;
