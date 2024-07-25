import React from "react";
import Buttons from "./Buttons";
import Footer from "./Footer";


function CardContent() {
    return (
        <>
        <header>
            
        </header>
        <main>
            <section className= "user-details">
                <h1 className="user-name">Laura Smith</h1>
                <p className="user-position">Frontend Developer</p>
                <p className ="user-link">laurasmith.website</p>
            </section>
            <Buttons />
            <section className="card-content">
                <h2>About</h2>
                <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h2>Interests</h2>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    );
}

export default CardContent;