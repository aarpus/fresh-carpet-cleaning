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

const fadeTransition = (delay = 0) => ({
  duration: 1,
  delay,
  ease: "easeOut" as const,
});

const features = [
  { label: "Deep & Detailed Cleaning", active: false },
  { label: "Eco-Friendly Products", active: true },
  { label: "Flexible Scheduling", active: false },
];

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="transforming-section section-padding">
      <div className="container">
        <div className="transforming-wrap">
          <div className="row">
            <div className="col-lg-6">
              <motion.div
                className="wpo-transforming-left-side"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInLeft}
                transition={fadeTransition(0)}
              >
                <div
                  className="wpo-transforming-left-img"
                  style={
                    {
                      "--position": `${position}%`,
                    } as React.CSSProperties
                  }
                >
                  <div className="transforming-image-container">
                    <img
                      className="transforming-image-before slider-image"
                      src="/assets/images/before-after/after-img.png"
                      alt="after"
                    />
                    <img
                      className="transforming-image-after slider-image"
                      src="/assets/images/before-after/before-img.png"
                      alt="before"
                    />
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={position}
                    onChange={(e) => setPosition(Number(e.target.value))}
                    aria-label="Percentage of before photo shown"
                    className="slider"
                  />
                  <div
                    className="transforming-slider-line"
                    aria-hidden="true"
                  />
                  <div
                    className="transforming-slider-button"
                    aria-hidden="true"
                  >
                    Drag
                  </div>
                </div>
                <div className="after">
                  <span>after</span>
                </div>
                <div className="before">
                  <span>before</span>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className="wpo-transforming-right-side"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInRight}
                transition={fadeTransition(0)}
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
                    before &amp; after
                  </motion.span>
                  <motion.h2
                    className="poort-text poort-in-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRight}
                    transition={fadeTransition(0.2)}
                  >
                    Transforming Spaces, One Clean at a Time
                  </motion.h2>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={fadeTransition(0.3)}
                  >
                    Let us take the stress out of cleaning, so you can focus on
                    what matters most.
                  </motion.p>
                </div>
                <ul>
                  {features.map((feature) => (
                    <li
                      key={feature.label}
                      className={feature.active ? "active" : undefined}
                    >
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="transforming-btns">
                  <Link href="/contact" className="theme-btn-s2">
                    Try yours now
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
