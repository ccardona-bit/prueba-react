import SkillStyle from "./css/Skill.module.css";
const Skill = (props) => {
  return (
    <li className={SkillStyle.element}>
      {props.title}
      <ul>
        {props.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </li>
  );
};

export default Skill;
