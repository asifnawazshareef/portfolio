import ServiceCards from "./ServiceCards";
import "../assets/css/Services.css";

const Services = () => {
  const cardsData = [
    {
      title: "React.js Frontend Development",
      description:
        "I build high-performance, scalable, and pixel-perfect user interfaces using React.js, modern hooks, reusable components, and responsive layouts based on real production experience.",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
    },
    {
      title: "State Management (Redux Toolkit)",
      description:
        "I manage complex application state using Redux Toolkit and RTK Query, ensuring predictable data flow, optimized API calls, and improved performance.",
      logos: [
        "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      ],
    },
    {
      title: "Next.js & TypeScript",
      description:
        "I develop SEO-friendly, scalable applications using Next.js and TypeScript, leveraging SSR, clean architecture, and strong typing for maintainability.",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      ],
    },
    {
      title: "REST API Integration",
      description:
        "I integrate RESTful APIs using Axios and Fetch API, handling authentication, protected routes, caching, and efficient server communication.",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      ],
    },

    {
      title: "UI & Styling Systems",
      description:
        "I build consistent and reusable UI systems using Tailwind CSS, ShadCN UI, Material UI, Styled Components, and Bootstrap.",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "I optimize applications using code splitting, lazy loading, memoization, and caching strategies to improve load times and user experience.",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      ],
    },
  ];

  return (
    <section id="services" className="services-wrapper">
      <div className="container">
        <div className="row">
          {/* TEXT KEPT AS REQUESTED */}
          <div className="col-sm-12 text-center mb-4">
            <span className="subtitle">What I can do for you</span>
            <h2>My Awesome Service</h2>
            <p>Here are some of my expertise.</p>
          </div>
        </div>

        <div className="row align-items-stretch">
          {cardsData.map((card, index) => (
            <ServiceCards
              key={index}
              title={card.title}
              description={card.description}
              logos={card.logos}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
