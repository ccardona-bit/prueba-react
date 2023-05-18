import Proyect from "./Proyect";
import ProyectsStyle from "./css/Proyects.module.css";
const Proyects = () => {
  return (
    <section className={ProyectsStyle.proyects}>
      <Proyect
        ruta="/images/Robot face-pana.png"
        title="Proyect 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae
            provident expedita porro beatae excepturi sed quibusdam pariatur,
            error omnis?"
        github="http://github.com/EduardoMVirgilio"
        url="http://github.com/EduardoMVirgilio"
        className="one"
      />
      <Proyect
        ruta="/images/Robot face-pana.png"
        title="Proyect 2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae
            provident expedita porro beatae excepturi sed quibusdam pariatur,
            error omnis?"
        github="http://github.com/EduardoMVirgilio"
        url="http://github.com/EduardoMVirgilio"
        className="two"
        alter={true}
      />
      <Proyect
        ruta="/images/Robot face-pana.png"
        title="Proyect 3"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae
            provident expedita porro beatae excepturi sed quibusdam pariatur,
            error omnis?"
        github="http://github.com/EduardoMVirgilio"
        url="http://github.com/EduardoMVirgilio"
        className="three"
      />
    </section>
  );
};

export default Proyects;
