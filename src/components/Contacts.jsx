import React from 'react';

function Contacts() {
  return (
    <footer className="footer" id="contact">
      <div className="contact-container">
        
        {/* Lado Izquierdo: Información de contacto tradicional */}
        <div className="contact-info-sidebar">
          <h2>Contacto</h2>
          <p className="contact-subtitle">
            ¿Tenés alguna propuesta laboral o proyecto en mente? ¡Hablemos!
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:danapinna@gmail.com">danapinna@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="https://wa.me/5492494515343" target="_blank" rel="noopener noreferrer">
                +54 9 249 4515343
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <a href="https://www.linkedin.com/in/dana-pinna-418683327" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                LinkedIn Profesional
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Tandil, Argentina</span>
            </div>
          </div>
        </div>

       
        <div className="contact-form-container">
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            
            
            <input type="hidden" name="access_key" value="74714741-fea8-4aed-b844-808a89c00233" />
            
            
            <input type="checkbox" name="botcheck" className="hidden-bot" style={{ display: 'none' }} />
            <input type="hidden" name="subject" value="Nuevo mensaje desde tu Portfolio Backend" />

            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" required placeholder="Juan Pérez" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" name="email" id="email" required placeholder="juan@ejemplo.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="5" required placeholder="Hola Dana, vi tus proyectos backend y..." ></textarea>
            </div>

            <button type="submit" className="btn-submit">Enviar mensaje</button>
          </form>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dana Pinna. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Contacts;