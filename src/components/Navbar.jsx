function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-accent">&lt;</span>
        Dana Pinna
        <span className="logo-accent"> /&gt;</span>
      </div>
      <div className="nav-links">
        <a href="#home">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact" className="nav-btn-contact">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;