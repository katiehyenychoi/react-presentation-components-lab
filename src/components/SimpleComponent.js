import React, { Component } from 'react';
// Code SimpleComponent Here

// const { Component } = require("react");

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        const newMood = (this.state.mood === "happy" ?
            "sad" : "happy")
        this.setState({
            mood: newMood
        })
    }



    render() {
        return (
            <div onClick={() => this.handleClick()}>
                {this.state.mood}
            </div>
        )
    }
}