import React from "react";

function Card(props){
return(<div className="card">
<div className="top-card">
<img src={props.src} alt={`${props.title} Project Image`}/>
</div>
<div className="bottom-card">
    <p className="card-title">{props.title}</p>
    <p className="card-subtitle">{props.subtitle}</p>
    <div className="technologies"> {props.html&&<span className="html">{props.html}</span>} {props.css&&<span className="css">{props.css}</span>} {props.js&&<span className="js">{props.js}</span>} {props.react&&<span className="react">{props.react}</span>} {props.bootstrap&&<span className="bootstrap">{props.bootstrap}</span>} {props.sql&&<span className="sql">{props.sql}</span>}
    </div>
    {props.description}
     <a className="card-button" href={props.link} target="_blank">Check it Out!</a>
    </div>
</div>);
}

export default Card;