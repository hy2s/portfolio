import { useEffect, useRef, useState } from 'react';
import ProjectPopup from './ProjectPopup';
import project from "../data/projects.json";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [popup, setPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedId, setSelectedId] = useState(null);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const navRef = useRef(null);
  const projectRef = useRef(null);

  // 최초: 스크롤 진입 시 한 번만 실행
  useEffect(() => {
    if (!sectionRef.current) return;

    const titles = titleRef.current.children;
    const navs = navRef.current.children;
    const cards = projectRef.current.children;

    gsap.set([titles, cards], { opacity: 0, y: 50 });
    gsap.set([navs], { opacity: 0, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true
      }
    });

    // 타이틀
    tl.to(titles, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15
    });

    // nav
    tl.to(navs, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.4");

    // 카드
    tl.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2
    }, "-=0.4");

  }, []);

  // 탭 전환 시: 카드만 새로 애니메이션
  useEffect(() => {
    const cards = projectRef.current?.children;
    if (!cards) return;

    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2
      }
    );
  }, [activeTab]);

  // 팝업 시 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = popup ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [popup]);

  const handlePopup = (id) => {
    setPopup(true);
    setSelectedId(id);
  }

  return (
    <>
      <section id="projects" ref={sectionRef}>
        <div className="section-wrap">
          <div className='project-head'>
            <div className="section-title" ref={titleRef}>
              <h3>제가 만든 작품들을 소개할게요.</h3>
              <h1>PROJECTS</h1>
            </div>
            <div className='nav-wrap' ref={navRef}>
              <ul className="project-nav">
                {["all","react","team","single","clone","practical"].map((tab, idx) => (
                  <li 
                    key={idx}
                    className={activeTab === tab ? "active" : ""}
                    onClick={()=>{setActiveTab(tab)}}
                  >
                    {tab.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="project-card-wrap" ref={projectRef}>
            {project
              .filter(item => activeTab === "all" ? true : item.type.includes(activeTab))
              .map((item, idx) => (
                <div 
                  className="project-card" 
                  onClick={()=>{handlePopup(item.id)}}
                  key={idx}
                >
                  <div className='card-img'>
                    <img src={item.images} alt='project-thumbnail'/>
                  </div>
                  <div className='project-content'>
                    <ul className='project-tag'>
                      {item.categories.map((category, idx) => <li key={idx}>{category}</li>)}
                    </ul>
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {popup && 
        <ProjectPopup 
          id={selectedId}
          project={project}
          onClose={()=>{ setPopup(false); setSelectedId(null) }}
        />
      }
    </>
  );
};

export default Projects;
