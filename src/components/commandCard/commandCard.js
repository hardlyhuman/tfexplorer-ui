import classes from './commandCard.module.css';
import React, { Component } from 'react';
import Typist from 'react-typist';

class CommandCard extends Component{
    render(){
        return (
            <div className={classes.mainDiv}>
             <Typist className={classes.containerDiv}>{this.props.text}</Typist>
            </div>
        );
    }
}

export default CommandCard;