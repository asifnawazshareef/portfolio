import React from "react";
import profile from "../assets/images/ProfileAsif.webp";
import Nice from "./Nice";
const AboutMe = () => {
  return (
    <>
      <section id="about" className="about-wrapper">
        <div class="row">
          <div class="col-sm-12  text-center mb-4">
            <span class="subtitle">My About Details</span>
            <h2>About Me</h2>
            <p className="about-description">
              Hello, I'm Asif Nawaz, a front-end developer who is passionate
              about creating engaging web experiences and has a strong
              dedication to doing so.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row justify-contact-between align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0 ">
              {/* <img
                src={profile}
                className="img-fluid rounded-3"
                alt="about-us"
              /> */}
              <Nice />
            </div>
            <div className="col-lg-7 text-center text-lg-start ps-lg-5 ">
              <div className="pt-4">
                <ul
                  className="nav nav-pills justify-content-lg-between justify-content-center mb-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-main-skill-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-main-skill"
                      type="button"
                      role="tab"
                      aria-controls="pills-main-skill"
                      aria-selected="true"
                    >
                      Main Skills
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-skill-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-skill"
                      type="button"
                      role="tab"
                      aria-controls="pills-skill"
                      aria-selected="true"
                    >
                      Skills
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-experiance-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-experiance"
                      type="button"
                      role="tab"
                      aria-controls="pills-experiance"
                      aria-selected="false"
                    >
                      Experiance
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-education-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-education"
                      type="button"
                      role="tab"
                      aria-controls="pills-education"
                      aria-selected="false"
                    >
                      Education
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-award-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-award"
                      type="button"
                      role="tab"
                      aria-controls="pills-award"
                      aria-selected="false"
                    >
                      Certificates
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-main-skill"
                    role="tabpanel"
                    aria-labelledby="pills-main-skill-tab"
                  >
                    <div className="single-progress">
                      <h6>Web Development</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <span className="lable">70%</span>
                    </div>
                    <div className="single-progress">
                      <h6>Front-end Development</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow={95}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <span className="lable">95%</span>
                    </div>
                    <div className="single-progress">
                      <h6>WordPress</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <span className="lable">85%</span>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-skill"
                    role="tabpanel"
                    aria-labelledby="pills-skill-tab"
                  >
                    <div className="skills">
                      <ul className="skills-list text-start ps-0">
                        <li>React JS</li>
                        <li>HTML / HTML5</li>
                        <li>CSS / CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>AJAX</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>Swiper JS</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>WordPress</li>
                        <li>Page Builders Elementor and WP Bakery</li>
                        <li>Gutenberg Block Building</li>
                        <li>Custom Theme Development</li>
                        <li>SEO knowledge</li>
                        <li>Git / GitHub</li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-experiance"
                    role="tabpanel"
                    aria-labelledby="pills-experiance-tab"
                  >
                    <ul className="text-start ps-0">
                      <li>
                        <a href="#">
                          React JS Internship
                          <span>- Smart Coders (SMC) , Islamabad</span>
                        </a>
                        Sep 2024 - Present
                      </li>
                      <li>
                        <a href="#">
                          Wordpress Frontend & Backend Developer
                          <span>- Cybermind Solutions , Rawalpindi</span>
                        </a>
                        May 2024 - July 2024
                      </li>
                      <li>
                        <a href="#">
                          Front-End Developer
                          <span>- Tecrux Global , Islamabad</span>
                        </a>
                        Sep 2023 - May 2024
                      </li>

                      <li>
                        <a href="#">
                          Wordpress Developer |Business Incubatee
                          <span>
                            - Regional Plan9 , Punjab IT Board , PMAS ,
                            Rawalpindi
                          </span>
                        </a>
                        Apr 2022 - Oct 2022
                      </li>
                    </ul>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-education"
                    role="tabpanel"
                    aria-labelledby="pills-education-tab"
                  >
                    <ul className="text-start ps-0">
                      <li>
                        <a href="#">
                          BS in Computer Science(BSCS)
                          <span>
                            - PMAS Arid Agriculture University, Rawalpindi
                          </span>
                        </a>
                        2017 - 2021
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-award"
                    role="tabpanel"
                    aria-labelledby="pills-award-tab"
                  >
                    <ul className="text-start ps-0">
                      <li>
                        <a href="">
                          Wordpress
                          <span>- National Training Bureau, Islamabad </span>
                        </a>
                        Feb 2021 - May 2021
                      </li>
                      <li>
                        <a href="#">
                          Web & Graphic Designing
                          <span>- National Training Bureau,Islamabad </span>
                        </a>
                        July 2018 - Sep 2018
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
