import React from 'react';

const About = () => {
    return (
        <section className="about active" id="about">
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-container">
                <div className="about-box">
                    <h3>My Journey</h3>
                    <p>
                        I'm Yinebeb Tibebu, a passionate Software Engineer from Kombolcha, Ethiopia. My journey in tech began with a curiosity for how things work, leading me to pursue a BSc in Software Engineering at ABC University. Over the years, I've honed my skills in web and mobile app development, as well as Python automation, working on projects that solve real-world problems.
                    </p>
                </div>
                <div className="about-box">
                    <h3>My Passion</h3>
                    <p>
                        I thrive on creating clean, efficient, and user-friendly solutions. Whether it's building a responsive website with React, crafting a mobile app with Flutter, or automating tasks with Python, I love turning ideas into reality. My passion for coding is matched by my commitment to continuous learning and staying updated with the latest technologies.
                    </p>
                </div>
                <div className="about-box">
                    <h3>My Vision</h3>
                    <p>
                        My goal is to leverage technology to make a positive impact. I aim to contribute to innovative projects that enhance lives and businesses, while collaborating with like-minded individuals. I believe in the power of code to transform ideas into tangible solutions, and I'm excited to be part of this ever-evolving industry.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;