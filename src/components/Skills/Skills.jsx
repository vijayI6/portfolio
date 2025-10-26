import './Skills.css';

const technicalSkills = [
    { name: 'HTML5 / CSS3 / JavaScript', level: 92, color: '#d44a0f' },
    { name: 'MongoDB', level: 90, color: '#0fd46b' },
    { name: "Express.js", level: 90, color: '#edd609' },
    { name: 'React.js', level: 85, color: '#099ded' },
    { name: 'Node.js', level: 85, color: '#33b319' },
    { name: 'Python', level: 90, color: '#3b82f6' },
    { name: 'MySql', level: 80, color: '#c3d8e3' },
    { name: 'Bootstrap', level: 90, color: '#07c9f0' },
    { name: 'Git & GitHub', level: 85, color: '#d44a0f' }
];

const professionalSkills = [
    'Problem Solving',
    'Adaptability',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Willingness to Learn'
];

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title">Skills & Expertise</h2>

            <div className="skills-container">

                <div className="skills-column">
                    <h3 className="skills-subtitle">Technical Skills</h3>
                    {technicalSkills.map((skill, index) => (
                        <div key={index} className="skill-bar">
                            <div className="skill-info">
                                <span>{skill.name}</span>
                            </div>
                            <div className="bar-background">
                                <div
                                    className="bar-fill"
                                    style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-column">
                    <h3 className="skills-subtitle">Professional Skills</h3>
                    <ul className="professional-skills">
                        {professionalSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
