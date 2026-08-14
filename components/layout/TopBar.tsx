import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-7 col-lg-8">
            <ul className="contact-info text-start">
              <li>
                <Link href="tel:+12403167748">
                  <i className="flaticon-phone"></i>
                  <span>(240) 316-7748</span>
                </Link>
              </li>

              {/* <li>
                <a href="mailto:support@freshclean.com">
                  <i className="ti-email"></i>
                  <span>support@freshclean.com</span>
                </a>
              </li> */}

              <li className="d-none d-lg-inline-flex">
                <i className="ti-location-pin"></i>
                <span>14605 old Columbia pike Burtonsville Md 20866</span>
              </li>
            </ul>
          </div>

          <div className="col-5 col-lg-4">
            <div className="contact-into justify-content-end">
              <ul className="social-media">
                <li>
                  <Link href="#">
                    <i className="flaticon-facebook-app-symbol"></i>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <i className="flaticon-linkedin"></i>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <i className="flaticon-camera"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
