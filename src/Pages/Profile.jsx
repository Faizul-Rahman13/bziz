import React from "react";

function Profile() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Rajaram Sharma - Sales Executive",
          text: "Check out Rajaram Sharma's professional profile",
          url: "https://rajaram.bziz.in",
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert(
        "Web Share API not supported in your browser. You can manually share this page."
      );
    }
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Rajaram Sharma
ORG:Mitait Automations
TITLE:Sales Executive
TEL;TYPE=CELL:+919876543210
EMAIL:rajaram@mitait.com
URL:https://rajaram.bziz.in
ADR;TYPE=WORK:;;#123, Tech Park, Whitefield;Bengaluru;;560066;India
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Rajaram Sharma.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert("Contact saved successfully!");
  };

  return (
    <>
      <div className="profile-container ">
        {/* Profile Header */}
        <div className="profile-header">
          <button className="share-btn" onClick={handleShare}>
            <i className="fas fa-share-alt"></i>
          </button>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <h1 className="profile-name">Rajaram Sharma</h1>
          <p className="profile-title">Sales Executive</p>
          <p className="profile-company">
            <i className="fas fa-building"></i> Mitait Automations
          </p>
          <p className="profile-company">
            <i className="fas fa-map-marker-alt"></i> Bengaluru, India
          </p>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-text">
              <div className="contact-label">Mobile</div>
              <div className="contact-value">+91 98765 43210</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-text">
              <div className="contact-label">Email</div>
              <div className="contact-value">rajaram@mitait.com</div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tab-container mb-5">
          <ul className="nav nav-tabs" id="profileTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="about-tab"
                data-bs-toggle="tab"
                data-bs-target="#about"
                type="button"
                role="tab"
              >
                About Me
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="social-tab"
                data-bs-toggle="tab"
                data-bs-target="#social"
                type="button"
                role="tab"
              >
                Social Media
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="services-tab"
                data-bs-toggle="tab"
                data-bs-target="#services"
                type="button"
                role="tab"
              >
                Services
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="tab-content" id="profileTabsContent">
            {/* About Me */}
            <div className="tab-pane fade show active" id="about" role="tabpanel">
              <h5 className="mb-3">Professional Summary</h5>
              <p>
                Experienced sales professional with over 8 years in industrial automation
                solutions. Specialized in PLC, SCADA, and robotics integration for
                manufacturing processes.
              </p>

              <h5 className="mb-3 mt-4">Skills</h5>
              <ul>
                <li>Industrial Automation Solutions</li>
                <li>Client Relationship Management</li>
                <li>Technical Sales Presentations</li>
                <li>Project Cost Estimation</li>
                <li>After-sales Support</li>
              </ul>

              <h5 className="mb-3 mt-4">Experience</h5>
              <p>
                <strong>Mitait Automations</strong> | 2018 - Present
              </p>
              <p>
                Increased regional sales by 45% over 3 years through strategic client
                acquisition and retention.
              </p>
            </div>

            {/* Social Media */}
            <div className="tab-pane fade" id="social" role="tabpanel">
              <p className="text-center">Connect with me on social media</p>
              <div className="social-icons">
                <a href="#" className="social-icon" style={{ background: "#3b5998" }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon" style={{ background: "#1da1f2" }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon" style={{ background: "#0077b5" }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon" style={{ background: "#e4405f" }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>

              <div className="text-center mt-3">
                <p>Scan to connect on WhatsApp</p>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/919876543210"
                  alt="WhatsApp QR Code"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
            </div>

            {/* Services */}
            <div className="tab-pane fade" id="services" role="tabpanel">
              <div className="service-card">
                <h6 className="service-title">Industrial Automation</h6>
                <p className="service-desc">
                  Complete automation solutions for manufacturing including PLC
                  programming, SCADA systems, and robotic integration.
                </p>
              </div>
              <div className="service-card">
                <h6 className="service-title">Process Control</h6>
                <p className="service-desc">
                  Customized process control solutions to optimize your production line
                  efficiency and quality.
                </p>
              </div>
              <div className="service-card">
                <h6 className="service-title">Machine Safety</h6>
                <p className="service-desc">
                  Comprehensive safety solutions including risk assessment, safety relays,
                  and emergency stop systems.
                </p>
              </div>
              <div className="service-card">
                <h6 className="service-title">Maintenance Contracts</h6>
                <p className="service-desc">
                  Annual maintenance contracts with priority support and discounted spare
                  parts.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="tab-pane fade" id="contact" role="tabpanel">
              <form className="contact-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Your Phone"
                />
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary btn-send">
                  Send Message
                </button>
              </form>

              <div className="mt-4">
                <h6>Office Address</h6>
                <p>
                  <i className="fas fa-map-marker-alt me-2"></i>
                  #123, Tech Park, Whitefield, Bengaluru - 560066
                </p>

                <h6 className="mt-3">Working Hours</h6>
                <p>
                  <i className="fas fa-clock me-2"></i>
                  Mon-Fri: 9:00 AM - 6:00 PM
                  <br />
                  <i className="fas fa-clock me-2"></i>
                  Sat: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed-bottom-btn">
          <button className="btn btn-primary w-100" onClick={handleSaveContact}>
            <i className="fas fa-save me-2"></i> Save to Phone
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
