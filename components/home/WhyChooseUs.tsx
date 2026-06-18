"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

const benefits = [
  { label: "Experienced & Certified Cleaning Specialists", active: false },
  { label: "Safe, Eco-Friendly Cleaning Solutions", active: true },
  { label: "Honest Pricing with No Hidden Fees", active: false },
  { label: "100% Customer Satisfaction Guaranteed", active: false },
];

function TeamCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {String(count).padStart(2, "0")}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="wpo-choose-section section-padding pt-0">
      <div className="container">
        <div className="wpo-choose-wrap">
          <div className="row">
            <div className="col-lg-6">
              <motion.div
                className="wpo-choose-left-side"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInLeft}
                transition={fadeTransition(0)}
              >
                <div className="wpo-choose-left-img left-to-right-light">
                  <img src="/assets/images/choose/choose.png" alt="Why choose us" />
                </div>
                <div className="wpo-choose-left-box">
                  <div className="wrap">
                    <div className="inside">
                      <h2>
                        <TeamCounter target={50} />+
                      </h2>
                      <p>Team Member</p>
                    </div>
                  </div>
                  <div className="radius-shape">
                    <img
                      src="/assets/images/choose/radius-shape.svg"
                      alt=""
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className="wpo-choose-right-side"
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
                    why choose us
                  </motion.span>
                  <motion.h2
                    className="poort-text poort-in-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRight}
                    transition={fadeTransition(0.2)}
                  >
                    Professional Cleaning You Can Trust
                  </motion.h2>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={fadeTransition(0.3)}
                  >
                    With professional expertise and safe cleaning products, we
                    restore freshness and extend the life of your carpets.
                    Customer satisfaction and quality workmanship are at the
                    heart of everything we do.
                  </motion.p>
                </div>
                <ul>
                  {benefits.map((benefit) => (
                    <li
                      key={benefit.label}
                      className={benefit.active ? "active" : undefined}
                    >
                      <span>{benefit.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
