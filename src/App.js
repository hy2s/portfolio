import MainHeader from "./components/MainHeader";
import "./App.scss";
import AboutMe from "./components/AboutMe";
import SkillTools from "./components/SkillTools";
import TopBtn from "./components/TopBtn";

const App = () => {
  return (
    <div id="app">
      <MainHeader />
      <TopBtn />
      <AboutMe />
      <SkillTools />
    </div>
  );
};

export default App;