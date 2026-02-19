import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { FiChevronsDown } from "react-icons/fi";

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
      <div className="main-wrap" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/main-background.png)` }}>
        <p className="update">Update. 26. 02. 20</p>
        <div className="main-content">
          <div className="main-left" ref={leftRef}>
            {/* <p>안녕하세요,</p> */}
            <p><span>역지사지</span>로 사용자를 이해하는</p>
            <h2>ui/ux designer & Web Publisher</h2>
            <h1><span>김혜승</span>입니다.</h1>
          </div>
          <div className="main-nav" ref={navRef}>
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
