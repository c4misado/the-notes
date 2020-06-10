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
            absoluteNote: this.props.openNote % 12
        }
    }

    componentDidMount = () => {
        let myArr = [];
        for(let i=0; i < 23; i++) {
            console.log(i);
            let valueX = this.props.openNote + i;
            let valueY =  valueX % 12;
            if(i == 3 || i == 5 || i == 7 || i == 9 || i == 15 || i == 17 || i == 19 || i == 21) {
                myArr.push({symbol:"•", value:valueX, absoluteNote: valueY})           
            } else if (i == 12) {
                myArr.push({symbol:"••", value:valueX, absoluteNote: valueY})
            } else if (i == 0) {          
                myArr.push({symbol:"O", value:valueX, absoluteNote: valueY})
            } else {
                myArr.push({symbol:"_", value:valueX, absoluteNote: valueY})
            }
        }
        this.setState({list: myArr})
    }
    render() {
        // console.log(this.state.list);
        // console.log(this.state.absoluteNote);
        return (
            <div className="String">
                <ul id={this.props.string}>{this.state.list.map(item => 
                <li><Note symbol={item.symbol} value={item.value} blah={item.absoluteNote}/></li>)}</ul>
            </div>
        )
    }
}


    // componentDidMount = () => {
    //     this.iterateNoteComp(5);

    // }

    // iterateNoteComp = (num) => {
    //     for (let i=0; i<num; i++) {
    //     return <h1>{num}</h1>
    //     }
    // }




    //generate frets with loop, with parameter for desired number of frets
    //allows you to see different patterns base on tuning, string legnth, etc

    {/* <ul id={this.props.string}>
                    <li><Note symbol="Open" value={this.props.openNote}/></li>
                    <li><Note symbol="-" value={this.props.openNote + 1}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 2}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 3}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 4}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 5}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 6}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 7}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 8}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 9}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 10}/></li>
                    <li> <Note symbol="••"value={this.props.openNote + 11}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 13}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 14}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 15}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 16}/></li>
                    <li> <Note symbol="•" value={this.props.openNote + 17}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 18}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 19}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 20}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 21}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 22}/></li>
                </ul> */}
                {/* <button type="button" onClick={this.thing}>Hello</button> */}

export default String;