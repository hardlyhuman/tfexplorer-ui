import React, { Component } from 'react';
import classes from './main.module.css';

class Main extends Component {
    state = {}

    render() {
        return (
            <div className={classes.heading}>Main Page</div>
            <div className={classes.header}>HEADER</div>
            <div className={classes.row}>
                <div className={classes.column}>
                    <h2>BLOCK 1</h2>
                    <p>This is Block 1</p>
                </div>
                <div className={classes.column}>
                    <h2>BLOCK 2</h2>
                    <p>This is Block 2</p>
                </div>
            </div>
            <div className={classes.footer}>FOOTER</div>
        );
    }
}

export default Main;