import WebDevelopment from "../assets/images/services/web-development.webp";
import ResponsiveDesign from "../assets/images/services/responsive-design.webp";
import SpeedOptimization from "../assets/images/services/speed-optimization.webp";
import WebDesign from "../assets/images/services/web-design.webp";
import WebMaintenance from "../assets/images/services/web-maintenance.webp";
import WordpressIcon from "../assets/images/services/wordpress-icon.webp";
import Card from "./ServiceCards";

const Services = () => {
  const cardsData = [
    {
      title: "Website Development",
      description:
        "My portfolio features a variety of beautifully designed websites that transform ideas into interactive online experiences, delivering excellent results for global businesses.",
      imageUrl: WebDevelopment,
    },
    {
      title: "WordPress Development",
      description:
        "Dive into my portfolio of beautifully designed, highly functional WordPress websites, and witness how I empower businesses online with custom solutions.",
      imageUrl: WordpressIcon,
    },
    {
      title: "Website Optimization",
      description:
        "I excel in optimizing websites for speed, cross-browser compatibility, and mobile responsiveness, driving user satisfaction, conversions, and SEO results.",
      imageUrl: SpeedOptimization,
    },
    {
      title: "Responsive Design",
      description:
        "Having a responsive layout means that my website fluidly resizes for optimal viewing regardless of the screen size or device (e.g., iPhone, iPad).",
      imageUrl: ResponsiveDesign,
    },
    {
      title: "Website Design",
      description:
        "My approach to website design is to create a website that strengthens your brand while ensuring ease of use and simplicity for your audience.",
      imageUrl: WebDesign,
    },
    {
      title: "Website Maintenance",
      description:
        "I ensure your website runs optimally with expert maintenance solutions. Trust Asif Nawaz for smooth website operation.",
      imageUrl: WebMaintenance,
    },
  ];

  return (
    <section id="services" class="services-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center mb-4">
            <span class="subtitle">What I can do for you</span>
            <h2>My Awesome Service</h2>
            <p>Here are some of my expertise.</p>
          </div>
        </div>
        <div class="row">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
