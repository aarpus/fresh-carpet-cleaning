"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "success" | "error";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPageForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

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
    <form
      className="contact-form contact-validation-active"
      id="contact-form-page"
      onSubmit={handleSubmit}
    >
      <div className="input-item">
        <input
          id="name"
          name="name"
          className="fild"
          type="text"
          placeholder="Your Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>
          <i className="flaticon-user" />
        </label>
      </div>
      <div className="input-item">
        <input
          id="email"
          name="email"
          className="fild"
          type="email"
          placeholder="Email Address*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>
          <i className="flaticon-email" />
        </label>
      </div>
      <div className="input-item">
        <textarea
          id="message"
          name="message"
          className="fild textarea"
          placeholder="Enter Your Message here"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <label>
          <i className="flaticon-edit" />
        </label>
      </div>
      <div className="input-item submitbtn">
        <input className="fild" type="submit" value="Get In Touch" />
      </div>
      <div className="clearfix error-handling-messages">
        <div
          id="success"
          style={{ display: status === "success" ? "block" : "none" }}
        >
          Thank you
        </div>
        <div
          id="error"
          style={{ display: status === "error" ? "block" : "none" }}
        >
          Error occurred while sending email. Please try again later.
        </div>
      </div>
    </form>
  );
}
