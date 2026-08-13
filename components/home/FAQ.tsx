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
      "Totally Flooring offers a range of professional cleaning services to help keep your floors and home looking their best. Our services include carpet cleaning, upholstery cleaning, tile and grout cleaning, odor removal, hardwood floor cleaning, and carpet repair. We take the time to understand what your floors need and use the right cleaning approach for each job.",
    defaultOpen: true,
  },
  {
    id: "collapseTwo",
    headingId: "headingTwo",
    question: "Do I need to be home during the cleaning service?",
    answer:
      "Not necessarily. If you’re available at the start of the appointment, we can go over the areas that need attention and make sure everything is clear before we begin. If you need to step out, our team can complete the cleaning and let you know when the job is finished. We’ll always treat your home and belongings with care and respect",
    defaultOpen: false,
  },
  {
    id: "collapseThree",
    headingId: "headingThree",
    question: "What cleaning products do you use?",
    answer:
      "We choose our cleaning products based on the type of surface and the cleaning it needs. We aim to use effective, Eco-Friendly and carefully selected solutions that are safe for your floors, upholstery, and home when used as directed",
    defaultOpen: false,
  },
  {
    id: "collapseFour",
    headingId: "headingFour",
    question: "How do I book a cleaning appointment?",
    answer:
      "Booking with Totally Flooring is simple. Give us a call, request a quote online, or fill out our booking form. We’ll help you choose the right service for your floors and find a convenient time for your appointment",
    defaultOpen: false,
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(
    faqs.find((faq) => faq.defaultOpen)?.id ?? null,
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
                      <img src="/assets/images/cleaning-icon.png" alt="" />
                    </i>
                    FAQs
                  </motion.span>
                  <motion.h2
                    className="poort-text poort-in-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRight}
                    transition={fadeTransition(0.2)}
                  >
                    Frequently asked questions...
                  </motion.h2>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={fadeTransition(0.3)}
                  >
                    Have questions about our cleaning services? From carpet and
                    stain removal to upholstery and floor care, we&apos;ve
                    answered some of the questions we hear most often to help
                    you know what to expect.
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
                            <h3 className="accordion-header" id={faq.headingId}>
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
