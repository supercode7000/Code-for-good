<<<<<<< HEAD
// import React from 'react'
=======
import React, { Component } from 'react';
import "./burger.css"
>>>>>>> 76d3b6c816bd6c33c6fd2573c3fd70accb0a7ae1

class HamburgerButton extends Component {
    state = {
        menuOpen: false
    }

    menuBtn = () => {
        if (!this.state.menuOpen) {
            console.log("test")
            // this.setState({ menuOpen: !this.state.menuOpen });

<<<<<<< HEAD
=======
        }
    }
    render() {
        return (
            <section>
                <button onClick={this.menuBtn} ></button>
            </section>
        );
    }
}

export default HamburgerButton;

>>>>>>> 76d3b6c816bd6c33c6fd2573c3fd70accb0a7ae1
// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if (!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });

// export default 
