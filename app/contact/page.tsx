import Breadcumb from "@/components/common/Breadcumb";
import ContactPageForm from "@/components/contact/ContactPageForm";

const officeInfo = [
  {
    icon: "fi flaticon-home-address",
    title: "address line",
    content: (
      <>
        14605 old Columbia pike Burtonsville
        <br />
        Md 20866
      </>
    ),
    active: false,
  },
  {
    icon: "fi flaticon-phone-call",
    title: "Phone Number",
    content: <>(240) 316-7748</>,
    active: true,
  },
  {
    icon: "fi flaticon-mail-1",
    title: "Address",
    content: <>info@totallyflooring.com</>,
    active: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcumb title="Contact us" />

      <section className="contact-page section-padding">
        <div className="container">
          <div className="office-info">
            <div className="row">
              {officeInfo.map((item) => (
                <div key={item.title} className="col col-lg-4 col-md-6 col-12">
                  <div
                    className={`office-info-item${item.active ? " active" : ""}`}
                  >
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className={item.icon} />
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-wrap">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="contact-left">
                  <h2>Get in touch</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    mattis faucibus odio feugiat arc dolor.
                  </p>
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.4929625954537!2d-76.945982!3d39.095245600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7db39443c9c75%3A0x820f665738d116b6!2s14605%20Old%20Columbia%20Pike%2C%20Burtonsville%2C%20MD%2020866%2C%20USA!5e0!3m2!1sen!2sin!4v1786530915671!5m2!1sen!2sin"
                      allowFullScreen
                      title="Office location map"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="contact-right">
                  <div className="title">
                    <h2>Fill Up The Form</h2>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <ContactPageForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
