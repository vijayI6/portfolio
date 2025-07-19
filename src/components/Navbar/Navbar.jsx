import { useEffect, useState } from 'react';
import './Navbar.css';

const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            let current = '';
            sections.forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = id;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                    <h1 className="username"><span id="letter">V</span>ijay.</h1>
                </a>
            </div>

            <div className="navbar-right">
                {sections.map((id) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={activeSection === id ? 'active' : ''}
                        onClick={(e) => handleNavClick(e, id)}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
