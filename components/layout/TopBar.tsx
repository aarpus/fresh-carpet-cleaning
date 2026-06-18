import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-8 col-12">
            <ul className="contact-info">
              <li>
                <a href="tel:+10000000000">
                  <i className="flaticon-phone"></i>
                  <span>(000) 000-0000</span>
                </a>
              </li>

              <li>
                <a href="mailto:support@freshclean.com">
                  <i className="ti-email"></i>
                  <span>support@freshclean.com</span>
                </a>
              </li>

              <li>
                <i className="ti-location-pin"></i>
                <span>Frederick, MD</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-12">
            <div className="contact-into">
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
