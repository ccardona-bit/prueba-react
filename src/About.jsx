import Skill from "./Skil";
import AboutStyle from "./css/About.module.css";
const About = () => {
  return (
    <section className={AboutStyle.about}>
      <article className={AboutStyle.data}>
        <h2>Tell me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo beatae
          quas suscipit cumque est obcaecati numquam vero ex facilis possimus!
        </p>
        <ul className={AboutStyle.skills}>
          <Skill
            title="Front End"
            skills={["HTML", "CSS", "JS", "REACT", "ANGULAR", "VUE"]}
          />
          <Skill
            title="Back End"
            skills={["Nodejs", "Express", "Python", "Flask", "Django"]}
          />
          <Skill
            title="Databases"
            skills={["MySQL", "PostgreSQL", "Firebase", "MongoDB"]}
          />
          <Skill
            title="Soft Skills"
            skills={["PATIENSE", "EMPATHY", "PROACTIVE"]}
          />
        </ul>
      </article>
      <picture>
        <img src="/images/Astronaut suit-pana.png" alt="" />
      </picture>
    </section>
  );
};

export default About;
