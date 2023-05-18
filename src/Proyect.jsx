import ProyectStyle from "./css/Proyect.module.css";
const Proyect = (props) => {
  return (
    <article
      className={`${ProyectStyle.proyect} ${ProyectStyle[props.className]} ${
        props.alter ? ProyectStyle.event : ""
      }`}
    >
      <picture>
        <img src={props.ruta} alt="" />
      </picture>
      <section>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </section>
      <nav>
        <a href={props.github} target="_blank">
          <span class="fa-brands fa-github"></span>
        </a>
        <a href={props.url} target="_blank">
          <span class="fa-solid fa-globe"></span>
        </a>
      </nav>
    </article>
  );
};

export default Proyect;
