
function Projects() {
    return (
        <div className="container-fluid section">
            <div className="section-heading">Projects</div>
            <hr />
            <div className="project">
                <div className="fw-bold">Personal Portfolio</div>
                <div><span className="fw-bold">Technologies: </span>ReactJS - SCSS - GSAP - EmailJS</div>

                <li>Designed a visually striking portfolio with unique and vibrant colors, beautiful animations, and a Pacman loader for an engaging user experience</li>
                <li>Implemented React Router DOM for seamless page navigation and utilized React Hooks for efficient state management and functional components</li>
                <li>Developed a fully functional Contact Us page using EmailJS, allowing users to easily reach out via email</li>
            </div>

            <div className="project">
                <div className="fw-bold">E-Commerce Auctions App</div>
                <div><span className="fw-bold">Technologies: </span>Django - SQLite - Bootstrap5</div>

                <li>Developed a user-friendly interface with robust user authentication and core functionalities for displaying auction listings, placing bids, and adding comments</li>
                <li>Integrated an admin panel for effective site management and user interaction control</li>
                <li>Designed and implemented Django models to efficiently manipulate and manage the SQLite database</li>
            </div>
            <div className="project">
                <div className="fw-bold">To-Do List</div>
                <div><span className="fw-bold">Technologies: </span>React Native - TypeScript - AsyncStorage - Expo</div>

                <li>Built a minimalistic and user-friendly to-do list app using React Native and TypeScript, ensuring type safety and scalability</li>
                <li>Implemented AsyncStorage for persistent task storage, allowing tasks to remain saved even after app reloads</li>
                <li>Utilized Native Components such as Text and View for UI elements and applied StyleSheet for a clean, minimalistic design</li>

            </div>
        </div>
    );
}

export default Projects;