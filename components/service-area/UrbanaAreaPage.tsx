"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeTransition = (delay = 0) => ({
  duration: 0.7,
  delay,
  ease: "easeOut" as const,
});

const processSteps = [
  {
    step: 1,
    title: "Pre-Inspection",
    text: "We walk through your Urbana home, note traffic patterns, stains, and fabric types, and confirm your service plan.",
  },
  {
    step: 2,
    title: "Pre-Treatment",
    text: "Targeted pre-spray loosens embedded soil and breaks down spots before the main cleaning pass.",
  },
  {
    step: 3,
    title: "Hot Water Extraction",
    text: "Truck-mounted steam cleaning flushes dirt and allergens from carpet fibers for a deep, restorative clean.",
  },
  {
    step: 4,
    title: "Neutralization Rinse",
    text: "A balanced rinse removes cleaning residue so carpets feel soft and stay cleaner longer.",
  },
  {
    step: 5,
    title: "Grooming & Raking",
    text: "Carpet grooming lifts the pile for an even appearance and faster, more uniform drying.",
  },
  {
    step: 6,
    title: "Post-Cleaning Inspection",
    text: "We review results with you and share simple after-care tips before we wrap up.",
  },
];

const specialties = [
  "Wall-to-wall carpet cleaning for Urbana residences",
  "Oriental and area rug pickup & delivery available",
  "Upholstery and sectional cleaning",
  "Tile & grout cleaning for kitchens and baths",
  "Pet odor and stain treatment",
  "Carpet protector reapplication",
];

const whyChoose = [
  {
    icon: "flaticon-user",
    title: "Experienced & Certified Technicians",
    text: "Skilled pros who serve Urbana, the Villages of Urbana, and nearby Frederick County daily.",
  },
  {
    icon: "flaticon-cleaning",
    title: "Safe & Eco-Friendly Solutions",
    text: "Family-safe products that deliver powerful results without harsh chemical odors.",
  },
  {
    icon: "flaticon-handshake",
    title: "Competitive Rates & Free Estimates",
    text: "Upfront, honest pricing with no hidden fees — request your free quote anytime.",
  },
];

const gallery = [
  "/assets/images/work/image-2.jpg",
  "/assets/images/work/image-3.jpg",
  "/assets/images/work/image-4.jpg",
  "/assets/images/work/image-5.jpg",
  "/assets/images/service/service-2.png",
  "/assets/images/service/service-3.png",
];

export default function UrbanaAreaPage() {
  return (
    <div className="area-urbana">
      <div className="area-map-hero box-style">
        <iframe
          src="https://maps.google.com/maps?q=Urbana,+MD+21704&t=&z=12&ie=UTF8&iwloc=&output=embed"
          title="Urbana MD map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="area-map-hero__label area-map-hero__label--compact">
          URBANA, MD
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            <h2 className="area-urbana-headline">
              Healthy Home Revival Starts Here: Fresh Clean in Urbana, Maryland
            </h2>
          </motion.div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0.1)}
              >
                <h3 className="area-section-heading">
                  Trusted carpet cleaning in Urbana — including the Villages of
                  Urbana
                </h3>
                <p className="area-body-text">
                  Urbana families deserve carpets that look great, smell fresh,
                  and contribute to a healthier indoor environment. Fresh Clean
                  brings professional truck-mounted cleaning directly to your
                  door with flexible scheduling that fits busy Maryland
                  lifestyles.
                </p>
                <p className="area-body-text">
                  From new construction homes to established neighborhoods, we
                  tailor every visit to your floors, furniture, and family needs
                  — with clear communication from quote to completion.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="area-video-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0.2)}
              >
                <iframe
                  src="https://www.youtube.com/embed/1Bsgv6DnTiI"
                  title="Fresh Clean carpet cleaning"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding area-band-green">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            <h2 className="area-section-title">
              Our Carpet Cleaning Process in Urbana, MD
            </h2>
            <p className="area-body-text area-body-text--center">
              A proven six-step method for consistent, high-quality results
              every visit.
            </p>
          </motion.div>

          <div className="row g-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="col-lg-4 col-md-6 col-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeInUp}
                transition={fadeTransition(index * 0.06)}
              >
                <div className="area-process-step">
                  <span className="area-process-step__num">{step.step}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={fadeTransition(0)}
              >
                <h2 className="area-section-heading">We Also Specialize In:</h2>
                <ul className="area-check-list">
                  {specialties.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <div className="area-stack-images">
                <motion.img
                  src="/assets/images/bottles-with-cleansers.png"
                  alt="Cleaning products"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0.1)}
                />
                <motion.img
                  src="/assets/images/work/image-1.jpg"
                  alt="Technician at work"
                  className="area-stack-images__overlay"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0.2)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <motion.h2
            className="area-section-title text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            Why Choose Fresh Clean in Urbana, Maryland?
          </motion.h2>
          <div className="row g-4 mt-2">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                className="col-lg-4 col-md-6 col-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeInUp}
                transition={fadeTransition(index * 0.08)}
              >
                <div className="area-flaticon-box">
                  <i className={item.icon} aria-hidden="true" />
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.div
            className="area-urbana-cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            <h2>Breathe New Life Into Your Urbana Home!</h2>
            <p className="area-urbana-cta__phone">
              CALL <Link href="tel:+10000000000">(000) 000-0000</Link> TODAY FOR
              A FREE QUOTE!
            </p>
            <p>We look forward to hearing from you.</p>
            <Link href="/appointment" className="theme-btn-s2">
              Book Online
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding area-band-light pb-5">
        <div className="container">
          <motion.h2
            className="area-section-title text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            See our work
          </motion.h2>
          <div className="row g-3 mt-3">
            {gallery.map((src, index) => (
              <motion.div
                key={src}
                className="col-lg-4 col-md-6 col-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                transition={fadeTransition(index * 0.05)}
              >
                <div className="area-gallery-simple">
                  <img src={src} alt={`Urbana cleaning work ${index + 1}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
