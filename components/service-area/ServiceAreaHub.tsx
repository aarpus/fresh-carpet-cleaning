"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { serviceAreas } from "@/lib/serviceAreas";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardStyles = [
  "area-hub-card area-hub-card--blue",
  "area-hub-card area-hub-card--green",
  "area-hub-card area-hub-card--navy",
];

export default function ServiceAreaHub() {
  return (
    <section className="area-hub-section section-padding">
      <div className="container">
        <motion.div
          className="wpo-section-title text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          <span>
            <i>
              <img src="/assets/images/cleaning-icon.svg" alt="" />
            </i>
            we serve
          </span>
          <h2>Areas We Proudly Serve</h2>
          <p className="area-hub-lead">
            Fresh Clean Carpet Cleaning provides professional carpet, upholstery,
            and floor care throughout Frederick County and surrounding Maryland
            communities. Select your area below to learn about local service
            details.
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.slug}
              className="col-lg-4 col-md-6 col-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Link
                href={`/service-area/${area.slug}`}
                className={cardStyles[index]}
              >
                <div className="area-hub-card__image">
                  <img
                    src={area.hubImage}
                    alt={`${area.name}, ${area.state}`}
                  />
                </div>
                <div className="area-hub-card__body">
                  <span className="area-hub-card__badge">
                    {area.name}, {area.state}
                  </span>
                  <h3>Professional Carpet Cleaning in {area.name}</h3>
                  <p>{area.excerpt}</p>
                  <span className="area-hub-card__link">
                    View local details <i className="ti-arrow-top-right" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="area-hub-note"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>
            We also serve Thurmont, Middletown, Walkersville, Gaithersburg,
            Germantown, and many more communities.{" "}
            <Link href="/#service-areas">See the full service area list</Link> or{" "}
            <Link href="/contact">contact us</Link> to confirm coverage at your
            address.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
