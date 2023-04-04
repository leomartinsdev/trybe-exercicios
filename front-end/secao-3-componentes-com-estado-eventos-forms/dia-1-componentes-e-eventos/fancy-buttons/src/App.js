import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    numCliquesBtn1: 0,
    numCliquesBtn2: 0,
    numCliquesBtn3: 0,
  }

  getButtonColor = (num) => {
    return num % 2 === 0 ? 'green' : 'white';
  }

  handleClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numCliquesBtn1: estadoAnterior.numCliquesBtn1 + 1,
    }))
  }

  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numCliquesBtn2: estadoAnterior.numCliquesBtn2 + 1,
    }))
  }

  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numCliquesBtn3: estadoAnterior.numCliquesBtn3 + 1,
    }))
  }

  render() {
    const { numCliquesBtn1, numCliquesBtn2, numCliquesBtn3 } = this.state;
    return (
      <>
        <button type='button' onClick={ this.handleClick1 } style={ { backgroundColor: this.getButtonColor(numCliquesBtn1) } }>{`Cliques no botão 1: ${numCliquesBtn1} `}</button>
        <button type='button' onClick={ this.handleClick2 } style={ { backgroundColor: this.getButtonColor(numCliquesBtn2) } }>{`Cliques no botão 2: ${numCliquesBtn2} `}</button>
        <button type='button' onClick={ this.handleClick3 } style={ { backgroundColor: this.getButtonColor(numCliquesBtn3) } }>{`Cliques no botão 3: ${numCliquesBtn3} `}</button>
      </>
    );
  }
}

export default App;
