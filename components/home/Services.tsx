"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeTransition = (delay = 0) => ({
  duration: 0.8,
  delay,
  ease: "easeOut" as const,
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const servicesList = services.map((service) => ({
  title: service.title,
  image: service.cardImage,
  href: `/services/${service.slug}`,
}));

export default function Services() {
  return (
    <section className="wpo-service-section section-padding">
      <div className="wpo-service-wrap box-style section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0)}
                >
                  <i>
                    <img src="/assets/images/cleaning-icon.svg" alt="" />
                  </i>
                  Services
                </motion.span>
                <motion.h2
                  className="poort-text poort-in-right"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                  transition={fadeTransition(0.2)}
                >
                  Professional Cleaning Services for Every Space
                </motion.h2>
              </div>
            </div>
          </div>

          <motion.div
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {servicesList.map((service) => (
              <div
                key={service.title}
                className="col-lg-4 col-md-6 col-12 mb-4"
              >
                <motion.div className="wpo-service-item" variants={itemVariants}>
                  <div className="wpo-service-img middle-light">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="wpo-service-text">
                    <h2>
                      <Link href={service.href}>{service.title}</Link>
                    </h2>
                    <Link className="arrow" href={service.href}>
                      <i className="ti-arrow-top-right" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
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
      </div>
    </section>
  );
}
