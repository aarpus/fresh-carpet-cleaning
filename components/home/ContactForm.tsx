"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeTransition = (delay = 0) => ({
  duration: 1,
  delay,
  ease: "easeOut" as const,
});

const serviceOptions = ["Office", "Home", "Shop", "Road", "car"];

type FormStatus = "idle" | "loading" | "success" | "error";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  date: "",
  time: "13:00",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    try {
      // Wire to /api/contact when backend is ready
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData(initialFormState);
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="wpo-contact-section section-padding pt-0">
      <div className="wpo-contact-section-wrapper box-style">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <motion.div
                className="wpo-contact-img left-to-right-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInLeft}
                transition={fadeTransition(0)}
              >
                <img src="/assets/images/contact.png" alt="Contact us" />
                <div className="bottom-logos">
                  <div className="bottom-logo-item">
                    <div className="b-logo">
                      <img src="/assets/images/contact-logo1.png" alt="" />
                    </div>
                    <div className="b-logo">
                      <img src="/assets/images/contact-logo2.png" alt="" />
                    </div>
                  </div>
                  <div className="left-shape">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 105 111"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M0 0 C0 34.98 0 69.96 0 106 C-34.65 106 -69.3 106 -105 106 C-105 103.69 -105 101.38 -105 99 C-103.828 98.974 -102.656 98.948 -101.449 98.922 C-87.737 98.486 -76.616 96.421 -66 87 C-56.318 76.465 -54.445 63.636 -54.438 49.812 C-54.381 34.753 -51.779 23.127 -41.375 11.75 C-34.571 5.274 -25.654 1.108 -16.27 0.684 C-15.385 0.642 -14.5 0.6 -13.588 0.557 C-12.672 0.517 -11.756 0.478 -10.812 0.438 C-9.885 0.394 -8.958 0.351 -8.002 0.307 C-1.348 0 -1.348 0 0 0 Z "
                        fill="#ffffff"
                        transform="translate(105,5)"
                      />
                    </svg>
                  </div>
                  <div className="right-shape">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 105 111"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M0 0 C31.067 1.479 31.067 1.479 44.188 15.188 C50.968 23.075 54.067 31.852 54.176 42.156 C54.212 43.939 54.212 43.939 54.248 45.758 C54.29 48.221 54.322 50.685 54.342 53.148 C54.634 65.779 57.252 77.481 66 87 C77.667 97.353 90.069 98.671 105 99 C105 101.31 105 103.62 105 106 C70.35 106 35.7 106 0 106 C0 71.02 0 36.04 0 0 Z "
                        fill="#ffffff"
                        transform="translate(0,5)"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6 col-md-12 col-12">
              <motion.div
                className="wpo-contact-form-area"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInRight}
                transition={fadeTransition(0)}
              >
                <div className="wpo-section-title">
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={fadeTransition(0.1)}
                  >
                    <i>
                      <img src="/assets/images/cleaning-icon.svg" alt="" />
                    </i>
                    get in touch
                  </motion.span>
                  <motion.h2
                    className="poort-text poort-in-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRight}
                    transition={fadeTransition(0.2)}
                  >
                    Reach Out for a Sparkling Space today
                  </motion.h2>
                </div>

                <form
                  method="post"
                  className="contact-validation-active"
                  id="contact-form-home"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col col-lg-6 col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col col-lg-6 col-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col col-lg-12 col-12">
                      <select
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Service catagories
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col col-lg-6 col-12">
                      <input
                        type="time"
                        className="form-control"
                        name="time"
                        id="time"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col col-lg-12 col-12">
                      <div className="submit-area">
                        <button
                          type="submit"
                          className="theme-btn-s2"
                          disabled={status === "loading"}
                        >
                          Book Now
                        </button>
                        <div
                          id="loader"
                          style={{
                            display: status === "loading" ? "block" : "none",
                          }}
                        >
                          <i className="ti-reload" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix error-handling-messages">
                    <div
                      id="success"
                      style={{
                        display: status === "success" ? "block" : "none",
                      }}
                    >
                      Thank you
                    </div>
                    <div
                      id="error"
                      style={{
                        display: status === "error" ? "block" : "none",
                      }}
                    >
                      Error occurred while sending email. Please try again
                      later.
                    </div>
                  </div>
                </form>
                <div className="border-style" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
