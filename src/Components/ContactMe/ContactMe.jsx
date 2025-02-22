import "./ContactMe.css";
import emailjs from "emailjs-com";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";
import React, { useRef, useState } from "react";
import Loader from "../Loader/Loader";
import whatsapp from "../../image/WA.png";
import call from "../../image/call.png";

function ContactMe() {
  useScrollReveal(".c-left", { origin: "left", delay: 100 });
  useScrollReveal(".c-right", { origin: "bottom", delay: 800 });
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successresp, setSuccessResp] = useState("");
  const [errorresp, setErrorResp] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_95g1ahs",
        "template_vj8vfwo",
        form.current,
        "EpyNeR2B2-A7V66h8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccessResp(
            "Thank You for contacting me .I will contact you in a while."
          );
          setTimeout(() => {
            setSuccessResp("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setErrorMsg(error.text);
          setLoading(false);
          setErrorResp(
            "Something Went Wrong. Please try again later or else contact through email or linkedin."
          );
          setTimeout(() => {
            setErrorResp("");
          }, 10000);
        }
      );
  };
  return (
    <div>
      <div className="c-body">
        <div className="c-left">
          <div className="c-title1">Get in Touch</div>
          <div className="c-title2">Contact me</div>

          <div className="horizontal-line">
            <hr size="2" />
          </div>
          <div className="contact-me">
            <a href="https://wa.me/6351455749" title="Chat with me on WhatsApp">
              <img src={whatsapp} alt="" className="c-call1" />
            </a>
            <a href="tel:+916351455749" title="Call me">
              <img src={call} alt="" className="c-call2" />
            </a>
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              rows="6"
              placeholder="Message"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {loading ? (
              <div className="c-loader">
                <Loader />
              </div>
            ) : (
              <div className="c-btn">
                <button
                  className="submit-btn sc-button "
                  type="submit"
                  id="submit"
                  name="submit"
                >
                  Send
                </button>
              </div>
            )}
          </form>
          <div className="s-response">{successresp}</div>
          <div className="e-response">{errorresp}</div>
          <label></label>
          <div id="error" title={errormsg}></div>
          <div id="success-msg"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
