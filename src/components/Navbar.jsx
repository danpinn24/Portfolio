import React, { useState } from 'react';

function Navbar() {
  // Estado para controlar si el menú está abierto (true) o cerrado (false)
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el menú al tocar las rayitas
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú automáticamente al tocar una sección
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">DP</a>
      </div>

      {/* Botón de las 3 rayitas (Hamburguesa) */}
      <button 
        className={`nav-toggle ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Lista de enlaces que se despliega */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Inicio</a></li>
        <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
        <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;