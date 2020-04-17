import React, { Component } from 'react';
import data from "./data"
import Form from './Form';
import "./umfrage.css"

class Umfrage extends Component {
    state = {
        display: true,
        display0: true,
        display1: false,
        data: data,
        i: 0,
        frage: data[0].frage,
        antwort: {},
        value: '',
    }
    start = () => {
        this.setState({ display: false });
        this.setState({ display0: false });
        console.log(this.state.i)
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    next = (event) => {
        event.preventDefault();
        if (this.state.data[this.state.i].antwort === undefined) {
            if (this.state.value === "") {
                // this.state.data[this.state.i].antwort = undefined
                this.setState({ data: this.state.data });
            } else {
                this.state.data[this.state.i].antwort = this.state.value
            }
        } else if (this.state.data[this.state.i].antwort !== undefined && this.state.value !== "") {
            this.state.data[this.state.i].antwort = this.state.value
        }
        console.log(this.state.data)
        console.log(this.state.data1)
        if (this.state.i < this.state.data.length - 1) {
            this.setState({ i: ++this.state.i });
        } else {
            this.setState({ display0: !this.state.display1 });
            this.setState({ display1: !this.state.display1 });
        }
        if (this.state.i === 1 && this.state.data[0].antwort === undefined) {
            this.state.data[this.state.i].frage = "2 -> Danke dir und wie lautet dein Nachname?"
            this.setState({ frage: this.state.data[1].frage });
        } else if (this.state.i === 1) {
            this.state.data[this.state.i].frage = "2 -> Danke, " + this.state.data[0].antwort + ", " + "und wie lautet dein Nachname?"
            this.setState({ frage: this.state.data[1].frage });
        }

        this.setState({ frage: this.state.data[this.state.i].frage });
        this.setState({
            data: this.state.data
        }, () => {
            this.setState({ value: '' })
        });


    }

    before = (event) => {
        event.preventDefault()
        if (this.state.i > 0) {
            this.setState({ i: this.state.i-- });

            this.setState({
                frage: this.state.data[this.state.i].frage,
                i: this.state.i
            });
        }
    }
    render() {

        return (
            <section className="umfrage">
                <article className="losGehts" style={this.state.display ? { display: "block" } : { display: "none" }}>
                    <h1>Los <span>geht's</span> 👋</h1>
                    <p>Hi, jetzt gleich erwarten dich ein paar Fragen, die uns helfen werden deine Anfrage besser beurteilen zu können. Bitte, nimm dir genug Zeit, alle Frage in Ruhe und vollständig auszufühlen. Bereit?</p>
                    <button className="start btn striped-shadow violet st" onClick={this.start}><span>Start</span></button>
                </article>
                <article className="fragen" style={this.state.display0 ? { display: "none" } : { display: "block" }} >
                    <Form before={this.before} next={this.next} handleChange={this.handleChange} frage={this.state.frage} value={this.state.value} />
                </article>
                <article className="endForm" style={this.state.display1 ? { display: "block" } : { display: "none" }}>
                    <form name="umfrage" method="POST" data-netlify="true">
                        <div>
                            {this.state.data.map((elt) =>
                                <div id="array" name="array">
                                    <label name="frage" value={elt.frage}>{elt.frage}</label>
                                    <label className="antwort" name="antwort" value={elt.antwort}>{elt.antwort}</label>
                                </div>)}
                        </div>
                        <div className="senden">
                            <input type="submit" value="Senden"></input>
                        </div>
                    </form>
                </article>
            </section>

        );
    }
}

export default Umfrage;

