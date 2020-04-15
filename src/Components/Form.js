import React, { Component } from 'react';
import data from "./data"

class Form extends Component {
    state = {
        data: data,
        i: 0,
        frage: data[0].frage,
        dataAntwort: [],
        antwort: {},
        value: ''
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
    }
    next = (event) => {
        // this.state.dataAntwort[this.state.i] = this.state.value
        this.state.data[this.state.i].antwort = this.state.value
        // console.log(this.state.dataAntwort[this.state.i])
        console.log(this.state.data)
        let frage = this.state.data[++this.state.i].frage
        this.state.antwort = { antwort: this.state.value }
        if (this.state.i > this.state.data.length) {
            console.log("test")

        }

        //console.log(this.state.dataAntwort)

        event.preventDefault();
        this.setState({
            frage: frage,
            i: this.state.i,
            // dataAntwort: this.state.dataAntwort,
            data: this.state.data
        }, () => {
            this.setState({ value: '' })
        });
    }

    before = (event) => {
        //this.state.i--
        let frage = this.state.data[--this.state.i].frage

        console.log(this.state.dataAntwort)
        event.preventDefault()
        this.setState({
            frage: frage,
            i: this.state.i
        });
    }

    render() {
        return (
            <form>
                <label>{this.state.frage}</label>
                <input type="text" onChange={this.handleChange} value={this.state.value}></input>
                <button onClick={this.before}> ⇠ </button>
                <button onClick={this.next}> ⇢ </button>

            </form>
        );
    }
}

export default Form;