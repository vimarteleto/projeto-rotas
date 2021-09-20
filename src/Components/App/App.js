import React from 'react'
import { Route, Switch} from 'react-router-dom'

import './App.css';

import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import Fiat from '../Fiat/Fiat.js';
import Ford from '../Ford/Ford.js';
import Chevrolet from '../Chevrolet/Chevrolet.js';
import Volkswagen from '../Volkswagen/Volkswagen.js';
import Hyundai from '../Hyundai/Hyundai.js';
import Brasilia from '../Volkswagen/Brasilia/Brasilia';
import Fusca from '../Volkswagen/Fusca/Fusca';
import Polo from '../Volkswagen/Polo/Polo';
import Kombi from '../Volkswagen/Kombi/Kombi';
import Gol from '../Volkswagen/Gol/Gol';

import Motor from '../Volkswagen/Brasilia/Motor/Motor';
import Pedais from '../Volkswagen/Brasilia/Pedais/Pedais';
import Cambio from '../Volkswagen/Brasilia/Cambio/Cambio';
import Volante from '../Volkswagen/Brasilia/Volante/Volante';
import Sensores from '../Volkswagen/Brasilia/Sensores/Sensores';



function App() {
  return (   
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/fiat"><Fiat /></Route>
          <Route exact path="/ford"><Ford /></Route>
          <Route exact path="/chevrolet"><Chevrolet /></Route>
          <Route exact path="/hyundai"><Hyundai /></Route>
          <Route exact path="/volkswagen"><Volkswagen /></Route>

          <Route exact path="/volkswagen/brasilia"><Brasilia /></Route>
          <Route exact path="/volkswagen/fusca"><Fusca /></Route>
          <Route exact path="/volkswagen/polo"><Polo /></Route>
          <Route exact path="/volkswagen/kombi"><Kombi /></Route>
          <Route exact path="/volkswagen/gol"><Gol /></Route>

          <Route exact path="/volkswagen/brasilia/motor"><Motor /></Route>
          <Route exact path="/volkswagen/brasilia/pedais"><Pedais /></Route>
          <Route exact path="/volkswagen/brasilia/cambio"><Cambio /></Route>
          <Route exact path="/volkswagen/brasilia/volante"><Volante /></Route>
          <Route exact path="/volkswagen/brasilia/sensores"><Sensores /></Route>





        </Switch>
      </main>
    </>    
  );
}

export default App;