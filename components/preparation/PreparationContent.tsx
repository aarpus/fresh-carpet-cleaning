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
      "We accept all major credit and debit cards, personal checks, and cash. Payment is due upon completion of service unless other arrangements have been made in advance.",
    ],
  },
  {
    title: "Preparation Before Our Arrival",
    items: [
      "Please reserve a parking spot as close to the entrance as possible for our service vehicle and hoses.",
      "Let us know about any furniture with weak legs, loose tops, or delicate finishes before we begin.",
      "Vacuum high-traffic areas and under movable furniture when possible — this helps us focus on deep cleaning.",
      "Pin up full-length draperies and furniture skirts at least 6 inches off the carpet.",
      "We do not move heavy furniture such as china cabinets, pianos, or large electronics, but we will clean around them using protective blocks and tabs.",
      "Please keep pets and children away from hoses, equipment, and wet carpet during service.",
    ],
  },
  {
    title: "Before-and-After Documentation",
    paragraphs: [
      "Our technicians may take before-and-after photos to document results and ensure quality. If you would like copies for your records, let us know and we can share them by email after your appointment.",
    ],
  },
  {
    title: "Pet Safety & Children Safety",
    items: [
      "For everyone's safety, please keep pets in a separate room or secured area during cleaning.",
      "Keep children away from hoses, doorways, and our truck-mounted equipment while we are working.",
      "Wet carpet and hard-floor transitions can be slippery — please use caution until areas are fully dry.",
    ],
  },
  {
    title: "After Our Service",
    items: [
      "We provide a complimentary spotting bottle for minor spills between professional cleanings.",
      "Allow 12–24 hours for carpets to dry completely before moving furniture back into place.",
      "Light carpet ripples or bumps may appear after cleaning but typically settle as fibers dry.",
      "Use caution when stepping from damp carpet onto tile, hardwood, or other hard surfaces.",
      "Keep shoe soles clean when walking on freshly cleaned carpet.",
      "Running your A/C or fans can help speed up drying time.",
    ],
  },
];

const rightColumn: PreparationBlock[] = [
  {
    title: "Gratuities",
    paragraphs: [
      "Tips are always appreciated by our technicians but are never expected. If you are satisfied with your service, a gratuity is a wonderful way to say thank you.",
    ],
  },
  {
    title: "Upon Our Arrival",
    items: [
      "We will walk through your home with you to review the work order and confirm all areas to be cleaned.",
      "Please point out specific stains, high-traffic zones, or areas of concern so we can treat them properly.",
      "Ask us about reapplying carpet protector to help guard against future spills and soiling.",
      "We are happy to provide estimates for additional services such as upholstery, tile, or hardwood cleaning.",
    ],
  },
  {
    title: "Cleaning Products",
    paragraphs: [
      "Fresh Clean uses professional-grade, environmentally responsible cleaning solutions that are effective on dirt, stains, and odors while being safe for families and pets. Safety Data Sheets are available upon request.",
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
      "Keep driveways, sidewalks, and parking areas clear of snow, ice, and obstacles so we can access your home safely.",
      "Extreme cold (below 32°F) or severe weather may affect scheduling — we will contact you if a reschedule is needed.",
      "Ensure gate codes, building access, and contact numbers are available on the day of your appointment.",
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
              <img src="/assets/images/cleaning-icon.svg" alt="" />
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
          Thank you for choosing Fresh Clean Carpet Cleaning. A little preparation
          before we arrive helps us deliver the best results safely and
          efficiently. If you have any questions, call us at{" "}
          <Link href="tel:+13016828200">(301) 682-8200</Link> or email{" "}
          <Link href="mailto:support@freshclean.com">support@freshclean.com</Link>.
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
            alt="Fresh Clean technician preparing for carpet cleaning service"
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
