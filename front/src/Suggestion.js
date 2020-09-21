import React, { useState } from "react";


const Suggestion = () => {
    const [name, setName] = useState("1");
    const [email, setEmail] = useState("2");
    const [notes, setNotes] = useState("3");
    const [message, setMessage] = useState("4");
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
            <h1>{flash}</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} />
                <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" value={email} />
                <input onChange={(e) => setNotes(e.target.value)} type="text" name="notes" value={notes} />
                <input onChange={(e) => setMessage(e.target.value)} type="text" name="message" value={message} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Suggestion;