import skills from "../data/skills.json";

const SkillTools = () => {

  return (
    <section id="skilltools">
      <div className="section-wrap">
        <div className="section-title">
          <h3>저는 이런 것들을 할 줄 알아요.</h3>
          <h1>SKILL TOOLS</h1>
        </div>
        <div className="skill-wrap">
          {skills.map((skill, index)=>(
            <div className="skill-card" key={index}>
              {skill.badge && <p className="badge">{skill.badge}</p>}
              <img src={skill.img} alt={skill.title} />
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTools;