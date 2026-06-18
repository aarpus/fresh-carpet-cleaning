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

const services = [
  {
    title: "Deep Carpet Cleaning",
    image: "/assets/images/service/service-6.png",
    text: "Hot water extraction removes embedded dirt, allergens, and everyday soil from wall-to-wall carpet throughout Frederick homes.",
  },
  {
    title: "Pet Stain Removal",
    image: "/assets/images/service/service-4.png",
    text: "Targeted treatments for pet accidents, odors, and recurring spots so your carpets stay fresh for the whole family.",
  },
  {
    title: "Area Rug Cleaning",
    image: "/assets/images/service/service-5.png",
    text: "Safe cleaning for Oriental, wool, synthetic, and decorative rugs with careful handling and thorough drying.",
  },
  {
    title: "Upholstery Cleaning",
    image: "/assets/images/service/service-1.png",
    text: "Revive sofas, sectionals, and dining chairs with fabric-safe cleaning that lifts stains and refreshes fibers.",
  },
];

const whyChoose = [
  {
    icon: "fa fa-star",
    title: "Experienced Technicians",
    text: "Trained professionals who know Frederick homes — from historic downtown properties to newer suburban builds.",
  },
  {
    icon: "fa fa-cogs",
    title: "State-of-the-Art Equipment",
    text: "Truck-mounted extraction systems deliver deeper cleaning power than rental or portable units.",
  },
  {
    icon: "fa fa-leaf",
    title: "Eco-Friendly Solutions",
    text: "Non-toxic products that are tough on dirt but safe for children, pets, and the environment.",
  },
  {
    icon: "fa fa-handshake-o",
    title: "Satisfaction Guarantee",
    text: "We stand behind our work with responsive follow-up and a commitment to results you can see and feel.",
  },
];

const gallery = [
  "/assets/images/work/image-1.jpg",
  "/assets/images/work/image-2.jpg",
  "/assets/images/work/image-3.jpg",
  "/assets/images/work/image-4.jpg",
  "/assets/images/work/image-5.jpg",
  "/assets/images/work/image-6.jpg",
  "/assets/images/choose/choose.png",
  "/assets/images/contact.png",
];

export default function FrederickAreaPage() {
  return (
    <div className="area-frederick">
      <div className="area-map-hero area-map-hero--tall box-style">
        <iframe
          src="https://maps.google.com/maps?q=Frederick,+MD&t=&z=12&ie=UTF8&iwloc=&output=embed"
          title="Frederick MD map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="area-map-hero__label">FREDERICK, MD</div>
      </div>

      <section className="section-padding pt-0">
        <div className="container text-center">
          <motion.h2
            className="area-page-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            Fresh Clean Carpet Cleaning – Frederick, MD
          </motion.h2>
          <motion.p
            className="area-page-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0.1)}
          >
            Professional Carpet Cleaning Services
          </motion.p>
        </div>
      </section>

      <section className="section-padding pt-0">
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
                <h3 className="area-section-heading">
                  Your Local Carpet Cleaning Experts in Frederick
                </h3>
                <p className="area-body-text">
                  Frederick homeowners trust Fresh Clean for reliable, thorough
                  carpet care. We understand the mix of busy family life, pets,
                  and Maryland seasons that wear on your floors — and we deliver
                  results that make your home feel renewed from the ground up.
                </p>
                <p className="area-body-text">
                  Whether you need a one-time deep clean before guests arrive or
                  regular maintenance for high-traffic rooms, our team shows up
                  on time, treats your property with respect, and leaves carpets
                  cleaner, fresher, and faster-drying than DIY methods ever
                  could.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  "/assets/images/before-after/after-img.png",
                  "/assets/images/before-after/before-img.png",
                ].map((src, i) => (
                  <motion.div
                    key={src}
                    className="col-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={fadeTransition(i * 0.1)}
                  >
                    <div className="area-media-card">
                      <img src={src} alt="Carpet cleaning in Frederick MD" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding area-band-light">
        <div className="container">
          <motion.h2
            className="area-section-title text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            Our Carpet Cleaning Services
          </motion.h2>
          <div className="row g-4 mt-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="col-lg-3 col-md-6 col-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeInUp}
                transition={fadeTransition(index * 0.08)}
              >
                <div className="area-service-card">
                  <img src={service.image} alt={service.title} />
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
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
            Why Choose Fresh Clean in Frederick?
          </motion.h2>
          <div className="row g-4 mt-2">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                className="col-lg-3 col-md-6 col-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeInUp}
                transition={fadeTransition(index * 0.08)}
              >
                <div className="area-icon-box text-center">
                  <div className="area-icon-box__icon">
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            <h2 className="area-section-title">
              Serving Frederick, MD and Surrounding Areas
            </h2>
            <p className="area-body-text area-body-text--center">
              From downtown Frederick to Ballenger Creek, Spring Ridge, and
              nearby communities, we are proud to bring professional carpet
              cleaning to your neighborhood. Call{" "}
              <Link href="tel:+10000000000">(000) 000-0000</Link> for a free
              estimate.
            </p>
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
          <div className="area-gallery-grid mt-4">
            {gallery.map((src, index) => (
              <motion.div
                key={src}
                className={`area-gallery-grid__item area-gallery-grid__item--${(index % 4) + 1}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                transition={fadeTransition(index * 0.04)}
              >
                <img src={src} alt={`Fresh Clean work ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
