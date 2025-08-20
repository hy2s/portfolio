import { FiChevronsDown } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

const MainHeader = () => {
  return (
    <section id="main">
      <div className="main-wrap" style={{backgroundImage: "url(/images/main-background.png"}}>
        <p>Update. 25. 08. 12</p>
        <div className="main-content">
          <div className="main-left">
            <p>안녕하세요,</p>
            <h2><span>UI/UX 디자이너</span>를 꿈꾸는</h2>
            <h1>저는 <span>김혜승</span>입니다.</h1>
          </div>
          <div className="main-nav">
              <HiMenu />
              <a href="#aboutme">ABOUT ME</a>
              <a href="#skilltools">SKILL TOOLS</a>
              <a href="#projects">PROJECTS</a>
              <a href="#contact">CONTACT</a>
          </div>
        </div>
        <FiChevronsDown className="scroll-icon"/>
      </div>
    </section>
  );
};

export default MainHeader;