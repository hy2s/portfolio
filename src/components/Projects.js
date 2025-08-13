import { useState } from 'react';
import ProjectPopup from './ProjectPopup';
import project from "../data/projects.json";

const Projects = () => {
  const [popup, setPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedId, setSelectedId] = useState(null);

  const handlePopup = (id) => {
    setPopup(true);
    setSelectedId(id);
  }

  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="section-title">
          <h3>제가 만든 작품들을 소개할게요.</h3>
          <h1>PROJECTS</h1>
        </div>
        <ul className="project-nav">
          <li 
            className={activeTab === "all" ? "active" : ""}
            onClick={()=>{setActiveTab("all")}}>All</li>
          <li 
            className={activeTab === "react" ? "active" : ""}
            onClick={()=>{setActiveTab("react")}}>React</li>
          <li 
            className={activeTab === "team" ? "active" : ""}
            onClick={()=>{setActiveTab("team")}}>Team</li>
          <li 
            className={activeTab === "single" ? "active" : ""}
            onClick={()=>{setActiveTab("single")}}>Single</li>
          <li 
            className={activeTab === "clone" ? "active" : ""}
            onClick={()=>{setActiveTab("clone")}}>Clone</li>
          <li 
            className={activeTab === "practical" ? "active" : ""}
            onClick={()=>{setActiveTab("practical")}}>Practical</li>
        </ul>
        <div className="project-card-wrap">
          {
            project
              .filter(item => {
                if (activeTab === "all") return true; // "All" 탭이면 전부 보여줌
                return item.type.includes(activeTab); // 선택된 탭 이름과 카테고리 비교
              })
              .map((item, idx)=>{
                return (
                  <div 
                    className="project-card" 
                    onClick={()=>{handlePopup(item.id)}}
                    key={idx}
                  >
                    <div className='card-img'>
                      <img src={item.images.thumbnail} alt='project-thumbnail'/>
                    </div>
                    <div className='project-content'>
                      <ul className='project-tag'>
                        <li>{item.categories[0]}</li>
                        <li>{item.categories[1]}</li>
                        <li>{item.categories[2]}</li>
                      </ul>
                      <h2>{item.title}</h2>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                )
              })
          }
        </div>
      </div>
      {
        popup && 
          <ProjectPopup 
            id={selectedId}
            project={project}
            onClose={()=>{ setPopup(false); setSelectedId(null) }}
          />
      }
    </section>
  );
};

export default Projects;