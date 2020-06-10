import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import String from "./components/String";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      scale: []
    }
  }

  changeKey = (event) => {
    this.setState({key: event.target.value})
  }


  render(){
  return ( 
    <div className="App">
      <h1>{this.state.key}</h1>
      <label for="Select Key">Select a key:</label>
      <select name="Select Key" onChange={this.changeKey}>
        <option value="0">A</option>
        <option value="1">A sharp</option>
        <option value="2">B</option>
        <option value="3">C</option>
        <option value="4">C sharp</option>
        <option value="5">D</option>
        <option value="6">D sharp</option>
        <option value="7">E</option>
        <option value="8">F</option>
        <option value="9">F sharp</option>
        <option value="10">G</option>
        <option value="11">G sharp</option>
      </select>
      {/* <String openNote={115}/>
      <String openNote={120}/>
      <String openNote={125}/>
      <String openNote={130}/>
      <String openNote={134}/>
      <String openNote={139}/> */}
    </div>
    )
  }
}


export default App;
