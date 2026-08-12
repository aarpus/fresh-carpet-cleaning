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
    text: "Thorough carpet cleaning helps lift away embedded dirt, everyday buildup, and stubborn spots from wall-to-wall carpeting throughout Frederick homes.",
  },
  {
    title: "Pet Stain Removal",
    image: "/assets/images/service/service-4.png",
    text: "Targeted cleaning for pet accidents, stains, and lingering odors to help your carpets feel fresh and ready for everyday family life.",
  },
  {
    title: "Area Rug Cleaning",
    image: "/assets/images/service/service-5.png",
    text: "Careful cleaning for Oriental, wool, synthetic, and decorative rugs, with an approach suited to the material and condition of each rug.",
  },
  {
    title: "Upholstery Cleaning",
    image: "/assets/images/service/service-1.png",
    text: "Refresh sofas, sectionals, and dining chairs with careful upholstery cleaning that helps lift dirt, stains, and everyday buildup from fabric.",
  },
];

const whyChoose = [
  {
    icon: "fa fa-star",
    title: "Experienced Technicians",
    text: "Our team takes the time to understand your floors and provide careful, dependable cleaning for Frederick homes.",
  },
  {
    icon: "fa fa-cogs",
    title: "Professional Cleaning Equipment",
    text: "We use professional equipment and the right cleaning methods to tackle everyday dirt, stains, and buildup effectively.",
  },
  {
    icon: "fa fa-leaf",
    title: "Thoughtful Cleaning Solutions",
    text: "We select cleaning products and methods with your flooring, furniture, and home in mind.",
  },
  {
    icon: "fa fa-handshake-o",
    title: "Service You Can Count On",
    text: "From your first call to the final walkthrough, we focus on clear communication, careful work, and a service experience you can feel good about.",
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

      <section className="section-padding pt-0 mt-4">
        <div className="container text-center">
          <motion.h2
            className="area-page-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0)}
          >
            Totally Flooring – Burtonsville, MD
          </motion.h2>
          <motion.p
            className="area-page-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={fadeTransition(0.1)}
          >
            Professional Flooring Cleaning Services
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
                  Frederick homeowners can count on Totally Flooring for
                  dependable, thorough carpet cleaning. We understand how family
                  life, pets, everyday traffic, and changing Maryland seasons
                  can take a toll on your floors, and we’re here to help bring
                  back a cleaner, fresher feel.
                </p>
                <p className="area-body-text">
                  WWhether you need a one-time deep clean before guests arrive
                  or regular care for busy areas of your home, our team works
                  carefully, respects your space, and pays attention to the
                  details that make a difference.
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
            Why Choose Totally Flooring in Frederick?
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
              <Link href="tel:+12403167748">(240) 316-7748</Link> for a free
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
                <img src={src} alt={`Totally Flooring work ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
