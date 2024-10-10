import Navbar from "../../home/Navbar";
import Banner from "../../home/Banner";
import Services from "../../home/Services";
import Solutions from "../../home/Solutions";
import Skill from "../../home/Skill";

import MyWork from "../../home/MyWork";

import Contact from "../../home/Contact";
import Blog from "../../home/Blog";
import Footer from "../../home/Footer";
import TitleTwo from "../../home/TitleTwo";
import TitleBlog from "../../home/TitleBlog";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Solutions />
      <Skill />
      <TitleTwo />

      <MyWork />

      <Contact />
      <TitleBlog />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
