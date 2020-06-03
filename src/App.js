import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import String from "./components/String";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
  return ( 
    <div className="App">
      <String string="LowE" openNote={-7}/>
      <String string="A" openNote={0}/>
      <String string="D" openNote={5}/>
      <String string="G" openNote={10}/>
      <String string="B" openNote={14}/>
      <String string=" HighE" openNote={19}/>
    </div>
    )
  }
}


export default App;
