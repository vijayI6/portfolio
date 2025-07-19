import './Experience.css';

const experiences = [
    {
        date: "May - June 2025",
        title: "Full Stack Web Development Intern",
        company: "Smart Bridge",
        points: [
            "Completed a full-stack internship using the MERN stack.",
            "Built hands-on projects applying modern web development practices.",
            "Worked with MongoDB, Express.js, React.js, and Node.js."
        ]

    },
    {
        date: "May - June 2024",
        title: "Web Development Intern",
        company: "CSEDGE",
        points: [
            "Built a Tic-Tac-Toe game application.",
            "Developed a counter and calculator.",
            "Implemented a responsive, Desktop-first design."
        ]

    },
    {
        date: "May – July 2024",
        title: "Artificial Intelligence & Machine Learning Virtual Intern",
        company: "Eduskills",
        points: [
            "Performed sentiment analysis on Amazon product reviews.",
            "Utilized NLP techniques and Scikit-learn for data processing and modeling.",
            "Achieved high classification accuracy on sentiment predictions."
        ]

    },
];

const Experience = () => {
    return (
        <section className="experience-flow" id='experience'>
            <h2 className="experience-title">Experience</h2>
            <div className="timeline-flow">
                {experiences.map((exp, index) => (
                    <div key={index} className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}>
                        <div className="timeline-card">
                            <span className="timeline-date">{exp.date}</span>
                            <h3 className="timeline-role">{exp.title}</h3>
                            <p className="timeline-company">{exp.company}</p>
                            <ul className="timeline-points">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                        <span className="timeline-circle" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
