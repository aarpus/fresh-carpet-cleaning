"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const partners = [
  { id: 1, src: "/assets/images/partners/1.png", alt: "Partner" },
  { id: 2, src: "/assets/images/partners/2.png", alt: "Partner" },
  { id: 3, src: "/assets/images/partners/3.png", alt: "Partner" },
  { id: 4, src: "/assets/images/partners/4.png", alt: "Partner" },
  { id: 5, src: "/assets/images/partners/5.png", alt: "Partner" },
  { id: 6, src: "/assets/images/partners/2.png", alt: "Partner" },
];

export default function Partners() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [loopWidth, setLoopWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      // Track is duplicated; scroll one half for a seamless loop.
      setLoopWidth(trackRef.current.scrollWidth / 2);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const slides = [...partners, ...partners];

  return (
    <section className="partners-section section-padding">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Featured by popular companies in the industry
      </motion.h2>

      <div className="container" style={{ overflow: "hidden" }}>
        <motion.ul
          ref={trackRef}
          className="partners-marquee"
          style={{
            display: "flex",
            width: "max-content",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
          animate={loopWidth ? { x: [0, -loopWidth] } : undefined}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {slides.map((partner, index) => (
            <li
              key={`${partner.id}-${index}`}
              style={{ flex: "0 0 auto", width: "clamp(140px, 20vw, 220px)" }}
            >
              <div>
                <img src={partner.src} alt={partner.alt} />
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
