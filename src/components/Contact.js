import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoMail } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);
  const mentRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
    });

    // 타이틀
    tl.fromTo(
      titleRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.15 }
    );

    tl.fromTo(
      btnRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      mentRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <div
      id="contact"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/contact-background.png)` }}
    >
      <div className="section-wrap" ref={sectionRef}>
        <hr />
        <div className="section-title" ref={titleRef}>
          <h3>
            저와 함께 <span>이야기</span>를 만들어갈 준비되셨나요?
          </h3>
          <h1>CONTACT</h1>
        </div>
        <div className="contact-btn-wrap" ref={btnRef}>
          <a href="https://github.com/hy2s">
            <IoLogoGithub />
            <h2>GitHub</h2>
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText("rlagptmd1021@gmail.com");
              alert("이메일이 클립보드에 복사되었습니다!");
            }}
          >
            <IoMail />
            <h2>rlagptmd1021@gmail.com</h2>
          </button>
        </div>
      </div>
      <div className="contact-ment" ref={mentRef}>
        <h3>
          <span>역지사지 마인드</span>로 <span>사용자 경험을 최우선</span>으로
          생각하는 디자이너가 되고 싶습니다.
        </h3>
        <h2>봐주셔서 감사합니다.</h2>
      </div>
      <p className="footer">
        Copyright 2025. KimHyeseung all rights reserved.
        <br />
        React 기반으로 제작된 사이트입니다.
      </p>
    </div>
  );
};

export default Contact;
