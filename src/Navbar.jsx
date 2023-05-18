import NavbarStyle from "./css/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={NavbarStyle.navbar}>
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#proyects">Proyects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
