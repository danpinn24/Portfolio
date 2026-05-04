function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Lado Izquierdo: Tu Historia */}
        <div className="about-content">
          <h2>Sobre mí</h2>
          <div className="about-text">
            <p>
              Soy <strong>estudiante de Análisis y Programación de Aplicaciones Web</strong>, 
              enfocada en el desarrollo <strong>Backend</strong>. Me apasiona diseñar estructuras sólidas, 
              gestionar bases de datos y resolver problemas lógicos mediante el código. 
              He trabajado con tecnologías como <strong>Java, PHP, NestJS y bases de datos relacionales 
              (MySQL, PostgreSQL)</strong>.
            </p>

            <p>
              Mi trayectoria previa como <strong>Profesora de Educación Especial</strong> me ha dotado de habilidades clave 
              en el mundo IT: una comunicación asertiva, gran capacidad de adaptación y una mirada 
              analítica para crear mediaciones ante desafíos complejos. Entiendo que el software, 
              al igual que la educación, debe ser accesible y centrado en las personas.
            </p>

            <p>
              Me considero una persona en <strong>formación constante</strong>, que disfruta de los entornos 
              de <strong>trabajo en equipo</strong> y el aprendizaje colaborativo. Busco siempre mejorar 
              mis prácticas y mantenerme actualizada en las tendencias de la industria.
            </p>
          </div>
        </div>

        {/* Lado Derecho: Skills Técnicas */}
        <div className="skills-sidebar">
          <div className="skill-card">
            <h3>Backend</h3>
            <p>Java, JavaScript, NestJS, PHP.</p>
          </div>
          <div className="skill-card">
            <h3>Bases de Datos</h3>
            <p>MySQL, PostgreSQL y SQLite.</p>
          </div>
          <div className="skill-card">
            <h3>Documentación</h3>
            <p>OpenAPI (Swagger), Markdown y Gherkin.</p>
          </div>
          <div className="skill-card">
            <h3>Soft Skills</h3>
            <p>Trabajo en equipo, Adaptación y Mediación.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About