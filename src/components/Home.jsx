import heroImg from "../assets/imagen1.jpg"

function Home() {
  return (
    <section className="hero" id="home">
      
      {/* Grupo de texto (izquierda) */}
      <div className="hero-text-container">
        <span className="greeting">¡Hola! Soy</span>
        <h1>Dana Soledad Pinna</h1>
        <p className="description">
          Estudiante de la Tecnicatura de Análisis, Desarrollo y Programación de Aplicaciones. 
          Apasionada por el desarrollo backend, la lógica y la creación de soluciones.
        </p>
        
       </div>

      {/* Contenedor de la foto circular (derecha) */}
      <div className="hero-image-container">
        <div className="circular-frame">
          <img src={heroImg} alt="Dana Soledad Pinna" className="hero-photo" />
        </div>
      </div>

    </section>
  )
}
export default Home