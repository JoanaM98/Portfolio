import React, {useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';



function Contacts(){
    const [submitMessage, setSubmitMessage] = useState();

    const form = useRef();


    useEffect(() => {emailjs.init({
          publicKey: "nkWxosAFgkitRv55d"})},[]);
      
          const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm(
              "service_6wba2kw",
              "template_mt81w9h",
              form.current
            ).then(
              () => {
                console.log("SUCCESS!");
                form.current.reset();
                setSubmitMessage(<p className="submit-message"> Thank you for your message!</p>);
              },
              (error) => {
                console.log("FAILED...", error);
                setSubmitMessage(<p className="submit-message">There was an error, please try again.</p>);
              }
            );
          };
        
    return(<div className="container" id="contact-box">
        <h2>Contact Me</h2>
        <form ref={form} id="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="time" value={new Date().toLocaleString([], {
  year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
 hour12:false
})}/>
        <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required></input>
            <label  htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" required></input>
            <label  htmlFor="message">Message</label>
            <textarea id="message" rows="10" name="message" required></textarea>
            <button className="submit-button" type="submit">Submit</button>
        </form>
        {submitMessage}
    </div>);
}

export default Contacts;