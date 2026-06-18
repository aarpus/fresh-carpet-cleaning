import Link from "next/link";

export default function NotFound() {
  return (
    <section className="error-404-section section-padding mt-5">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="content clearfix">
              <div className="error">
                <img src="/assets/images/404.png" alt="Page not found" />
              </div>
              <div className="error-message">
                <h3>we&apos;re sorry page not found!</h3>
                <Link href="/" className="theme-btn">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
