import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Why Choose Us", href: "/about" },
  { label: "Reviews", href: "/about" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { label: "Upholstery Cleaning", href: "/services/upholstery-cleaning" },
  { label: "Tile & Grout Cleaning", href: "/services/tile-grout-cleaning" },
  {
    label: "Hardwood Floor Cleaning",
    href: "/services/hardwood-floor-cleaning",
  },
  { label: "Area Rug Cleaning", href: "/services" },
  { label: "Water Damage Restoration", href: "/services" },
];

const areaLinks = [
  { label: "Frederick", href: "/#service-areas" },
  { label: "Thurmont", href: "/#service-areas" },
  { label: "Middletown", href: "/#service-areas" },
  { label: "Gaithersburg", href: "/#service-areas" },
  { label: "Germantown", href: "/#service-areas" },
  { label: "View All Areas", href: "/#service-areas" },
];

const socialLinks = [
  { label: "Facebook", icon: "fa-facebook", href: "#" },
  { label: "Instagram", icon: "fa-instagram", href: "#" },
  { label: "YouTube", icon: "fa-youtube-play", href: "#" },
  { label: "Google", icon: "fa-google", href: "#" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-content">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="site-footer-brand">
                <Link href="/" className="site-footer-logo-wrap d-inline-block">
                  <img
                    src="/assets/images/logo.png"
                    alt="Cleanar Cleaning Services"
                    className="site-footer-logo"
                  />
                </Link>
                <p className="site-footer-desc">
                  The #1 carpet cleaning company in Frederick, MD. We bring your
                  carpet back to life!
                </p>
                <ul className="site-footer-contact-lines list-unstyled mb-0">
                  <li>
                    <Link
                      href="tel:+10000000000"
                      className="site-footer-contact-line"
                    >
                      <i className="fa fa-phone" aria-hidden="true" />
                      <span>(000) 000-0000</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:support@freshclean.com"
                      className="site-footer-contact-line"
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <span>support@freshclean.com</span>
                    </Link>
                  </li>
                </ul>
                <ul className="site-footer-social list-unstyled d-flex align-items-center flex-wrap gap-2 mt-4">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <Link href={social.href} aria-label={social.label}>
                        <i className={`fa ${social.icon}`} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <h4 className="site-footer-nav-title">Quick Links</h4>
              <ul className="site-footer-nav-links list-unstyled mb-0">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <h4 className="site-footer-nav-title">Services</h4>
              <ul className="site-footer-nav-links list-unstyled mb-0">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <h4 className="site-footer-nav-title">Service Areas</h4>
              <ul className="site-footer-nav-links list-unstyled mb-0">
                {areaLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer-bar">
          <div className="site-footer-bar-inner text-center text-lg-start">
            <p className="site-footer-bar-copy mb-0">
              &copy; 2026 Fresh Clean Carpet Cleaning
            </p>
            <div className="site-footer-bar-links">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
