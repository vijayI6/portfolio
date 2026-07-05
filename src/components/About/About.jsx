import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="column-1">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-text">
                        As a Computer Science student, I am a passionate and curious developer with a strong background in Python programming and full-stack web development using the MERN stack. I enjoy solving real-world problems through code and bringing ideas to life through intuitive and responsive user interfaces.

                        My journey in tech started with Python, where I developed strong problem-solving skills through consistent practice and hands-on projects. I then ventured into web development, building dynamic applications that are not only functional but also user-friendly.

                        Along the way, I’ve explored data visualization, creating insightful dashboards with Power BI to turn raw data into meaningful stories.
                    </p>
                </div>
                <div className="about-stats">
                    <div className="stat-item">
                        <div className="stat-number">3+</div>
                        <div className="stat-label">Internships Completed</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">8+</div>
                        <div className="stat-label">Projects Built</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Technologies Mastered</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">2026</div>
                        <div className="stat-label">Expected Graduation</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
