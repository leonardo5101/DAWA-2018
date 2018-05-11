import React, { Component } from 'react';

import Contador from './components/Contador/Contador.js';
import Calculadora from './components/Calculadora/Calculadora.js';

class App extends Component {
  render() {
    return (<div>
      <Contador valor={6}/>
      <hr />
      <Calculadora valor1 ={5} valor2 ={7}/>
      </div>);
  }
}

export default App;
