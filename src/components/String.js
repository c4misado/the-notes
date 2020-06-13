import React from 'react';
import Note from "./Note";
import './String.css';

const orientation = ["A", "A sharp", "B", "C", "C sharp", "D", "D sharp", "E", "F", "F sharp", "G", "G sharp"];

class String extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 0,
            value: 0,
            list: [],
            absoluteNote: this.props.openNote % 12,
            activeS: this.props.xscale
        }
    }
    componentDidMount = () => {
        let myArr = [];
        for (let i = 0; i < 22; i++) {
            // console.log(i);
            let valueX = this.props.openNote + i;
            let valueY = valueX % 12;
            if (i === 3 || i === 5 || i === 7 || i === 9 || i === 15 || i === 17 || i === 19 || i === 21) {
                myArr.push({ symbol: "•", value: valueX, absoluteNote: valueY })
            } else if (i === 12) {
                myArr.push({ symbol: "••", value: valueX, absoluteNote: valueY })
            } else if (i === 0) {
                myArr.push({ symbol: orientation[this.state.absoluteNote], value: valueX, absoluteNote: valueY })
            } else {
                myArr.push({ symbol: "_", value: valueX, absoluteNote: valueY })
            }
        }
        this.setState({ list: myArr })
    }
    tuneUp = () => {
        return this.props.openNote += 1;
    }
    render() {
        if (this.state.activeS != this.props.xscale) {
            this.setState({ activeS: this.props.xscale });
        }
        return (
            <div className="String">
                <div className='tuners'>
                    {/* <button type="button" onClick={this.tuneUp}>Tune higher</button>
                    <button type="button" onClick>Tune lower</button> */}
                </div>
                {/* <h1>{this.state.activeS}</h1> */}
                <ul id={this.props.string}>{this.state.list.map(item =>
                    <li><Note symbol={item.symbol} value={item.value} abs={item.absoluteNote} notes={this.state.activeS} /></li>)}</ul>
            </div>
        )
    }
}
export default String;