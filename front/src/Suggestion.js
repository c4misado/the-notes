import React, { useState } from "react";
import "./Suggestion.css";


const Suggestion = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [notes, setNotes] = useState("");
    const [message, setMessage] = useState("");
    const [flash, setFlash] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/add", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                name: name,
                email: email,
                notes: notes,
                message: message,
            }),
        })
            .then((res) => res.json())
            .then(
                (res) => setFlash(res.flash),
                (err) => setFlash(err.flash)
            );
    };

    return (
        <div>
            <div className="content">
            <h1>Suggest a mode or scale!</h1>
            <img id="scalePic" src="https://hellomusictheory.com/wp-content/uploads/2019/04/10.7-1024x180.png" alt="scale"></img>
            <p>Be sure to leave us a message with your contact information and an explanation of the scale's values and/or resources for music theory.</p>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} placeholder="Name"/>
                <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" value={email} placeholder="Email"/>
                <input onChange={(e) => setNotes(e.target.value)} type="text" name="notes" value={notes} placeholder="Notes"/>
                <input id="message" onChange={(e) => setMessage(e.target.value)} type="text" name="message" value={message} placeholder="Message"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Suggestion;