import React, { useState } from "react";
import Header from "./Header";
import { PAGES } from "../Portofolio";

const userInputsInit = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function Contact() {
    const [userInputs, setUserInputs] = useState(userInputsInit);
    const [status, setStatus] = useState(undefined);

    function inputFieldChange(event, fieldType) {
        let text = event.target.value;
        setUserInputs((prevUserInputs) => ({
            ...prevUserInputs,
            [fieldType]: text,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setUserInputs(userInputsInit);
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };

        xhr.send(data);
    }
    return (
        <div className="contact">
            <Header highlighted={PAGES.CONTACT} />
            <div className="contact-content">
                <h2 className="page-label">Contact Me</h2>
                <section className="message-box">
                    <h3>GET IN TOUCH</h3>
                    <p>
                        Feel free to contact me. I am open to any discussion,
                        ideas and work oppurtunities.
                    </p>
                    <div className="email-box">
                        <i className="fas fa-envelope-square"></i>
                        <span>nicholas.tanryo22022@gmail.com</span>
                    </div>
                    <div className="logos">
                        <a
                            href="https://www.facebook.com/nicktanryo/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nicholas-tanryo-bb6b5219a/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/nicktanryo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github-square"></i>
                        </a>
                    </div>
                </section>
                <section className="user-form">
                    <form
                        onSubmit={handleSubmit}
                        action="https://formspree.io/f/mbjpqgnn"
                        method="POST"
                    >
                        <div className="form-components">
                            <div className="form-inputs">
                                <input
                                    value={userInputs.name}
                                    name="name"
                                    placeholder="NAME"
                                    onChange={(event) =>
                                        inputFieldChange(event, "name")
                                    }
                                />
                                <input
                                    value={userInputs.email}
                                    name="email"
                                    placeholder="EMAIL"
                                    onChange={(event) =>
                                        inputFieldChange(event, "email")
                                    }
                                />
                                <input
                                    value={userInputs.subject}
                                    name="subject"
                                    placeholder="SUBJECT"
                                    onChange={(event) =>
                                        inputFieldChange(event, "subject")
                                    }
                                />
                            </div>
                            <textarea
                                value={userInputs.message}
                                name="message"
                                placeholder="MESSAGE"
                                className="form-text-area"
                                onChange={(event) =>
                                    inputFieldChange(event, "message")
                                }
                            />
                            {/* <div className="submit-button">
                                <button type="submit">SUBMIT</button>
                            </div> */}
                            {status === "SUCCESS" ? (
                                <p>Thanks!</p>
                            ) : (
                                <button>Submit</button>
                            )}
                            {status === "ERROR" && (
                                <p>Ooops! There was an error.</p>
                            )}
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}
