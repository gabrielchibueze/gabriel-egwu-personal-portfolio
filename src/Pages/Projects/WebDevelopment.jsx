import { Link } from 'react-router-dom'
import projectsList from '../../projects/projectList'
// import github from '../images/github.svg';

// import projectsList from '../project-data'
import "./Aprojects.css"

export default function webDevelopment() {
    console.log(projectsList)
    const recentProjects = projectsList.map((project, index) => {
        return (
            <div className="projects__box" key={index + 1}>
                <div className="projects__description">
                    <h2>{index + 1}. {project.title}</h2>
                    <p>{project.description}</p>
                    {project.tools.map((tool, index) => {
                        return (
                            <ul key={index + 1} className="projects__list">
                                <li>{tool}</li>
                            </ul>
                        )
                    })}

                    <div className="projects__links">
                        <Link to={project.projectlink} title='visit site' target="_blank" className="link__text">
                            <span className='site-link' >Visit Site</span> <span>&rarr;</span>
                        </Link>
                        <Link to={project.githublink} title="View Source Code" target="_blank">
                            <img src={`${project.githubicon}`} className="projects__github-icon" alt="GitHub" />
                        </Link>
                    </div>
                </div>
                <div className="projects__image-box">
                    <img src={`${project.projectimage}`} className="projects__image" alt={`Project ${index + 1}`} />
                </div>
            </div>

        )
    })
    return (
        <div>
            <h1>Recent Projects</h1>
            <section  className="layout-main">
                {recentProjects}
            </section>


            {/* Future Projects */}

            {/* <section>
                <h2>Personal Portfolio</h2>
                <div className="row">
                    <h3>You can view the source code of this my personal portfolio on my Github repositories</h3>
                    <div className="projects__links">
                    <Link to="https://github.com/gabrielchibueze/gabriel-egwu-portfolio" target="_blank" className="link__text">
                     See my repo on Github <span>&rarr;</span>
                    </Link>
                    <Link to="https://github.com/gabrielchibueze/gabriel-egwu-portfolio" title="View Source Code" target="_blank">
                    <img src={github} className="projects__code" alt="GitHub"/>
                    </Link>
                    </div>
                </div>
            </section>

            <div className="hire-me">
                <h2>Hire me</h2>
                <div className="row hire-contact">
                    <h3>I am open to offers... Hire me</h3>
                    <Link to="/contact" className="btn btn--pink hire">Get in touch</Link>
                </div>
            </div> */}
        </div >
    )
}
