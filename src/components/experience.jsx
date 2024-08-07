 import './experience.css';
 import { MdOutlineWork } from "react-icons/md";


export function Experiencia() {

    return (
        <section id='experiencia'>
            <div className='insideExperiencia'>
                <MdOutlineWork />
                <h2>Experiencia laboral</h2>
            </div>
            <ol className="timeline">
                <li className="timeline-item">
                    <span className="timeline-icon">
                        <svg className="timeline-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="timeline-title">Freelancer - frontend web developer <span className="timeline-badge">Latest</span></h3>
                    <time className="timeline-time">desde enero del 2024</time>
                    <p className="timeline-description">He estado trabajando como programador freelancer desde el mes de enero del año 2024, realizando proyectos a agencias de viajes, proyectos personales y a clientes de mi ciudad.</p>
                </li>
                <li className="timeline-item">
                    <span className="timeline-icon">
                        <svg className="timeline-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="timeline-title">XMlinux - Desarrollador principal de la plataforma</h3>
                    <time className="timeline-time">Lanzado en diciembre del 2021</time>
                    <p className="timeline-description">Blog acerca de contenido basado en usuarios de linux y del mundo de la informática y el hacking ético.</p>
                </li>
            </ol>   
        </section>
    )
 }
