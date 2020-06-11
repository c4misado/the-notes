import React from 'react';
import Note from "./Note";
import './String.css';

class String extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: 0,
            value: 0,
            list: [],
            absoluteNote: this.props.openNote % 12,
            activeS: this.props.xscale 
        }
    }

    componentDidMount = () => {
        let myArr = [];
        for(let i=0; i < 22; i++) {
            console.log(i);
            let valueX = this.props.openNote + i;
            let valueY =  valueX % 12;
            if(i === 3 || i === 5 || i === 7 || i === 9 || i === 15 || i === 17 || i === 19 || i === 21) {
                myArr.push({symbol:"•", value:valueX, absoluteNote: valueY})           
            } else if (i === 12) {
                myArr.push({symbol:"••", value:valueX, absoluteNote: valueY})
            } else if (i === 0) {          
                myArr.push({symbol:"O", value:valueX, absoluteNote: valueY})
            } else {
                myArr.push({symbol:"_", value:valueX, absoluteNote: valueY})
            }
        }
        this.setState({list: myArr})
    }
    render() {
        if (this.state.activeS != this.props.xscale) {
            this.setState({activeS: this.props.xscale});
        }
        // console.log(this.state.list);
        // console.log(this.state.absoluteNote);
        return (
            <div className="String">
                {/* <h1>{this.state.activeS}</h1> */}
                <ul id={this.props.string}>{this.state.list.map(item => 
                <li><Note symbol={item.symbol} value={item.value} abs={item.absoluteNote} notes={this.state.activeS}/></li>)}</ul>
            </div>
        )
    }
}
export default String;