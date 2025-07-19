import './Home.css';
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.roles', {
      strings: ['MERN Stack Developer', 'Power BI Analyst', 'Python Programmer', 'Front-end Developer'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <div className="home" id="home">
        <div className="home-container">
          <div className="text">
            <h3>Hi, It's Me</h3>
            <h1><span className="letter head">Rayalavarapu Sai Vijay</span></h1>
            <h3>And I'm a <span className="roles"></span></h3>
            <p>
              Passionate developer skilled in creating responsive web applications using the MERN stack.
              Experienced in Problem-Solving using Python and building interactive dashboards with Power BI.
              Eager to contribute to innovative teams and continuously enhance my skills.
            </p>
            <a href="/myResume.pdf" className="btn" download="Sai_Vijay_Resume.pdf">Download Resume</a>
          </div>
          <img src="/dp.png" alt="dp Photo" className="image" />
        </div>
      </div>
    </>
  );
};

export default Home;
