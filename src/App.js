import React, { Component } from 'react'
import './App.css';






class App extends Component {
  state = {
    inputFeld: 0


  }


  handleIncrement = () => {
    let geld = document.getElementById('geld');
    this.setState({ inputFeld: this.state.inputFeld + Number(geld.value) });

    
    /*console.log(5)
    console.log("Akhim")
    console.log(true); */
  }





  handleDecrement = () => {
    let geld = document.getElementById('geld');
    this.setState({ inputFeld: this.state.inputFeld - Number(geld.value) });
    console.log(Number(geld.value));
  }




  render() {
    return (<div className="header" className="konto">
      <h1 id="title">Banana Bank</h1>
      <p>Dein Girokonto</p>
      <p className="saldo">{this.state.inputFeld}</p>
      <input className="geldbetrag" type="number" id="geld" />
      <div>
        <button onClick={this.handleIncrement} className="einzahlen">Einzahlen</button>
        <button onClick={this.handleDecrement} className="auszahlen" >Auszahlen</button>
      </div>
    </div>)
  }
}

export default App;

/*class  extends React.Component {
  render() { 
    return <div></div>;
  }
}
 
export default ; */