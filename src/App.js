import MainHeader from "./components/MainHeader";
import "./App.scss";
import AboutMe from "./components/AboutMe";
import SkillTools from "./components/SkillTools";
import TopBtn from "./components/TopBtn";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div id="app">
      <MainHeader />
      <TopBtn />
      <AboutMe />
      <SkillTools />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;