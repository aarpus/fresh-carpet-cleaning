"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeTransition = (delay: number) => ({
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

export default function Hero() {
  return (
    <section className="static-hero box-style">
      <div className="container">
        <div className="wraper">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <motion.div
                className="slide-title"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={fadeTransition(0)}
              >
                <span className="text-white">
                  <img src="/assets/images/cleaning-icon.svg" alt="Cleaning" />
                  Because Clean Feels Better
                </span>
              </motion.div>

              <motion.div
                className="slide-sub-title"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={fadeTransition(0.3)}
              >
                <h2>Fresh Carpet Cleaning for Homes & Offices</h2>
              </motion.div>

              <motion.div
                className="slide-description"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={fadeTransition(0.5)}
              >
                <p className="text-white">
                  Professional carpet cleaning that removes dirt, stains, and
                  odors—leaving your carpets fresh, clean, and healthy.
                </p>
              </motion.div>

              <motion.div
                className="slide-btns"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={fadeTransition(0.7)}
              >
                <Link href="/appointment" className="theme-btn-s2">
                  Book Now
                </Link>

                <Link href="/services" className="theme-btn-s3 mx-2">
                  <span className="rolling-text" data-text="Our Services">
                    Our Services
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 948 759"
          fill="none"
        >
          <path
            d="M0 14C0 6.26801 6.26801 0 14 0H878.445C884.831 0 890.436 4.4205 892.011 10.609C967.074 305.618 966.222 470.707 892.098 748.562C890.468 754.672 884.902 759 878.578 759H14C6.26801 759 0 752.732 0 745V14Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="9.04278"
              y1="-31.8863"
              x2="665.174"
              y2="255.481"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#015285" />
              <stop offset="1" stopColor="#015285" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        className="hero-line-shape"
        style={{ overflow: "hidden" }}
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true, amount: 0 }}
        transition={imageRevealTransition}
      >
        <motion.img
          src="/assets/images/slider/hero-shape.png"
          alt="Hero Shape"
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true, amount: 0 }}
          transition={imageRevealTransition}
        />
      </motion.div>
    </section>
  );
}
