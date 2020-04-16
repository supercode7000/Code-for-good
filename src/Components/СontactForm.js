import React from 'react';
import "./contactForm.css";

const ContactForm = () => {
    return ( 
        <section>
            <div className="contact-box">
                <div className="contact-text">
                    <h1>
                        Hi, wie können wir dir helfen?
                    </h1>
                    <p>An diesen Zeiten erreichst du uns am besten an folgenden Tagen und Zeiten</p>
                    <p>Montag - Freitag 09:00 - 17:00 Uhr</p>
                    <p>Unser Campus befindet sich im Super7000 Coworcing Space -der Mutter aller Coworking Spaces. Die genau A dresse lautet:</p>
                    <p>Ratherstr.25 40476 Düsseldorf</p>
                </div>
                <div className="contact-input">
                    <input type="text" placeholder="VORNAME"></input>
                    <input type="text" placeholder="NAME"></input>
                    <input type="email" placeholder="EMAIL"></input>
                    <input type="number" placeholder="TELEFONNUMMER"></input>
                    <textarea placeholder="NACHRICHT"></textarea>
                    <button>PLAY VIDEO</button>
                </div>
            </div>
        </section>
     );
}
 
export default ContactForm;