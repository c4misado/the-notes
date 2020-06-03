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
                    <li><Note symbol="Open" value={this.state.openNote}/></li>
                    <li><Note symbol="-" value={this.state.openNote + 1}/></li>
                    <li><Note symbol="-"/></li>
                    <li> <Note symbol="•"/></li>
                    <li><Note symbol="-"/></li>
                    <li> <Note symbol="•"/></li>
                    <li><Note symbol="-"/></li>
                    <li> <Note symbol="•"/></li>
                    <li><Note symbol="-"/></li>
                    <li> <Note symbol="•"/></li>
                    <li><Note symbol="-"/></li>
                    <li><Note symbol="-"/></li>
                    <li> <Note symbol="••"/></li>
                    <li><Note symbol="-"/></li>
                    <li><Note symbol="-"/></li>
                    <li> <Note symbol="•"/></li>
                    <li><Note symbol="-"/></li>
                    <li> <Note symbol="•"/></li>
                    <li><Note symbol="-"/></li>
                    <li> <Note symbol="•"/></li>
                    <li><Note symbol="-"/></li>
                    <li> <Note symbol="•"/></li>
                </ul>
            </div>
        )
    }
}

export default String;