import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <>
      <section id="home" className="banner_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h6 className="animate-charcter">WELCOME TO MY PORTFOLIO</h6>
              <h1>
                Hi, <br />
                I’m "Asif Nawaz"
                <br />
                {/* <span>Front-End Developer.</span> */}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Frontend Developer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "React JS Developer",
                    1000,
                    "Javascript Developer",
                    1000,
                    "Wordpress Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
                <br />
                based in Islamabad, Pakistan.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
