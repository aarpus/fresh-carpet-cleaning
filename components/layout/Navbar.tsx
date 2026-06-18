import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="wpo-site-header">
      <nav className="navigation navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Mobile Menu */}
            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
              <div className="mobail-menu">
                <button type="button" className="navbar-toggler open-btn">
                  <span className="sr-only">Toggle navigation</span>

                  <span className="icon-bar first-angle"></span>
                  <span className="icon-bar middle-angle"></span>
                  <span className="icon-bar last-angle"></span>
                </button>
              </div>
            </div>

            {/* Logo */}
            <div className="col-lg-2 col-md-6 col-6">
              <div className="navbar-header">
                <Link href="/" className="navbar-brand">
                  <Image
                    src="/assets/images/logo.png"
                    alt="Fresh Clean"
                    width={240}
                    height={100}
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="col-lg-7 col-md-1 col-1">
              <div
                id="navbar"
                className="collapse navbar-collapse navigation-holder justify-content-center"
              >
                <button className="menu-close">
                  <i className="ti-close"></i>
                </button>

                <ul className="nav navbar-nav mb-2 mb-lg-0">
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="/services">Our Services</Link>

                    <ul className="sub-menu">
                      <li>
                        <Link href="/services/carpet-cleaning">
                          Carpet Cleaning
                        </Link>
                      </li>

                      <li>
                        <Link href="/services/upholstery-cleaning">
                          Upholstery Cleaning
                        </Link>
                      </li>

                      <li>
                        <Link href="/services/tile-grout-cleaning">
                          Tile & Grout Cleaning
                        </Link>
                      </li>

                      <li>
                        <Link href="/services/odor-control">Odor Control</Link>
                      </li>

                      <li>
                        <Link href="/services/hardwood-floor-cleaning">
                          Hardwood Floor Cleaning
                        </Link>
                      </li>

                      <li>
                        <Link href="/services/carpet-repair">
                          Carpet Repair Services
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/preparation">Preparation</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="/about">About Us</Link>

                    <ul className="sub-menu">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>

                      <li>
                        <Link href="/reviews">Reviews</Link>
                      </li>

                      <li>
                        <Link href="/service-area">Service Area</Link>
                      </li>

                      <li>
                        <Link href="/why-choose-us">Why Choose Us</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/service-area">We Serve Area</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/service-area/myersville-md">
                          Myersville MD
                        </Link>
                      </li>

                      <li>
                        <Link href="/service-area/urbana-md">Urbana MD</Link>
                      </li>

                      <li>
                        <Link href="/service-area/frederick-md">
                          Frederick MD
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Button */}
            <div className="col-lg-3 col-md-2 col-2">
              <div className="header-right">
                <div className="close-form">
                  <Link href="/appointment" className="theme-btn">
                    Book Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
