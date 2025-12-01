import React from 'react';

// You could extract this data into a separate file for a cleaner structure
const educationData = [
    { title: "BSc in Software Engineering", details: "Wollo University, KIOT campuss, 2019 - 2023", small: "Learned full-stack development, algorithms, databases, and agile methodologies." },
    { title: "Web Development Bootcamp", details: "Online, 2022", small: "Completed intensive training in HTML, CSS, JavaScript, and Python." }
];

const experienceData = [
    { title: "Frontend Developer - Freelance", details: "2023 - Present", small: "Built responsive websites for small businesses using React and Tailwind CSS." },
    { title: "Intern Software Developer", details: "XYZ Tech, Summer 2022", small: "Worked on internal tools using Python, Flask, and PostgreSQL." }
];

const skillsData = [
    { name: "HTML / CSS", percentage: "95%" },
    { name: "JavaScript", percentage: "40%" },
    { name: "Python", percentage: "90%" },
    { name: "Flutter / Kotlin", percentage: "50%" }
];

const Resume = () => {
    return (
        <section className="resume active" id="resume">
            <h2 className="heading">My <span>Resume</span></h2>
            <div className="resume-container">
                
                {/* Education Column */}
                <div className="resume-column">
                    <h3 className="resume-title"><i className='bx bx-book'></i> Education</h3>
                    {educationData.map((item, index) => (
                        <div className="resume-box" key={`edu-${index}`}>
                            <h4>{item.title}</h4>
                            <p>{item.details}</p>
                            <small>{item.small}</small>
                        </div>
                    ))}
                </div>

                {/* Experience Column */}
                <div className="resume-column">
                    <h3 className="resume-title"><i className='bx bx-briefcase'></i> Experience</h3>
                    {experienceData.map((item, index) => (
                        <div className="resume-box" key={`exp-${index}`}>
                            <h4>{item.title}</h4>
                            <p>{item.details}</p>
                            <small>{item.small}</small>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <h3 className="resume-title"><i className='bx bx-bar-chart'></i> Skills</h3>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div className="skill-bar" key={`skill-${index}`}>
                        <span>{skill.name}</span>
                        <div className="progress">
                            {/* React uses camelCase for style properties */}
                            <div className="progress-fill" style={{ width: skill.percentage }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Resume;