import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Python and ML",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar photoCard="Charan.jpg" name="Charan" />
      <div className="data">
        <Intro
          name="Charan Pradeep"
          bio="An experienced 
        Python full stack developer who is very good at full stack
        development,Data Analytics and Engineering and trying to master React"
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.photoCard} alt={props.name} />;
}
function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills &&
        skills.map((skill) => (
          <Skill skill={skill.skill} level={skill.level} color={skill.color} />
        ))}
    </div>
  );
function Skill({ skill, color, level }) {
    return (
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
