import "./ContactMe.css";
import emailjs from "emailjs-com";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";
import React, { useRef, useState } from "react";
import Loader from "../Loader/Loader";
import whatsapp from "../../image/WA.png";
import call from "../../image/call.png";
import { useTranslation } from "react-i18next";

function ContactMe() {
  const { t } = useTranslation();
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
          setSuccessResp(t("contact-success-msg"));
          setTimeout(() => {
            setSuccessResp("");
          }, 10000);
        },
        (error) => {
          console.log(error.text);
          setErrorMsg(error.text);
          setLoading(false);
          setErrorResp(t("contact-error-msg"));
          setTimeout(() => {
            setErrorResp("");
          }, 10000);
        }
      );
    setEmail("");
    setName("");
    setMessage("");
  };
  return (
    <div>
      <div className="c-body">
        <div className="c-left">
          <div className="c-title1">{t("contact-title1")}</div>
          <div className="c-title2">{t("contact-title2")}</div>

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
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder={t("contact.c1")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              id="email"
              name="from_email"
              placeholder={t("contact.c2")}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              rows="6"
              placeholder={t("contact.c3")}
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
                  {t("send-btn")}
                </button>
              </div>
            )}
          </form>
          <div className="c-message">
            <div className="s-response" style={{ color: "green" }}>
              {successresp}
            </div>
            <div className="e-response" style={{ color: "red" }}>
              {errorresp}
            </div>
          </div>
          <label></label>
          <div id="error" title={errormsg}></div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
