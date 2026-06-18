"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeTransition = (delay = 0) => ({
  duration: 0.8,
  delay,
  ease: "easeOut" as const,
});

const serviceOptions = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Office Cleaning",
  "Home Cleaning",
  "Shop Cleaning",
  "Road Cleaning",
  "car Cleaning",
];

const approxOptions = ["800", "700", "900", "500", "300"];

const roomOptions = ["Residential", "Commercial", "Apartment"];

type FormStatus = "idle" | "loading" | "success" | "error";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  approx: "",
  bed: "",
  bath: "",
  phone: "",
  zip: "",
  note: "",
};

export default function AppointmentSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    try {
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
    <section className="wpo-contact-section-s2 section-padding">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="wpo-contact-form-area">
                <div className="wpo-section-title">
                  <motion.h2
                    className="poort-text poort-in-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRight}
                    transition={fadeTransition(0)}
                  >
                    Make An Appointment
                  </motion.h2>
                </div>

                <form
                  method="post"
                  className="contact-validation-active"
                  id="contact-form-appointment"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col col-lg-6 col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
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
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col col-lg-6 col-12">
                      <select
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose a Service
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <select
                        name="approx"
                        className="form-control"
                        value={formData.approx}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          -- Approx SF --
                        </option>
                        {approxOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <select
                        name="bed"
                        className="form-control"
                        value={formData.bed}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Bedrooms
                        </option>
                        {roomOptions.map((option) => (
                          <option key={`bed-${option}`} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <select
                        name="bath"
                        className="form-control"
                        value={formData.bath}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Bathrooms
                        </option>
                        {roomOptions.map((option) => (
                          <option key={`bath-${option}`} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col col-lg-6 col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="zip"
                        id="zip"
                        placeholder="Zip Code"
                        value={formData.zip}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col fullwidth col-lg-12">
                      <textarea
                        className="form-control"
                        name="note"
                        id="note"
                        placeholder="Message"
                        value={formData.note}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="submit-area">
                    <button type="submit" className="theme-btn">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Submit Request
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="left-shape2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeTransition(0.3)}
      >
        <img src="/assets/images/service/shape1.svg" alt="" />
      </motion.div>
      <motion.div
        className="right-shape"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeTransition(0.3)}
      >
        <img src="/assets/images/service/shape3.svg" alt="" />
      </motion.div>
    </section>
  );
}
