import React from 'react';
// 1. Import the image file for Vite/Webpack to correctly bundle the path
import profileImage from '../assets/images/photo.jpg'; 

const Home = () => {
    // Array of roles is optional here, as the rotation is handled by CSS/JS animation
    const roles = ["Software Engineer", "Coder"];

    return (
        <section className="home active" id="home">
            <div className="home-detail">
                <h1>Ynebeb Tibebu</h1>
                <h2>
                    {/* Added space here */}
                    I'm a{' '}
                    {/* The inline styles will be kept, but in a real React app, you'd use a CSS class for animations */}
                    <span style={{ '--i': 2 }} data-text="Software Engineer">Software Engineer</span>
                    <span style={{ '--i': 1 }} data-text="Fullstack Developer">Fullstack Developer</span> 
                    
                </h2>
                <p>
                    Welcome to my portfolio! I'm passionate about coding and building awesome projects.
                </p>
                <div className="btn-sci">
                    <a href="/cv" className="btn">Download CV</a>
                    <div className="sci">
                        <a href="https://github.com/ynebebtibebu" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ynebebtibebu" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a href="https://discord.com/users/ynebebtibebu" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-discord"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="home-img">
                <div className="img-box">
                    <div className="img-item">
                        {/* 2. Use the imported variable for the image source */}
                        <img src={profileImage} alt="Profile Picture" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;