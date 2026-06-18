import Breadcumb from "@/components/common/Breadcumb";
import ContactPageForm from "@/components/contact/ContactPageForm";

const officeInfo = [
  {
    icon: "fi flaticon-home-address",
    title: "address line",
    content: (
      <>
        Frederick, MD, USA
        <br />
        MD 00000,USA
      </>
    ),
    active: false,
  },
  {
    icon: "fi flaticon-phone-call",
    title: "Phone Number",
    content: (
      <>
        (000) 000-0000
        <br />
        (000) 000-0000
      </>
    ),
    active: true,
  },
  {
    icon: "fi flaticon-mail-1",
    title: "Address",
    content: (
      <>
        contact@freshclean.com
        <br />
        info@freshclean.com
      </>
    ),
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
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
