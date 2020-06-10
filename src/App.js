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
      <String openNote={115}/>
      <String openNote={120}/>
      <String openNote={125}/>
      <String openNote={130}/>
      <String openNote={134}/>
      <String openNote={139}/>
    </div>
    )
  }
}


export default App;
