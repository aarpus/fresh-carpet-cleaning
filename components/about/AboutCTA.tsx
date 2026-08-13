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

const features = [
  "Experienced Floor Care Professionals",
  "Carefully Selected Cleaning Solutions",
  "Straightforward Pricing With No Surprises",
  "Reliable Service You Can Count On",
];

export default function AboutCTA() {
  return (
    <section className="wpo-cta-section section-padding pt-0">
      <div className="container">
        <div className="wpo-cta-wrap">
          <div className="row">
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
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={fadeTransition(0.05)}
                  >
                    <i>
                      <img src="/assets/images/cleaning-icon.png" alt="" />
                    </i>
                    emergency call
                  </motion.span>
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
                    From everyday wear and stubborn stains to carpets that need
                    a little extra care, Totally Flooring is here to help.
                  </motion.p>
                </div>
                <a href="tel:+12403167748" className="call">
                  <i>
                    <img src="/assets/images/phone-call.svg" alt="" />
                  </i>
                  +1 (240) 316-7748
                </a>
                <small>
                  Consult With It Advisor?{" "}
                  <Link href="/contact">Click Now</Link>
                </small>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className="wpo-cta-box features"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0.2, 1.4)}
              >
                <div className="wpo-section-title-s2">
                  <span>
                    <i>
                      <img src="/assets/images/cleaning-icon.png" alt="" />
                    </i>
                    features
                  </span>
                  <h2 className="poort-text poort-in-right">
                    Caring for Your Floors, the Right Way
                  </h2>
                </div>
                <ul>
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="r-shape">
                  <img
                    src="/assets/images/cleaning-logo-business-composition.png"
                    alt=""
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
