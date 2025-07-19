import './Projects.css';

const Project = () => {
    const projects = [
        {
            title: 'Color-Picker',
            image: '/color-wheel.png',
            link: 'https://vijayi6.github.io/color-picker/'
        },
        {
            title: 'Text-To-Speech',
            image: '/text-to-speech.png',
            link: 'https://vijayi6.github.io/text-to-speech/'
        },
        {
            title: 'Tic-Tac-Toe Game',
            image: '/tic-tac-toe.png',
            link: 'https://vijayi6.github.io/tic-tac-toe/'
        },
        {
            title: 'QR-Code Generator',
            image: '/qrCode.png',
            link: 'https://vijayi6.github.io/qr-generator/'
        },
        {
            title: 'Coming Soon',
            image: '/coming-soon.png',
            link: ''
        }
    ];

    return (
        <div className="project" id="projects">
            <div className="project-text">
                <h1>My Projects</h1>
            </div>

            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h2>{project.title}</h2>
                        <img src={project.image} alt={project.title} />
                        {project.link ? (
                            <a
                                href={project.link}
                                className="project-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View
                            </a>
                        ) : (
                            <span className="project-btn disabled">Coming Soon</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
