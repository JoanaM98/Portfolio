import React from "react";
import {Link} from "react-router-dom"

function Hero(){

    return(<div id="hero" className="container">
        <h1>Joana Martins</h1>
        <p>Web Developer in the Works</p>
        <button className="solid-btn"> <Link to="/contacts"> Reach Out </Link></button>
        <button className="line-btn"> <Link to="/projects"> Projects </Link></button>
    </div>);
}

export default Hero;