import Aiosofts from "../../assets/images/projects/Aiosofts.webp";
import BloomPakistan from "../../assets/images/projects/BloomPakistan.webp";
import GennextGlobalTech from "../../assets/images/projects/GennextGlobalTech.webp";
import HamzaMotors from "../../assets/images/projects/HamzaMotors.webp";
import TkTravel from "../../assets/images/projects/TkTravel.webp";
import TravelsIslamabad from "../../assets/images/projects/TravelsIslamabad.webp";
import Hoobank from "../../assets/images/projects/Hoobank.webp";
import DiceGame from "../../assets/images/projects/DiceGame.webp";
import RedirectLink from "../../assets/images/projects/RedirectLink.svg?react";
const Projects = () => {
  return (
    <>
      <section id="portfolio" class="portfolio-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center mb-4">
              <span class="subtitle">My Complete Projects</span>
              <h2>My Latest Projects</h2>
              <p>
                Highly experienced in designing & developing responsive
                websites.
              </p>
            </div>
          </div>
          <div class="row about-wrapper">
            <div class="pt-4">
              <ul
                class="nav nav-pills justify-content-lg-between justify-content-evenly mb-4 portfolio-pills"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-wordpress-site-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-wordpress-site"
                    type="button"
                    role="tab"
                    aria-controls="pills-wordpress-site"
                    aria-selected="false"
                  >
                    WordPress
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-reactjs-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-landing-page"
                    type="button"
                    role="tab"
                    aria-controls="pills-landing-page"
                    aria-selected="true"
                  >
                    React JS Websites
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-websites-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-websites"
                    type="button"
                    role="tab"
                    aria-controls="pills-websites"
                    aria-selected="true"
                  >
                    Websites
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-wordpress-site"
                  role="tabpanel"
                  aria-labelledby="pills-wordpress-site-tab"
                >
                  <div class="row">
                    <div class="col-lg-3 col-md-6 mt-5 card-col">
                      <div class="card p-0">
                        <span
                          style={{ backgroundImage: `url(${Aiosofts}) ` }}
                        ></span>
                      </div>
                      <a
                        href="https://aiosofts.com/"
                        target="_blank"
                        class="live-site-btn"
                      >
                        Aiosofts
                        <RedirectLink />
                      </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-5 card-col">
                      <div class="card p-0">
                        <span
                          style={{ backgroundImage: `url(${HamzaMotors}) ` }}
                        ></span>
                      </div>
                      <a
                        href="https://hamzamotors.com.pk/"
                        target="_blank"
                        class="live-site-btn"
                      >
                        Hamza Motors <RedirectLink />
                      </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-5 card-col">
                      <div class="card p-0">
                        <span
                          style={{
                            backgroundImage: `url(${GennextGlobalTech}) `,
                          }}
                        ></span>
                      </div>
                      <a
                        href="https://gennextglobaltech.ca/"
                        target="_blank"
                        class="live-site-btn"
                      >
                        Gennext Global Tech <RedirectLink />
                      </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-5 card-col">
                      <div class="card p-0">
                        <span
                          style={{ backgroundImage: `url(${BloomPakistan}) ` }}
                        ></span>
                      </div>
                      <a
                        href="https://bloompakistan.com/"
                        target="_blank"
                        class="live-site-btn"
                      >
                        Bloom Pakistan <RedirectLink />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-landing-page"
                  role="tabpanel"
                  aria-labelledby="pills-reactjs-tab"
                >
                  <div class="row">
                    <div class="col-lg-3 col-md-6 mt-5 card-col">
                      <div class="card p-0">
                        <span
                          style={{
                            backgroundImage: `url(${Hoobank}) `,
                          }}
                        ></span>
                      </div>
                      <a
                        href="https://newbank.netlify.app/"
                        target="_blank"
                        class="live-site-btn"
                      >
                        HooBank UI React APP <RedirectLink />
                      </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-5 card-col">
                      <div class="card p-0">
                        <span
                          style={{ backgroundImage: `url(${DiceGame}) ` }}
                        ></span>
                      </div>
                      <a
                        href="https://dicegameplay1.netlify.app/"
                        target="_blank"
                        class="live-site-btn"
                      >
                        Dice Game React APP <RedirectLink />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-websites"
                  role="tabpanel"
                  aria-labelledby="pills-websites-tab"
                >
                  <div class="row">
                    <div class="col-lg-3 col-md-6 mt-5 card-col">
                      <div class="card p-0">
                        <span
                          style={{ backgroundImage: `url(${TkTravel}) ` }}
                        ></span>
                      </div>
                      <a
                        href="https://asifnawazshareef.github.io/Travels_and_Tours/"
                        target="_blank"
                        class="live-site-btn"
                      >
                        TK Travel <RedirectLink />
                      </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-5 card-col">
                      <div class="card p-0">
                        <span
                          style={{
                            backgroundImage: `url(${TravelsIslamabad}) `,
                          }}
                        ></span>
                      </div>
                      <a
                        href="https://asifnawazshareef.github.io/travel-islamabad/"
                        target="_blank"
                        class="live-site-btn"
                      >
                        Travels Islamabad <RedirectLink />
                      </a>
                    </div>
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

export default Projects;
