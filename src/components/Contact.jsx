import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";

const initialFormInputs = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const FORM_RESPONSE = {
	SUCCESS: {
		success: true,
		error: false,
		message: "MESSAGE SENT",
	},
	ERROR: {
		success: false,
		error: true,
		message: "FAILED TO SEND MESSAGE",
	},
};

const INIT_FORM_RESPONSE = {
	success: null,
	error: null,
	message: null,
};

function Contact() {
	const [form, setForm] = useState(initialFormInputs);
	const [buttonIsLoading, setButtonIsLoading] = useState(false);
	const [formAfterSubmitMessage, setFormAfterSubmitMessage] = useState(INIT_FORM_RESPONSE);

	function onChangeFormInput(event, type) {
		setForm((form) => {
			return { ...form, [type]: event.target.value };
		});
	}

	async function onSubmitForm(event) {
		setButtonIsLoading(true);
		event.preventDefault();

		let data = new FormData(event.target);

		fetch(event.target.action, {
			method: "POST",
			body: data,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				if (response.status === 200) {
					setFormAfterSubmitMessage(FORM_RESPONSE.SUCCESS);
					setForm(initialFormInputs);
				} else {
					throw new Error();
				}
			})
			.catch((error) => {
				setFormAfterSubmitMessage(FORM_RESPONSE.ERROR);
			})
			.finally(() => {
				setButtonIsLoading(false);
				setTimeout(() => {
					setFormAfterSubmitMessage(INIT_FORM_RESPONSE);
				}, 2000);
			});
	}

	return (
		<section id="contact" className={styles.contact}>
			<h2 className={styles.header}>Contact Me</h2>
			<span className={styles.contactMessage}>
				Feel free to contact me at &nbsp;
				<a href="mailto: nicholas.tanryo@gmail.com" className={styles.email}>
					nicholas.tanryo@gmail.com
				</a>
				&nbsp; or message me
			</span>
			<form className={styles.contactForm} onSubmit={onSubmitForm} action="https://formspree.io/f/moqyyqbw" method="POST">
				<div className={styles.formInputs}>
					<input
						autoComplete="off"
						type="text"
						placeholder="Name"
						name="name"
						className={styles.formInput}
						value={form.name}
						onChange={(event) => onChangeFormInput(event, "name")}
					/>
					<input
						autoComplete="off"
						type="email"
						placeholder="Email"
						name="email"
						className={styles.formInput}
						value={form.email}
						onChange={(event) => onChangeFormInput(event, "email")}
					/>
					<input
						autoComplete="off"
						type="text"
						placeholder="Subject"
						name="subject"
						className={styles.formInput}
						value={form.subject}
						onChange={(event) => onChangeFormInput(event, "subject")}
					/>
				</div>

				<textarea
					placeholder="Message"
					name="message"
					rows="10"
					className={styles.formMessage}
					value={form.message}
					onChange={(event) => onChangeFormInput(event, "message")}
				/>

				<button
					type="submit"
					className={`
						${styles.formButton} 
						${buttonIsLoading ? styles.isLoading : ""}
						${formAfterSubmitMessage.success ? styles.success : ""} 
						${formAfterSubmitMessage.error ? styles.error : ""}`}
					disabled={buttonIsLoading || formAfterSubmitMessage.error || formAfterSubmitMessage.success}
				>
					<FormButtonContent isLoading={buttonIsLoading} formResponse={formAfterSubmitMessage} />
				</button>
			</form>
		</section>
	);
}

export default Contact;

function FormButtonContent({ isLoading, formResponse }) {
	if (isLoading) {
		return <LoadingCircle />;
	} else if (formResponse.success || formResponse.error) {
		if (formResponse.success) {
			return <SuccessButtonContent message={formResponse.message} />;
		} else {
			return <ErrorButtonContent message={formResponse.message} />;
		}
	} else {
		return (
			<>
				<span>SEND MESSAGE</span>
				<i className="fas fa-paper-plane"></i>
			</>
		);
	}
}

function LoadingCircle() {
	return <span className={styles.loader}></span>;
}

function SuccessButtonContent({ message }) {
	return (
		<>
			<span>{message}</span>
			<i className="fas fa-check"></i>
		</>
	);
}

function ErrorButtonContent({ message }) {
	return (
		<>
			<span>{message}</span>
			<i className="fas fa-times"></i>
		</>
	);
}
