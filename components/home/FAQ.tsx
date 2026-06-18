"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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

const fadeTransition = (delay = 0, duration = 1) => ({
  duration,
  delay,
  ease: "easeOut" as const,
});

const faqs = [
  {
    id: "collapseOne",
    headingId: "headingOne",
    question: "What types of cleaning services do you offer?",
    answer:
      "We provide a complete range of professional cleaning services, including Carpet Cleaning, Upholstery Cleaning, Tile & Grout Cleaning, Odor Control Treatments, Hardwood Floor Cleaning, and Carpet Repair Services. Our team uses industry-leading equipment and eco-friendly solutions to deliver exceptional results.",
    defaultOpen: true,
  },
  {
    id: "collapseTwo",
    headingId: "headingTwo",
    question: "Do I need to be home during the cleaning service?",
    answer:
      "While it's helpful for someone to be present at the beginning of the appointment, it's not always necessary. Our trained technicians can complete the service and notify you once the work is finished. We ensure your property is treated with the utmost care and professionalism.",
    defaultOpen: false,
  },
  {
    id: "collapseThree",
    headingId: "headingThree",
    question: "What cleaning products do you use?",
    answer:
      "We use safe, non-toxic, and eco-friendly cleaning products that are effective on dirt, stains, and odors while being safe for children and pets. Our cleaning solutions are specially selected to protect your carpets, upholstery, and flooring surfaces.",
    defaultOpen: false,
  },
  {
    id: "collapseFour",
    headingId: "headingFour",
    question: "How do I book a cleaning appointment?",
    answer:
      "Booking is simple. You can contact us by phone, request a quote online, or fill out our booking form. Our team will help you schedule a convenient time and recommend the best cleaning service based on your needs.",
    defaultOpen: false,
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(
    faqs.find((faq) => faq.defaultOpen)?.id ?? null
  );

  const toggleFaq = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="wpo-faq-section section-padding pt-0">
      <div className="container">
        <div className="wpo-faq-wrap">
          <div className="row">
            <div className="col-lg-5 col-12">
              <motion.div
                className="wpo-faq-box"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInLeft}
                transition={fadeTransition(0, 1.2)}
              >
                <div className="wpo-section-title-s2">
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
                    faq
                  </motion.span>
                  <motion.h2
                    className="poort-text poort-in-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRight}
                    transition={fadeTransition(0.2)}
                  >
                    Freequently ask questions...
                  </motion.h2>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={fadeTransition(0.3)}
                  >
                    Get answers to common questions about our professional
                    cleaning services. From carpet cleaning and stain removal
                    to hardwood floor care, we&apos;re here to help keep your
                    home fresh, clean, and healthy.
                  </motion.p>
                </div>
                <Link href="/appointment" className="theme-btn-s2">
                  Book Now
                </Link>
              </motion.div>
            </div>

            <div className="col-lg-7 col-12">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <motion.div
                    className="wpo-faq-items"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInRight}
                    transition={fadeTransition(0, 1.2)}
                  >
                    <div className="accordion" id="accordionExample">
                      {faqs.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                          <div className="accordion-item" key={faq.id}>
                            <h3
                              className="accordion-header"
                              id={faq.headingId}
                            >
                              <button
                                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={faq.id}
                                onClick={() => toggleFaq(faq.id)}
                              >
                                {faq.question}
                              </button>
                            </h3>
                            <div
                              id={faq.id}
                              className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
                              aria-labelledby={faq.headingId}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
