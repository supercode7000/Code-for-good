import React, { Component } from 'react';

import Form from './Form';

class Umfrage extends Component {
    state = {
        display: true,

    }
    start = () => {
        this.setState({ display: false });
    }

    render() {
        return (
            <section>
                <article className="losGehts" style={this.state.display ? { display: "block" } : { display: "none" }}>
                    <h1>Los <span>geht's</span> 👋</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, enim.</p>
                    <button onClick={this.start}>Start</button>
                </article>
                <article className="fragen" style={this.state.display ? { display: "none" } : { display: "block" }} >
                    <Form />
                </article>
            </section>

        );
    }
}

export default Umfrage;

