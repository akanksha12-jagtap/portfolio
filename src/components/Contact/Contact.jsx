import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.png";
import call from "../../assets/call1.png";
import mail from "../../assets/mail1.png";
import loc from "../../assets/loc1.png";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "25ef2ba3-afc4-4f9c-bb1a-4d2ac2e3e698");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>j.akanksha.1222@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+91 8899374663</p>
            </div>
            <div className="contact-detail">
              <img src={loc} alt="" />
              <p>Chembur, Mumbai-400071</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          <label htmlFor="">Write your message here..</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
