
function Projects(){
    return (
        <div className="container-fluid section">
        <div className="section-heading">Projects</div>
        <hr />

        <div className="fw-bold">E-Commmerce Auctions App</div>

        <div className="project">
        <div><span className="fw-bold">Technologies: </span>Django - SQLite - Bootstrap5</div>

        <li>Developed a user-friendly interface with robust user authentication and core functionalities for displaying auction listings, placing bids, and adding comments</li>
        <li>Integrated an admin panel for effective site management and user interaction control</li>
        <li>Designed and implemented Django models to efficiently manipulate and manage the SQLite database</li>
        </div>
        <div className="project">
        <div className="fw-bold">Personal Portfolio</div>
        <div><span className="fw-bold">Technologies: </span>ReactJS - SCSS - GSAP - EmailJS</div>

        <li>Designed a visually striking portfolio with unique and vibrant colors, beautiful animations, and a Pacman loader for an engaging user experience</li>
        <li>Implemented React Router DOM for seamless page navigation and utilized React Hooks for efficient state management and functional components</li>
        <li>Developed a fully functional Contact Us page using EmailJS, allowing users to easily reach out via email</li>
        </div><div className="project">
        <div className="fw-bold">Design Template</div>
        <div><span className="fw-bold">Technologies: </span>Bootstrap5 - ShapeDivider - Pixcap</div>

        <li>Crafted an aesthetically pleasing design with distinct sections and elegant separation using ShapeDivider for a cohesive look</li>
        <li>Integrated animated GIFs and 3D images from Pixcap to enhance visual appeal and interactivity</li>
        <li>Ensured full responsiveness across all devices for a seamless user experience</li>

        </div>
        </div>
    );
}

export default Projects;