import React, {useRef} from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import miFoto from './FotoMoodle.jpg';
import instituto from './LogoInstituto.jpg';
import universidad from './LogoUclm.jpg';
import ingles from './LogoCambridge.jpg';
import NTT from './DigitalBuilders.jpg';
import futbol1 from './futbol1.jpg';
import futbol2 from './futbol2.jpg';
import python from './pythonlogo.jpg';
import java from './java.jpg';
import angular from './angularlogo.jpg';
import react from './react.jpg';
import htmlcss from './weblogo.jpg';
import volante from './volante.jpg';
import osint from './osint.jpg';
import sunvolt from './sunvolt.png';
import ipokemon from './ipokemon.jpg';
import mulsurv from './Mulsurv.png';
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';




function App() {
  const estudiosRef = useRef(null);
  const habilidadesRef = useRef(null);
  const logrosRef = useRef(null);
  const proyectosRef = useRef(null);
  const sobremi = useRef(null);
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="App" >
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="#" className="navbar-link" onClick={() => scrollToSection(estudiosRef)}>Estudios</Link></li>
          <li><Link to="#" className="navbar-link" onClick={() => scrollToSection(habilidadesRef)}>Aptitudes</Link></li>
          <li><Link to="#" className="navbar-link" onClick={() => scrollToSection(logrosRef)}>Certificaciones</Link></li>
          <li><Link to="#" className="navbar-link" onClick={() => scrollToSection(proyectosRef)}>Proyectos</Link></li>
          <li><Link to="#" className="navbar-link" onClick={() => scrollToSection(sobremi)}>Sobre Mí</Link></li>
        </ul>
      </nav>
      <div className="container">

<div className="profile-card">
          <h1>Carlos Sánchez Díaz</h1>
          <p class= "typing">
            Ingeniero Informático
          </p>
</div>
          <div className="cardphoto">
            <img
              src={miFoto}
              alt="Mi foto"
              className="profile-image-in-card"
            />
          </div>


        {/* Definir las rutas dentro de <Routes> */}
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                {/* Sección de Estudios */}
                <section ref={estudiosRef} className="estudios-section" id="estudios">
                  <h2>Mis Estudios</h2>
                  <div className="estudios-list">
                    <div className="estudio-item">
                      <h3>Bachillerato en Ciencias</h3>
                      <p><strong>Instituto de Educación Secundaria Juán de Ávila</strong></p>
                      <p><em>2019 - 2021</em></p>
                      <div className="card">
                        <img
                          src={instituto}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
                    </div>

                    <div className="estudio-item">
                      <h3>Grado en Ingeniería Informática</h3>
                      <p><strong>Universidad Castilla La-Mancha</strong></p>
                      <p><em>2021 - Actualidad</em></p>
                      <p>
                        Con elección de intensificación en Tecnologías de la Información
                      </p>
                      <div className="card">
                        <img
                          src={universidad}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section ref={habilidadesRef} className="habilidades-section" id="habilidades">
  <h2>Habilidades Técnicas</h2>
  <p>
    Estas son algunas de las principales habilidades técnicas que he adquirido durante mi 
    formación académica:
  </p>
  <div className="habilidades-grid">
    <div className="habilidad">
    <i className="fab fa-react"></i>
      <h3>React</h3>
      <div className="card">
                        <img
                          src={react}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
    </div>

    <div className="habilidad">
      <i className="fab fa-html/css"></i>
      <h3>HTML, CSS y JavaScript</h3>
      <div className="card">
                        <img
                          src={htmlcss}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
    </div>
    <div className="habilidad">
      <i className="fab fa-python"></i>
      <h3>Python</h3>
      <div className="card">
                        <img
                          src={python}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
    </div>
    <div className="habilidad">
      <i className="fab fa-java"></i>
      <h3>Java</h3>
      <div className="card">
                        <img
                          src={java}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
    </div>
    <div className="habilidad">
      <i className="fab fa-angular"></i>
      <h3>Angular</h3>
      <div className="card">
                        <img
                          src={angular}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
    </div>
  </div>
</section>

                {/* Sección de Logros */}
                <section ref={logrosRef} className="logros-section" id="logros">
                  <h2>Logros y Certificaciones</h2>
                  <p>Aquí te comparto algunos logros y certificaciones que he obtenido, que son complementarios a mis estudios y habilidades técnicas.</p>

                  <div className="logros-list">
                    <div className="logro-item">
                      <h3>Inglés B1 (Cambridge)</h3>
                      <p><strong>Score:</strong> 157</p>
                      <div className="card">
                        <img
                          src={ingles}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
                    </div>

                    <div className="logro-item">
                      <h3>Segundo Premio en NTT Digital Builders</h3>
                      <div className="card">
                        <img
                          src={NTT}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
                    </div>

                    <div className="logro-item">
                      <h3>Carnet de Conducir B</h3>
                      <div className="card">
                        <img
                          src={volante}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Sección de Proyectos */}
                <section ref={proyectosRef} className="proyectos-section" id="proyectos">
                  <h2>Proyectos Recientes</h2>
                  <p>Aquí están algunos de mis proyectos más recientes:</p>

                  <div className="proyectos-list">
                    <div className="proyecto-item">
                      <h3>SunVolt</h3>
                      <div className="card">
                        <img
                          src={sunvolt}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
                      <p><strong>Descripción:</strong> Una aplicación relacionada con el rendimiento de las placas solares y un dashboard, hecha con Flask. Permite visualizar y analizar datos en tiempo real para optimizar la eficiencia de los paneles solares.</p>
                      <p><strong>Tecnologías:</strong> Flask, JavaScript, HTML, CSS y Python</p>
                      <p><strong>Link:</strong> <a href="https://github.com/Carlos-SD4/isi-SunVolt">Enlace del Repositorio</a></p>

                    </div>

                    <div className="proyecto-item">
                      <h3>IPokemon</h3>

                      <div className="card">
                        <img
                          src={ipokemon}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
                      <p><strong>Descripción:</strong> Una aplicación tipo Pokémon hecha desde cero por los alumnos, donde se puede crear un Pokémon, asignar varios ataques y combatir contra otros Pokémon.</p>
                      <p><strong>Tecnologías:</strong> C#, Blend</p>
                      <p><strong>Link:</strong> <a href="https://github.com/Carlos-SD4/IPokemon">Enlace del Repositorio</a></p>
                    </div>

                    <div className="proyecto-item">
                      <h3>Mulsurv</h3>
                     
                      <div className="card">
                        <img
                          src={mulsurv}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
                      <p><strong>Descripción:</strong> Un videojuego con modos de un jugador y multijugador. El juego tiene un modo historia interesante y un multijugador tipo Battle Royale donde los jugadores compiten entre sí hasta ser el último en pie.</p>
                      <p><strong>Tecnologías:</strong> Python, Pygame </p>
                      <p><strong>Link:</strong> <a href="https://github.com/FelipeAlcazar/MulSurv">Enlace del Repositorio</a></p>
                    </div>

                    <div className="proyecto-item">
                      <h3>OSINT</h3>
                      <div className="card">
                        <img
                          src={osint}
                          alt="Mi foto"
                          className="profile-image-in-card"
                        />
                      </div>
                      <p><strong>Descripción:</strong> Una aplicación OSINT (Open Source Intelligence) que permite conocer tu ubicación y descubrir sitios cercanos de interés, como restaurantes, tiendas y lugares turísticos.</p>
                      <p><strong>Tecnologías:</strong> Python, APIs de Geolocalización</p>
                      <p><strong>Link:</strong> <a href="https://github.com/Carlos-SD4/OSINT">Enlace del Repositorio</a></p>
                    </div>
                  </div>
                </section>

                <section ref={sobremi} className="sobre-mi" id="sobre-mi">
      <h1>Sobre Mí</h1>
      <p>Esta seccion es principalmente para dar a conocer a mi faceta no profesional</p>

      {/* Sección de Edad y Origen */}
      <section className="personal-info">
        <h2>Datos Personales</h2>
        <p><strong>Edad:</strong> 21 años</p>
        <p><strong>¿Dónde me encuentro?</strong> Ciudad Real, España</p>
      </section>

      {/* Sección de Motivo de elegir la informática */}
      <section className="why-computing">
        <h2>¿Por qué elegí la Informática?</h2>
        <p>
          Desde que era pequeño siempre me ha apasionado la tecnología. Mi primer contacto con la informática fue a través de los videojuegos. 
          Me fascina poder crear soluciones útiles a través del código, y es por eso que decidí estudiar Ingeniería Informática. Me apasiona la idea de poder construir aplicaciones que puedan mejorar la vida de las personas.
        </p>
      </section>

      {/* Sección de Deportes */}
      <section className="deportes">
        <h2>Deportes</h2>
        
        {/* Fútbol */}
        <div className="futbol">
          <h3>Fútbol</h3>
          <p>
            He estado jugando al fútbol desde los 8 años, pasando por EMFB Ciudad Real, <strong>Ciudad Real C.F.</strong>, donde debute en 1ª Autonómica y el <strong>Pozuelo F.C.</strong>, un equipo de un pueblo en la provincia de Ciudad Real.
          </p>
          <p>
           Tambien participe en 2 torneos a nivel mundial como son el Costa Gerona Cup y el Costa Blanca Cup en Benidorm donde pude jugar contra equipos de talla mundial.
          </p>
          <div className="imagenes-futbol">
            <img src={futbol1} alt="Ciudad Real C.F" />
            <img src={futbol2} alt="Pozuelo" />
          </div>
        </div>

        {/* Pádel */}
        <div className="padel">
          <h3>Pádel</h3>
          <p>
            Además del fútbol, soy un gran aficionado al <strong>pádel</strong>. Aunque no lo practico de manera profesional, disfruto mucho de este deporte. En 2022, tuve el honor de ganar el Trofeo Copa Primavera Rector de modalidad Mixto.
          </p>
        </div>


        {/* Tiempo con Amigos */}
        <div className="ocio">
          <h3>Tiempo con Amigos</h3>
          <p>
            También valoro mucho el tiempo con mis <strong>amigos</strong>. Me gusta salir a tomar algo, y, de vez en cuando, salir de fiesta para crear recuerdos juntos. Es algo esencial para olvidarme del ámbito laboral.
          </p>
        </div>

      </section>
    </section>


                    



                {/* Íconos sociales en la esquina derecha */}
                <div className="social-icons">
  <a
    href="mailto:carlos.sanchez74@alu.uclm.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Enviar correo a Carlos Sánchez"
  >
    <FaEnvelope size={30} />
  </a>
  <a
    href="https://github.com/Carlos-SD4"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visitar el perfil de GitHub de Carlos Sánchez"
  >
    <FaGithub size={30} />
  </a>
  <a
    href="https://www.linkedin.com/in/carlos-sánchez-díaz-19328429a"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visitar el perfil de LinkedIn de Carlos Sánchez"
  >
    <FaLinkedin size={30} />
  </a>
</div>

                <div className="go-top-container">
  <div className="go-top">
    <button onClick={() => window.scrollTo(0, 0)} aria-label="Ir arriba">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
    </button>
  </div>
</div>

              </>
            }
          />
        

          <Route />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename="/Portfolio_carlossd">
      <App />
    </Router>
  );
}

export default AppWrapper;
