"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeTransition = (delay = 0, duration = 0.8) => ({
  duration,
  delay,
  ease: "easeOut" as const,
});

const locations = [
  ["Frederick", "Thurmont", "Union Bridge"],
  ["Boonsboro", "Woodbine", "Buckeystown"],
  ["Jefferson", "Brunswick", "Loveton"],
  ["Ijamsville", "Walkersville", "Middletown"],
  ["Rocky Ridge", "Dickerson", "Damascus"],
  ["Sykesville", "Eldersburg", "Gaithersburg"],
  ["Germantown", "Montgomery Village", "Clarksburg"],
  ["Boyds", "New Market", "Mount Airy"],
  ["Silver Spring", "Urbana", "Myersville"],
  ["Hagerstown", "Emmitsburg", "Westminster"],
  ["Taneytown", "New Windsor", "Monrovia"],
  ["Adamstown", "Libertytown", "Burkittsville"],
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="wpo-blog-section section-padding pt-0">
      <div className="wpo-blog-wrap section-padding box-style">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0)}
                >
                  <i>
                    <img src="/assets/images/cleaning-icon.svg" alt="" />
                  </i>
                  Area We Serve
                </motion.span>
                <motion.h2
                  className="poort-text poort-in-right"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                  transition={fadeTransition(0.1)}
                >
                  Area We Serve
                </motion.h2>
              </div>
            </div>
          </div>

          <div className="wpo-service-areas">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-8 col-12">
                <motion.div
                  className="service-locations-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0, 1.2)}
                >
                  <div className="service-locations-list d-flex flex-wrap">
                    {locations.flat().map((location) => (
                      <div key={location} className="service-location-item">
                        <i className="ti-location-pin" />
                        <span>{location}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="col-lg-4 col-12">
                <motion.aside
                  className="service-map-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeInUp}
                  transition={fadeTransition(0.1, 1.4)}
                >
                  <div className="service-map-header">
                    <div className="service-map-header-text">
                      <h3>
                        Based In <span>Urbana, MD</span>
                      </h3>
                      <p>Serving your neighborhood with professional care.</p>
                    </div>
                    <div className="service-map-pin">
                      <i className="ti-location-pin" />
                    </div>
                  </div>
                  <div className="service-map-body">
                    <iframe
                      src="https://maps.google.com/maps?q=Urbana,+MD+21704&t=&z=11&ie=UTF8&iwloc=&output=embed"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Service area map centered on Urbana, MD"
                    />
                    <a
                      className="service-map-btn"
                      href="https://www.google.com/maps/search/Urbana,+MD+21704"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ti-location-pin" /> View On Google Maps
                    </a>
                  </div>
                </motion.aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
