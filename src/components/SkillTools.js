import { useLayoutEffect, useRef } from "react";
import skills from "../data/skills.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SkillTools = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillRef = useRef(null);

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
      skillRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.4"
    );
  })

  return (
    <section id="skilltools" ref={sectionRef}>
      <div className="section-wrap">
        <div className="section-title" ref={titleRef}>
          <h3>저는 이런 것들을 할 줄 알아요.</h3>
          <h1>SKILL TOOLS</h1>
        </div>
        <div className="skill-wrap" ref={skillRef}>
          {skills.map((skill, index)=>(
            <div className="skill-card" key={index}>
              {skill.badge && <p className="badge">{skill.badge}</p>}
              <img src={process.env.PUBLIC_URL + skill.img} alt={skill.title} />
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTools;