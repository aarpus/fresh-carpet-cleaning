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
    text: "We walk through your Urbana home with you, check the carpet’s condition, note stains and high-traffic areas, and confirm what needs to be cleaned.",
  },
  {
    step: 2,
    title: "Pre-Treatment",
    text: "We apply the appropriate pre-treatment to help loosen dirt, buildup, and spots before the main cleaning begins.",
  },
  {
    step: 3,
    title: "Hot Water Extraction",
    text: "Our cleaning process uses hot water extraction to lift dirt and buildup from deep within the carpet fibers, leaving them thoroughly cleaned and refreshed.",
  },
  {
    step: 4,
    title: "Rinse & Residue Removal",
    text: "We rinse the carpet to help remove loosened dirt and cleaning residue, leaving the fibers feeling clean and refreshed.",
  },
  {
    step: 5,
    title: "Grooming & Drying",
    text: "We groom the carpet to help restore the appearance of the fibers and encourage more even drying.",
  },
  {
    step: 6,
    title: "Post-Cleaning Inspection",
    text: "Before we leave, we review the finished areas with you and share simple after-care tips to help keep your carpets looking their best.",
  },
];

const specialties = [
  "Wall-to-wall carpet cleaning for Urbana homes",
  "Oriental and area rug cleaning with pickup and delivery",
  "Upholstery and sectional cleaning",
  "Tile and grout cleaning for kitchens and bathrooms",
  "Pet stain and odor treatment",
  "Carpet protector application and reapplication",
];

const whyChoose = [
  {
    icon: "flaticon-user",
    title: "Experienced & Caring Technicians",
    text: "Our team takes the time to understand your floors and provide careful, dependable service throughout Urbana and the surrounding area.",
  },
  {
    icon: "flaticon-clock",
    title: "Thoughtful Cleaning Solutions",
    text: "We choose cleaning methods and products based on your flooring and its condition, with your home and belongings in mind.",
  },
  {
    icon: "flaticon-handshake",
    title: "Competitive Pricing & Free Estimates",
    text: "Know what to expect before we begin. Request a free estimate and get straightforward pricing with no unnecessary surprises",
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
              Healthy Home Revival Starts Here: Totally Flooring in Urbana,
              Maryland
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
                  Trusted Carpet Cleaning in Urbana — Including the Villages of
                  Urbana
                </h3>
                <p className="area-body-text">
                  Totally Flooring provides professional carpet cleaning
                  throughout Urbana, including the Villages of Urbana. We help
                  homeowners freshen up carpets affected by everyday dirt,
                  spills, stains, and foot traffic, with convenient scheduling
                  that works around your routine.
                </p>
                <p className="area-body-text">
                  From newer homes to established neighborhoods, we take the
                  time to understand your floors and the areas that need
                  attention. You’ll get straightforward communication from your
                  initial quote through the completion of your service.
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
                <img
                  src="/assets/images/service-area/urbana-md/11.png"
                  alt="Totally Flooring carpet cleaning"
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
              Our Flooring Cleaning Process in Urbana, MD
            </h2>
            <p className="area-body-text area-body-text--center">
              A proven process for consistent, high-quality results every visit.
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
                  src="/assets/images/service-area/urbana-md/2.png"
                  alt="Cleaning products"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0.1)}
                />
                <motion.img
                  src="/assets/images/service-area/urbana-md/3.png"
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
            Why Choose Totally Flooring in Urbana, Maryland?
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
              CALL <Link href="tel:+12403167748">(240) 316-7748</Link> TODAY FOR
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
