import classes from './commandCard.module.css';
import React, { Component } from 'react';

// Should be used as classes.containerDiv where containerDiv is a classname defined in css file
class CommandCard extends Component{

    render(){
        return (
            <div className={classes.mainDiv}>
            <div className={classes.containerDiv}>{this.props.text}</div>
            </div>
        );
    }
}

export default CommandCard;