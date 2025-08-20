import { IoClose } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { LuLink } from "react-icons/lu";

const ProjectPopup = ({id, project, onClose}) => {
  if (id === null) return null;

  const item = project.find((p) => p.id === id);
  if (!item) return null;

  return (
    <div className="project-popup" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <div className="popup-top" style={{backgroundColor: item.details.bgColor}}>
          <div className="popup-top-1">
            <ul className="project-tag">
              {
                item.categories.map((category, idx)=>{
                  return ( <li key={idx} style={{color: item.details.bgColor}}>{category}</li> )
                })
              }
            </ul>
            <div className="popup-title">
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
            </div>
            <h3>{item.description}</h3>
          </div>
          <div className="popup-top-2">
            <p>{item.period}</p>
            <p>{item.member}</p>
          </div>
          <div className="popup-img">
            <img src={item.images} alt="project-image" />
          </div>
        </div>
        <div className="popup-content">
          {/* 팀&개인 프로젝트 */}
          <ul className="popup-section">
            <li>프로젝트 개요</li>
            <li>
              {
                item.details.overview.map((overview, idx)=>{
                  return ( <p key={idx}>{overview}</p>)
                })
              }
            </li>
          </ul>
          {item.details.myRole && (
            <ul className="popup-section">
              <li>제작 기여도</li>
              <li>
                <img src={item.details.myRole} alt="project-myrole"/>
              </li>
            </ul>
            )}
          {item.details.features && (
            <ul className="popup-section">
              <li>주요 기능<br/>& 구현 포인트</li>
              <li>
                {
                  item.details.features.map((features, idx)=>{
                    return ( <p key={idx}>{features}</p> )
                  })
                }
              </li>
            </ul>
            )}
          {item.details.myRoleDesign && (
            <ul className="popup-section">
              <li>디자인<br/>기여 영역</li>
              <li>
                {
                  item.details.myRoleDesign.map((myRoleDesign, idx)=>{
                    return ( <p key={idx}>{myRoleDesign}</p> )
                  })
                }
              </li>
            </ul>
          )}
          {item.details.learned && (
            <ul className="popup-section">
              <li>프로젝트에서<br/>배운 점</li>
              <li>
                {
                  item.details.learned.map((learned, idx)=>{
                    return ( <p key={idx}>{learned}</p> )
                  })
                }
              </li>
            </ul>
          )}
          {item.details.skillTool && (
            <ul className="popup-section">
              <li>사용 스킬<br/>& 기술 스택</li>
              <li>
                {
                  item.details.skillTool.map((skill, idx)=>{
                    return ( <p key={idx}>{skill}</p> )
                  })
                }
              </li>
            </ul>
          )}
          { item.details.Refactoring && (
              <ul className="popup-section">
                <li>회고</li>
                <li>
                  <div className="Refactoring">
                    <h3>[ 문제점 ]</h3>
                    <p>{item.details.Refactoring[0]}</p>
                  </div>
                  <div className="Refactoring">
                    <h3>[ 해결 방법 ]</h3>
                    <p>{item.details.Refactoring[1]}</p>
                  </div>
                  <div className="Refactoring">
                    <h3>[ 리팩토링 포인트 ]</h3>
                    <p>{item.details.Refactoring[2]}</p>
                  </div>
                </li>
              </ul>
            )}
          {item.details.designSystem && (
              <ul className="popup-section">
                <li>디자인 시스템</li>
                <li><img src={item.details.designSystem} alt="design-system"/></li>
              </ul>
            )}
        </div>
      </div>
      <div className="popup-side">
        <div className="close-btn" onClick={()=>onClose()}>
          <IoClose />
        </div>
      {item.details.links.github && (
        <div className="link-btn">
          <a href={item.details.links.github} target="_blank" rel="noopener noreferrer">
            <div>
              <IoLogoGithub />
            </div>
            <p>GitHub</p>
          </a>
        </div>
      )}
      <div className="link-btn">
        <a href={item.details.links.site} target="_blank" rel="noopener noreferrer">
          <div>
            <LuLink />
          </div>
          <p>Site URL</p>
        </a>
      </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
