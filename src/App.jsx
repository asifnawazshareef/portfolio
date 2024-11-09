import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Projects from "./components/Projects/Projects";
import Nice from "./components/Nice";
const App = () => {
  return (
    <>
      <Header />
      <Banner />

      <AboutMe />

      <Services />

      <Projects />
      <ContactUs />
      <Footer />
      <div className="position-fixed top-50 end-0 translate-middle-y">
        <SideBar />
      </div>
    </>
  );
};

export default App;
