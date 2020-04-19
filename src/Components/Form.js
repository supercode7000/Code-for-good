import React, { Component } from 'react';


class Form extends Component {

    render() {
        return (
            <form>
                <div className={this.props.action ? "moveUp" : "up"}>
                    <label>{this.props.frage}</label>
                    <input type="text" onChange={this.props.handleChange} name={`antwort${this.props.i}`} value={this.props.value} placeholder="schreibe hier deine Antwort..."></input>
                </div>
                <div className="bottom">
                    <button onClick={this.props.before}> <i class="fas fa-angle-down"></i> </button>
                    <button onClick={this.props.next}> <i class="fas fa-angle-up"></i> </button>
                    <label>Sag uns wer du bist <span>und wir sagen dir was zu dir passt.</span></label>
                </div>
            </form>
        );
    }
}

export default Form;