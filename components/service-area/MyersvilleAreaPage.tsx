"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeTransition = (delay = 0) => ({
  duration: 0.7,
  delay,
  ease: "easeOut" as const,
});

const stats = [
  { value: "15+", label: "Years serving Frederick County" },
  { value: "2,500+", label: "Homes cleaned locally" },
  { value: "100%", label: "Satisfaction focused service" },
];

const localServices = [
  {
    title: "Whole-Home Carpet Refresh",
    text: "Ideal for Myersville ranchers, colonials, and multi-level homes needing a full reset.",
  },
  {
    title: "Pet-Friendly Deep Cleaning",
    text: "Extra attention to mudroom paths, pet beds, and accident-prone areas common in country living.",
  },
  {
    title: "Seasonal Allergen Removal",
    text: "Remove pollen, dust, and tracked-in debris that builds up between Maryland seasons.",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    text: "Prepare a home for new owners or refresh carpets before listing your Myersville property.",
  },
];

const nearbyTowns = [
  "Frederick",
  "Middletown",
  "Walkersville",
  "Boonsboro",
  "Burkittsville",
  "Knoxville",
];

const testimonials = [
  {
    quote:
      "Fresh Clean did an amazing job on our living room and stairs. Friendly team, fair price, and carpets dried faster than we expected.",
    name: "Sarah M.",
    area: "Myersville homeowner",
  },
  {
    quote:
      "We have two dogs and thought our carpets were beyond saving. They look and smell brand new. Highly recommend to anyone in the area.",
    name: "James & Linda T.",
    area: "Myersville, MD",
  },
];

export default function MyersvilleAreaPage() {
  return (
    <div className="area-myersville">
      <section className="area-myersville-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInLeft}
                transition={fadeTransition(0)}
              >
                <span className="area-myersville-hero__eyebrow">
                  Myersville, Maryland
                </span>
                <h1>Small-Town Homes Deserve Big-City Clean</h1>
                <p>
                  Fresh Clean Carpet Cleaning proudly serves Myersville with
                  personalized carpet and upholstery care — the kind of
                  attentive, neighborly service you expect from a local team
                  that knows Frederick County.
                </p>
                <div className="area-myersville-hero__actions">
                  <Link href="/appointment" className="theme-btn-s2">
                    Schedule Service
                  </Link>
                  <Link href="tel:+10000000000" className="theme-btn-s3">
                    (000) 000-0000
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="area-myersville-hero__visual"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0.15)}
              >
                <img
                  src="/assets/images/work/image-5.jpg"
                  alt="Carpet cleaning in Myersville MD"
                />
                <div className="area-myersville-hero__pin">
                  <i className="ti-location-pin" /> Serving Myersville &amp;
                  nearby
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="area-myersville-stats">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="col-lg-4 col-md-4 col-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={fadeTransition(index * 0.08)}
              >
                <div className="area-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.h2
            className="area-section-title text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            Carpet Care Built for Myersville Living
          </motion.h2>
          <div className="row g-4 mt-2">
            {localServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="col-lg-6 col-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeInUp}
                transition={fadeTransition(index * 0.08)}
              >
                <div className="area-myersville-service">
                  <span className="area-myersville-service__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding area-band-navy">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0)}
              >
                <h2 className="area-section-heading area-section-heading--light">
                  Nearby Communities We Reach From Myersville
                </h2>
                <p className="area-body-text area-body-text--light">
                  Based in Frederick County, our vans regularly travel through
                  Myersville and surrounding towns. If you are close by, we can
                  almost certainly help.
                </p>
                <ul className="area-town-list">
                  {nearbyTowns.map((town) => (
                    <li key={town}>
                      <i className="ti-location-pin" /> {town}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="col-lg-7">
              <motion.div
                className="area-myersville-map"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0.15)}
              >
                <iframe
                  src="https://maps.google.com/maps?q=Myersville,+MD&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  title="Myersville MD service map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.h2
            className="area-section-title text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            What Myersville Neighbors Say
          </motion.h2>
          <div className="row g-4 mt-2">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                className="col-lg-6 col-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeInUp}
                transition={fadeTransition(index * 0.1)}
              >
                <blockquote className="area-quote-card">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.area}</span>
                  </footer>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 pb-5">
        <div className="container">
          <motion.div
            className="area-myersville-banner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            <div>
              <h2>Ready for cleaner carpets in Myersville?</h2>
              <p>
                Book online in minutes or call for a free estimate. Same-week
                appointments often available.
              </p>
            </div>
            <Link href="/appointment" className="theme-btn">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
