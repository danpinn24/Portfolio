function Projects() {
  const myProjects = [
    {
      title: "Gestor de tareas",
      desc: "Aplicación web que permite organizar y gestionar tareas, facilitando el seguimiento de actividades diarias.",
      tags: ["PHP", "HTML", "CSS"],
      link: "https://github.com/danpinn24/To_Do_List.git"
    },
    {
      title: "Sistema de gestión de cine",
      desc: "Aplicación web con arquitectura MVC para la gestión de funciones, organización y administración de un cine.",
      tags: ["PHP", "JavaScript", "HTML", "CSS", "MVC"],
      link: "https://github.com/danpinn24/Cine_Gestionweb.git"
    },
    {
      title: "Sistema de adopción de animales",
      desc: "Sistema web para registrar animales, adoptantes y gestionar procesos de adopción de manera eficiente.",
      tags: ["PHP", "HTML", "CSS", "MVC"],
      link: "https://github.com/danpinn24/Sistema_GestionAnimales_MVC_2.git"
    },
    {
      title: "Plataforma de comercio electrónico (simulación laboral)",
      desc: "Desarrollo de un MVP de plataforma e-commerce en un entorno de simulación laboral, integrando servicios externos para pagos, analítica y gestión de clientes.",
      tags: ["Webflow", "PostgreSQL", "Stripe"],
      link: "https://github.com/No-Country-simulation/s02-26-equipo-05-web-app-development.git"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {myProjects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="card-icon">🚀</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <a href={p.link} target="_blank" className="repo-link">Ver repositorio</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;