import React, { Component } from 'react';


class Form extends Component {

    render() {
        return (
            <form>
                <label>{this.props.frage}</label>
                <input type="text" onChange={this.props.handleChange} value={this.props.value} placeholder="schreibe hier deine Antwort..."></input>
                <button onClick={this.props.before}> ⇠ </button>
                <button onClick={this.props.next}> ⇢ </button>

            </form>
        );
    }
}

export default Form;