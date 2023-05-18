import HeroStyle from "./css/Hero.module.css";
const Hero = () => {
  return (
    <section className={HeroStyle.hero}>
      <article>
        <h1>Hello, Eduardo Virgilio</h1>
        <h2>
          I'm <span>Full Stack</span> Developer
        </h2>
      </article>
      <picture>
        <img src="/images/Astronaut suit-pana.png" alt="" />
      </picture>
    </section>
  );
};

export default Hero;
