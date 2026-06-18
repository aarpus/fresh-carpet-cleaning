"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Service, services } from "@/lib/services";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeTransition = (delay = 0) => ({
  duration: 0.8,
  delay,
  ease: "easeOut" as const,
});

type ServiceDetailContentProps = {
  service: Service;
};

export default function ServiceDetailContent({
  service,
}: ServiceDetailContentProps) {
  const defaultOpenIndex = service.accordion.findIndex(
    (item) => item.defaultOpen,
  );
  const [openIndex, setOpenIndex] = useState(
    defaultOpenIndex >= 0 ? defaultOpenIndex : 0,
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="service-single-page section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 order-lg-2">
            <div className="service-single-wrap">
              <motion.div
                className="title-image"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={fadeTransition(0)}
              >
                <img src={service.heroImage} alt={service.title} />
              </motion.div>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={fadeTransition(0.1)}
              >
                {service.title}
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={fadeTransition(0.15)}
              >
                {service.intro}
              </motion.p>

              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={fadeTransition(0.2)}
              >
                {service.sectionTitle}
              </motion.h3>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={fadeTransition(0.25)}
              >
                {service.sectionBody}
              </motion.p>

              <motion.div
                className="video-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0.3)}
              >
                <div className="video-img">
                  <img src="/assets/images/service-single/video.jpg" alt="" />
                  <div className="video-holder">
                    <a
                      href="https://www.youtube.com/embed/1Bsgv6DnTiI"
                      className="video-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flaticon-play" />
                    </a>
                  </div>
                </div>
                <div className="video-content">
                  <h2>{service.videoTitle}</h2>
                  <p>{service.videoDescription}</p>
                  <ul>
                    {service.videoPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={fadeTransition(0.35)}
              >
                {service.closingParagraph}
              </motion.p>

              <motion.h3
                className="quate"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={fadeTransition(0.4)}
              >
                {service.quote}
              </motion.h3>

              <motion.div
                className="image-gallery"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0.45)}
              >
                <h2>{service.galleryTitle}</h2>
                <ul>
                  {service.galleryImages.map((image, index) => (
                    <li key={image}>
                      <img src={image} alt={`${service.title} ${index + 1}`} />
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="accordion"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                transition={fadeTransition(0.5)}
              >
                {service.accordion.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={item.question}
                      className={`accordion-item${isOpen ? " active" : ""}`}
                    >
                      <button
                        type="button"
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                      >
                        {item.question}
                      </button>
                      <div className="accordion-content">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <div className="col-lg-4 col-12 order-lg-1">
            <motion.div
              className="service-sidebar"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInLeft}
              transition={fadeTransition(0.2)}
            >
              <div className="service-catagory">
                <ul>
                  {services.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className={
                          item.slug === service.slug ? "active" : undefined
                        }
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-info">
                <div className="icon">
                  <i className="flaticon-phone-call" />
                </div>
                <h2>Looking for Cleaning service Provider?</h2>
                <span>Call anytime</span>
                <a href="tel:+10000000000" className="num">
                  <span>(000) 000-0000</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
