"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeTransition = (delay = 0, duration = 0.8) => ({
  duration,
  delay,
  ease: "easeOut" as const,
});

export default function CTA() {
  return (
    <section className="wpo-cta-section style-2 section-padding pt-0">
      <div className="container">
        <div className="wpo-cta-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <motion.div
                className="wpo-cta-box"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0, 1.2)}
              >
                <div className="wpo-section-title-s2">
                  <motion.h2
                    className="poort-text poort-in-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRight}
                    transition={fadeTransition(0.1)}
                  >
                    Need Help Fast? We&apos;re Just One Call Away
                  </motion.h2>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={fadeTransition(0.2)}
                  >
                    In today&apos;s competitive business, the demand for
                    efficient IT solutions has never been more critical.
                  </motion.p>
                </div>
                <a href="tel:+17189044450" className="call">
                  <i>
                    <img src="/assets/images/phone-call.svg" alt="" />
                  </i>
                  +1 718-904-4450
                </a>
                <small>
                  Consult With It Advisor? <Link href="#">Click Now</Link>
                </small>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className="wpo-cta-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0.2, 1.4)}
              >
                <img
                  src="/assets/images/bottles-with-cleansers.png"
                  alt="Cleaning products"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
