import React from "react";

export default function ContactForm() {
  const [submitData, setSubmitData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    console.log(submitData);
    e.preventDefault();
    const url =
      "https://questions.greatfrontend.com/api/questions/contact-form";
    const request = {
      method: "POST",
      body: JSON.stringify(submitData),
    };
    fetch(url, request)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSubmitData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={handleInputChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleInputChange}
      />
      <label htmlFor="name">Message</label>
      <textarea id="message" name="message" onChange={handleInputChange} />
      <button onClick={handleSubmit}>Send</button>
    </form>
  );
}
