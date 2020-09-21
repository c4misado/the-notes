import React from 'react';
import './Fretboard.css';
import String from "./components/String";
const scales = {
  lydian: [0, 2, 4, 6, 7, 9, 11],
  majorScale: [0, 2, 4, 5, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  minorScale: [0, 2, 3, 5, 7, 8, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
}

class Fretboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      scale: [0, 2, 4, 5, 7, 9, 11],
      activeScale: [0, 2, 4, 5, 7, 9, 11]
    }
  }
  changeKey = (event) => {
    let newKey = event.target.value;
    this.setState({ key: newKey });
    this.updateActiveScale(newKey, null)
  }

  changeScale = (event) => {
    let keyScale = scales[event.target.value];
    this.setState({ scale: keyScale });
    this.updateActiveScale(null, keyScale)
  }

  updateActiveScale = (key, scale) => {
    let root = key || this.state.key;
    let notes = scale || this.state.scale;
    let active = [];
    let newNote;
    notes.map(note => {
      newNote = (parseInt(note) + parseInt(root));
      active.push(newNote < 12 ? newNote : newNote % 12);
    });
    console.log(root);
    console.log(notes);
    console.log(active);
    this.setState({ activeScale: active });
  }

  render() {
    return (
      <div className="Fretboard">
        {/* <button onClick={this.updateActiveScale}>YUH</button> */}
        {/* <h1>{this.state.key}</h1>
      <p>Relative:</p>
      {this.state.scale.map(item => <li>{item}</li>)}
      <p>Active:</p>
      {this.state.activeScale.map(item => <li>{item}</li>)} */}
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

        <label for="Select Scale">Select a scale:</label>
        <select name="Select Scale" onChange={this.changeScale}>
          <option value="majorScale">Major</option>
          <option value="minorScale">Minor</option>
          <option value="lydian">Lydian</option>
          <option value="mixolydian">Mixolydian</option>
          <option value="dorian">Dorian</option>
          <option value="phrygian">Phrygian</option>
          <option value="locrian">Locrian</option>
        </select>

        <ul>
          <li>Open</li>
          <li> </li>
          <li> </li>
          <li>3</li>
          <li> </li>
          <li>5</li>
          <li> </li>
          <li>7</li>
          <li> </li>
          <li>9</li>
          <li>-</li>
          <li>-</li>
          <li>12</li>
          <li>-</li>
          <li>-</li>
          <li>15</li>
          <li>-</li>
          <li>17</li>
          <li>-</li>
          <li>-</li>
          <li>19</li>
          <li>-</li>
        </ul>
        <String openNote={115} xscale={this.state.activeScale} />
        <String openNote={120} xscale={this.state.activeScale} />
        <String openNote={125} xscale={this.state.activeScale} />
        <String openNote={130} xscale={this.state.activeScale} />
        <String openNote={134} xscale={this.state.activeScale} />
        <String openNote={139} xscale={this.state.activeScale} />
      </div>
    )
  }
}


export default Fretboard;
