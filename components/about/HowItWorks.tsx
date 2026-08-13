"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const fadeTransition = (delay = 0) => ({
  duration: 1,
  delay,
  ease: "easeOut" as const,
});

const steps = [
  {
    icon: "/assets/images/work/work-icon-1.svg",
    label: "Book online",
    number: "01",
  },
  {
    icon: "/assets/images/work/work-icon-2.svg",
    label: "get service",
    number: "02",
  },
  {
    icon: "/assets/images/work/work-icon-3.svg",
    label: "Enjoy service",
    number: "03",
  },
];

export default function HowItWorks() {
  return (
    <section className="wpo-work-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={fadeTransition(0)}
              >
                <i>
                  <img src="/assets/images/cleaning-icon-white.svg" alt="" />
                </i>
                How It Works
              </motion.span>
              <motion.h2
                className="poort-text poort-in-right"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInRight}
                transition={fadeTransition(0.15)}
              >
                From your first call to the final walkthrough, Totally Flooring
                keeps the process simple, clear, and focused on giving your
                floors the care they need.
              </motion.h2>
            </div>
          </div>
        </div>

        <div className="wpo-work-wrap">
          <div className="row">
            {steps.map((step) => (
              <div key={step.number} className="col col-lg-4 col-md-6 col-12">
                <div className="wpo-work-item">
                  <div className="wpo-work-icon">
                    <img src={step.icon} alt="" />
                  </div>
                  <div className="wpo-work-text">
                    <span>{step.label}</span>
                    <h2>{step.number}</h2>
                    <div className="line" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="left-images">
        <motion.div
          className="image-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInDown}
          transition={fadeTransition(0)}
        >
          <div className="image-move">
            <img src="/assets/images/work/image-1.jpg" alt="" />
          </div>
        </motion.div>
        <motion.div
          className="image-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInLeft}
          transition={fadeTransition(0.1)}
        >
          <div className="image-move">
            <img src="/assets/images/work/image-2.jpg" alt="" />
          </div>
        </motion.div>
        <motion.div
          className="image-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={fadeTransition(0.2)}
        >
          <div className="image-move">
            <img src="/assets/images/work/image-3.jpg" alt="" />
          </div>
        </motion.div>
      </div>

      <div className="right-images">
        <motion.div
          className="image-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInDown}
          transition={fadeTransition(0)}
        >
          <div className="image-move2">
            <img src="/assets/images/work/image-4.jpg" alt="" />
          </div>
        </motion.div>
        <motion.div
          className="image-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInRight}
          transition={fadeTransition(0.1)}
        >
          <div className="image-move2">
            <img src="/assets/images/work/image-5.jpg" alt="" />
          </div>
        </motion.div>
        <motion.div
          className="image-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={fadeTransition(0.2)}
        >
          <div className="image-move2">
            <img src="/assets/images/work/image-6.jpg" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
