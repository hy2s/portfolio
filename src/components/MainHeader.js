import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { FiChevronsDown } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

const MainHeader = () => {
  const leftRef = useRef(null);
  const navRef = useRef(null);
  const scrollIconRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    // 왼쪽 텍스트 자식 요소 순차 애니메이션
    tl.fromTo(
      leftRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.3 }
    );

    // 네비게이션 메뉴
    tl.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.3"
    );

    // 아래 화살표 아이콘
    tl.fromTo(
      scrollIconRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power1.inOut", repeat: -1, yoyo: true }
    );

    return () => tl.kill();
  }, []);

  return (
    <section id="main">
      <div className="main-wrap" style={{ backgroundImage: "url(/images/main-background.png)" }}>
        <p className="update">Update. 25. 08. 12</p>
        <div className="main-content">
          <div className="main-left" ref={leftRef}>
            <p>안녕하세요,</p>
            <h2><span>UI/UX 디자이너</span>를 꿈꾸는</h2>
            <h1>저는 <span>김혜승</span>입니다.</h1>
          </div>
          <div className="main-nav" ref={navRef}>
            <HiMenu />
            <a href="#aboutme">ABOUT ME</a>
            <a href="#skilltools">SKILL TOOLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
        <FiChevronsDown className="scroll-icon" ref={scrollIconRef} />
      </div>
    </section>
  );
};

export default MainHeader;
