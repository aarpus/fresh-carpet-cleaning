"use client";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>

          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
