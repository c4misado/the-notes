import React from 'react';
import Note from "./Note";
import './String.css';

class String extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: 0
        }
    }
    render() {
        return (
            <div className="String">
                <ul id={this.props.string}>


            //Fix this section with the % thingy
                    {/* <li><Note symbol="Open" value={this.props.openNote % 12 < 0 ? this.props.openNote % 12 + 12 : this.props.openNote + 1 % 12}/></li>
                    <li><Note symbol="-" value={this.props.openNote + 2% 12 < 0 ? this.props.openNote % 12 + 12 : this.props.openNote + 3 % 12}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 4 % 12 < 0 ? this.props.openNote % 12 + 12 : this.props.openNote + 5 % 12}/></li> */}

                    <li><Note symbol="-"value={this.props.openNote + 4}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 5}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 6}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 7}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 8}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 9}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 10}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 11}/></li>
                    <li> <Note symbol="••"value={this.props.openNote + 12 % 12}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 13 % 12}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 14 % 12}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 15 % 12}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 16 % 12}/></li>
                    <li> <Note symbol="•" value={this.props.openNote + 17 % 12}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 18 % 12}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 19 % 12}/></li>
                    <li><Note symbol="-"value={this.props.openNote + 20 % 12}/></li>
                    <li> <Note symbol="•"value={this.props.openNote + 21 % 12}/></li>
                </ul>
            </div>
        )
    }
}

export default String;