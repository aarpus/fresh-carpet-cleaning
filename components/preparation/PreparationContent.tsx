"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeTransition = (delay = 0) => ({
  duration: 0.7,
  delay,
  ease: "easeOut" as const,
});

type PreparationBlock = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

const leftColumn: PreparationBlock[] = [
  {
    title: "Payment Options",
    paragraphs: [
      "We accept major credit and debit cards, personal checks, and cash. Payment is due when your service is completed unless other arrangements have been made with Totally Flooring in advance.",
    ],
  },
  {
    title: "Preparation Before Our Arrival",
    items: [
      "To help your appointment go smoothly and give our team the best access to your floors, please keep the following in mind:",
      "•	Please reserve a parking spot as close to the entrance as possible for our service vehicle and equipment.",
      "•	Let us know about any delicate or damaged furniture before we begin, including loose legs, tops, or fragile finishes.",
      "•	Vacuum high-traffic areas and under movable furniture when possible so we can focus more of our time on deep cleaning.",
      "•	Pin up full-length draperies and furniture skirts at least 6 inches above the carpet.",
      "•  We do not move heavy items such as pianos, china cabinets, or large electronics, but we’ll clean carefully around them.",
      "•	Keep children and pets away from equipment and damp carpet during the service for everyone's safety",
    ],
  },
  {
    title: "Before-and-After Documentation",
    paragraphs: [
      "Our technicians may take before-and-after photos to document the work and help ensure the results meet our standards. If you’d like a copy of the photos for your records, just let us know and we’ll be happy to share them with you after your appointment",
    ],
  },
  {
    title: "Pet Safety & Children Safety",
    items: [
      "•	Please keep pets in a separate room or secure area while our team is working.",
      "•	Keep children away from hoses, equipment, doorways, and work areas during the cleaning service.",
      "•	Use caution around damp carpet and transitions between flooring surfaces until everything is fully dry.",
    ],
  },
  {
    title: "After Our Service",
    items: [
      "We’ll provide helpful care instructions after your cleaning so you know how to keep your carpets looking their best between professional services.",
      "Allow 12–24 hours for carpets to dry completely, depending on airflow, humidity, and the amount of cleaning required.",
      "Light ripples or bumps may appear while the carpet is damp and will typically settle as it dries.",
      "Use care when moving between damp carpet and hard flooring, such as tile or hardwood, as surfaces may be slippery.",
      "Keep shoes clean when walking on freshly cleaned carpet to help prevent new dirt from being tracked in.",
      "Run your A/C, fans, or open windows when appropriate to improve airflow and help speed up drying.",
    ],
  },
];

const rightColumn: PreparationBlock[] = [
  {
    title: "Gratuities",
    paragraphs: [
      "Tips are always appreciated but never expected. If you’re happy with the service provided by our team, a gratuity is a thoughtful way to show your appreciation",
    ],
  },
  {
    title: "Upon Our Arrival",
    items: [
      "We’ll walk through the space with you to review the service and confirm the areas you’d like us to clean. Point out any specific stains, high-traffic areas, or concerns so our team can give them the attention they need",
      "Please point out specific stains, high-traffic zones, or areas of concern so we can treat them properly.",
      "Interested in other services? We can also provide estimates for upholstery, tile and grout, hardwood, or other flooring services",
    ],
  },
  {
    title: "Cleaning Products",
    paragraphs: [
      "Totally Flooring uses carefully selected professional cleaning solutions suited to the surfaces we clean. Our products are chosen to effectively tackle everyday dirt, stains, and odors while being appropriate for use in homes and businesses. Safety Data Sheets are available upon request",
    ],
  },
  {
    title: "Protecting Delicate Items",
    paragraphs: [
      "Please relocate valuable, fragile, or unstable items before our arrival. While we take great care, moving delicate décor, electronics, or heirlooms in advance helps protect your belongings.",
    ],
  },
  {
    title: "Parking, Weather & Scheduling",
    items: [
      "Please keep driveways, walkways, and parking areas clear of snow, ice, and other obstacles so our team can safely access your property.",
      "Severe weather or extreme temperatures may affect your appointment. If conditions make it unsafe to travel or complete the service, we’ll contact you to discuss rescheduling.",
      "Please have any gate codes, building access information, and current contact details available on the day of your appointment so our team can reach you without delays.",
    ],
  },
];

function PreparationBlockCard({
  block,
  index,
}: {
  block: PreparationBlock;
  index: number;
}) {
  return (
    <motion.div
      className="preparation-block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeInUp}
      transition={fadeTransition(index * 0.05)}
    >
      <h3>{block.title}</h3>
      {block.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {block.items && (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function PreparationContent() {
  return (
    <section className="preparation-section section-padding">
      <div className="container">
        <motion.div
          className="wpo-section-title text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={fadeTransition(0)}
        >
          <span>
            <i>
              <img src="/assets/images/cleaning-icon.png" alt="" />
            </i>
            preparation
          </span>
          <h2>Preparations prior to our visit</h2>
        </motion.div>

        <motion.p
          className="preparation-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={fadeTransition(0.1)}
        >
          Thank you for choosing Totally Flooring Carpet Cleaning. A little
          preparation before we arrive helps us deliver the best results safely
          and efficiently. If you have any questions, call us at{" "}
          <Link href="tel:+12403167748">(240) 316-7748</Link> or email{" "}
          <Link href="mailto:info@totallyflooring.com">
            info@totallyflooring.com
          </Link>
          .
        </motion.p>

        <motion.div
          className="preparation-hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={fadeTransition(0.15)}
        >
          <img
            src="/assets/images/choose/choose.png"
            alt="Totally Flooring technician preparing for flooring cleaning service"
          />
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {leftColumn.map((block, index) => (
                <PreparationBlockCard
                  key={block.title}
                  block={block}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {rightColumn.map((block, index) => (
                <PreparationBlockCard
                  key={block.title}
                  block={block}
                  index={index + leftColumn.length}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="preparation-closing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={fadeTransition(0.2)}
        >
          <p>
            Thank you for your cooperation — it enables us to provide you with
            the best service possible. We look forward to serving you!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
