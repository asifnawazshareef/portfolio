import React from "react";
import Logo from "../assets/images/logo.webp";
const Footer = () => {
  return (
    <>
      {" "}
      <section id="contact" class="footer-wrapper mt-3 mt-md-0">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-6 text-center text-md-start">
              <div class="footer-logo mb-3 mb-md-0">
                <img src={Logo} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <ul class="list-unstyled d-flex justify-content-center social-icon justify-content-md-end justify-content-lg-center mb-3 mb-md-0">
                <li>
                  <a
                    href="https://www.linkedin.com/in/asif-nawaz-sharif/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/asifnawazshareef" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=923040974004">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="copyright-text text-lg-start text-center mb-3 mb-lg-0">
                <p class="mb-0 text-center">
                  Copyright © 2024 . All Rights Reserved. <br />
                  Designed by<a href="#"> Asif Nawaz</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
