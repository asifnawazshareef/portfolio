import React from "react";

const ContactUs = () => {
  return (
    <>
      <section id="contact" class="contact-wrapper">
        <div class="container">
          <div class="row justify-contact-between align-items-center">
            <div class="col-lg-8 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
              <span class="subtitle">Let's Say Hi</span>
              <h2>Hire Me.</h2>
              <div class="row call_details mb-4">
                <label class="col-sm-3">Call us directly:</label>
                <div class="col-sm-9 mb-3 mb-lg-2">
                  <a href="tel:+92 304 0974004">+92 304 0974004</a>
                </div>
                <label class="col-sm-3">Contact Email:</label>
                <div class="col-sm-9 mb-3 mb-lg-2">
                  <a href="mailto:asifnawazshareef@gmail.com">
                    asifnawazshareef@gmail.com
                  </a>
                </div>
                <label class="col-sm-3">Address:</label>
                <div class="col-sm-9 mb-3 mb-lg-2">
                  <a href="https://maps.app.goo.gl/ZUCtXYyHcVhEjqTB8">
                    Islamabad, Pakistan
                  </a>
                </div>
              </div>
              <form name="contact" netlify>
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                    name="name"
                    autocomplete="off"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Your Number"
                    autocomplete="off"
                    name="number"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                    autocomplete="off"
                    name="email"
                  />
                </div>
                <div class="mb-4">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    autocomplete="off"
                    cols="40"
                    rows="4"
                    class="form-control"
                  ></textarea>
                </div>
                <button type="submit" class="main-btn">
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-send mx-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                  </svg>
                </button>
              </form>
            </div>
            <div class="col-lg-4 order-1 mb-4 order-lg-1 mb-lg-0">
              <img
                src="./assets/images/asif_photo.webp"
                class="img-fluid rounded-3"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
