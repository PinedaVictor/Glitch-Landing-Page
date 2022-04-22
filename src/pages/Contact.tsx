import React, { useState } from "react";
// import firebase from "firebase/app";

export const Contact: React.FC = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emptyFormFieldsMessage, setEmptyFormFieldsMessage] = useState("");
  const [formStatus, setFormStatus] = useState(false);
  const [emailSentStatusMessage, setEmailSentStatusMessage] =
    useState("Sending Email...");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // If your using firebase cloud functions, uncomment the lines of code and make
    // sure you call your function.
    // const sendEmail = firebase.functions().httpsCallable("contact");
    // console.log(sendEmail);
    if (
      formFields.name === "" ||
      formFields.email === "" ||
      formFields.subject === "" ||
      formFields.message === ""
    ) {
      setEmptyFormFieldsMessage("* All form fields required");
      return false;
    } else {
      try {
        setEmptyFormFieldsMessage("");
        setFormStatus(!formStatus);
        // Wait an email response
        // const waitEmailSend = await sendEmail(formFields);
        if (true) {
          setEmailSentStatusMessage("Email Sent");
          setTimeout(() => {
            setFormStatus(false);
            setFormFields({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          }, 1500);
        }
      } catch (error) {
        console.log("Error sending email:::", error);
      }
    }
  };

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setFormFields((prevState) => {
      const data = Object.assign({}, prevState);
      const newData = Object.assign(data, { ...data, [name]: value });
      return newData;
    });
  };

  return (
    <div className="contactWrapper">
      {formStatus && (
        <div className="fadeIn" id="formStatusLayover">
          <h1 className="emailStatusMessage">{emailSentStatusMessage}</h1>
        </div>
      )}
      <h1 className="contactHeader">Contact us</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleInputChange}
          value={formFields.name}
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          onChange={handleInputChange}
          value={formFields.email}
          type="text"
          placeholder="Email"
        />
        <input
          name="subject"
          onChange={handleInputChange}
          value={formFields.subject}
          type="text"
          placeholder="Subject"
          maxLength={50}
        />
        <textarea
          name="message"
          onChange={handleInputChange}
          value={formFields.message}
          maxLength={350}
          placeholder="Message"
        />
        <button type="submit" id="formSubmit">
          Send
        </button>
      </form>
      <p className="emptyFormFields">{emptyFormFieldsMessage}</p>
    </div>
  );
};
