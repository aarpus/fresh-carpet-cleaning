"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeTransition = (delay = 0) => ({
  duration: 0.8,
  delay,
  ease: "easeOut" as const,
});

function StatCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
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
      {suffix}
    </span>
  );
}

const stats = [
  { target: 25, suffix: "", label: "Years of Experience", delay: 0.1 },
  { target: 75, suffix: "k", label: "Satisfied Clients", delay: 0.2 },
  { target: 50, suffix: "", label: "Team Members", delay: 0.3 },
  { target: 85, suffix: "", label: "Customer Retention Rate", delay: 0.4 },
];

export default function FunFact() {
  return (
    <section className="fanfuct-section">
      <div className="container">
        <div className="funfact-wrap">
          <div className="top-content">
            <div className="title">
              <h3 className="splittext-line">
                &ldquo;Customer satisfaction is at the heart of everything we
                do.&rdquo;
              </h3>
            </div>
          </div>
          <div className="row">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="col col-lg-3 col-sm-6 col-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={fadeTransition(stat.delay)}
              >
                <div className="item">
                  <h2>
                    <StatCounter target={stat.target} suffix={stat.suffix} />
                  </h2>
                  <h3>{stat.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
