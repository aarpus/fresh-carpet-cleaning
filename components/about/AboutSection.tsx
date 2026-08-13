"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
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

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const fadeTransition = (delay = 0) => ({
  duration: 1,
  delay,
  ease: "easeOut" as const,
});

// Matches gsap-script.js new_img-animet (xPercent ±100, 5s, power2.out)
const imageRevealEase = [0.33, 1, 0.68, 1] as const;
const imageRevealTransition = {
  duration: 5,
  ease: imageRevealEase,
};

function ClientCounter({ target }: { target: number }) {
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

  return <span ref={ref}>{String(count).padStart(2, "0")}</span>;
}

export default function AboutSection() {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-title">
          <div className="row">
            <div className="col-lg-4">
              <motion.div
                className="sub-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInLeft}
                transition={fadeTransition(0)}
              >
                <span>
                  <i>
                    <img src="/assets/images/cleaning-icon.png" alt="" />
                  </i>
                  about Us
                </span>
              </motion.div>
            </div>
            <div className="col-lg-8">
              <div className="main-title">
                <motion.h2
                  className="text-opacity-animation"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0.1)}
                >
                  We believe clean floors make a space feel better. Our mission
                  is to deliver effective floor care that leaves your space
                  feeling healthier &amp; happier.
                </motion.h2>
              </div>
            </div>
          </div>
        </div>

        <div className="about-wrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left-side-wrap">
                <div className="about-left-side">
                  <motion.div
                    className="about-left-img"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInLeft}
                    transition={fadeTransition(0)}
                  >
                    <img
                      src="/assets/images/about/about-1.png"
                      alt="Totally Flooring cleaning team"
                    />
                  </motion.div>
                  <motion.div
                    className="about-left-client-box"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInRight}
                    transition={fadeTransition(0.15)}
                  >
                    <div className="wrap">
                      <h2>
                        <ClientCounter target={40} />
                        K+
                      </h2>
                      <p>Client&apos;s serviced</p>
                    </div>
                  </motion.div>
                </div>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0.2)}
                >
                  At Totally Flooring, our goal is simple: provide dependable,
                  thoughtful cleaning that helps your space feel fresh and well
                  cared for. We treat every floor as if it were our own, taking
                  the time to understand what it needs and doing the job with
                  care from start to finish.
                </motion.p>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0.3)}
                >
                  <Link href="/appointment" className="theme-btn">
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-right-side">
                <motion.div
                  className="about-right-img"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInRight}
                  transition={fadeTransition(0)}
                >
                  <img
                    src="/assets/images/about/about-img-2.jpg"
                    alt="Professional carpet cleaning"
                  />
                  <motion.div
                    className="content-box"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInLeft}
                    transition={fadeTransition(0.2)}
                  >
                    <span>Carpet Cleaning</span>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="leaf-shape"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={zoomIn}
                  transition={fadeTransition(0.25)}
                >
                  <img src="/assets/images/about/leaf.png" alt="" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="shape-img"
        style={{ overflow: "hidden" }}
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true, amount: 0 }}
        transition={imageRevealTransition}
      >
        <motion.img
          src="/assets/images/about/ab-shape.png"
          alt=""
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true, amount: 0 }}
          transition={imageRevealTransition}
        />
      </motion.div>
    </section>
  );
}
