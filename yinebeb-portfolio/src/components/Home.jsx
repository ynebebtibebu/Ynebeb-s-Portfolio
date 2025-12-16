import React from 'react';
import profileImage from '../assets/images/photo5.jpg';

const Home = () => {

    const handleDownloadCV = () => {
        // Force a real browser navigation (bypasses SPA + cache issues)
        window.location.href = '/cv/Yinebeb_CV.pdf';
    };

    return (
        <section className="home active" id="home">
            <div className="home-detail">
                <h1>Ynebeb Tibebu</h1>

                <h2>
                    I'm a{' '}
                    <span style={{ '--i': 2 }} data-text="Software Engineer">
                        Software Engineer
                    </span>
                    <span style={{ '--i': 1 }} data-text="Fullstack Developer">
                        Fullstack Developer
                    </span>
                </h2>

                <p>
                    Welcome to my portfolio! I'm passionate about coding and building awesome projects.
                </p>

                <div className="btn-sci">
                    {/* ✅ VERCEL-PROOF DOWNLOAD BUTTON */}
                    <button
                        type="button"
                        className="btn"
                        onClick={handleDownloadCV}
                    >
                        Download CV
                    </button>

                    <div className="sci">
                        <a
                            href="https://github.com/ynebebtibebu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bx bxl-github"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ynebebtibebu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bx bxl-linkedin"></i>
                        </a>

                        <a
                            href="https://discord.com/users/ynebebtibebu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bx bxl-discord"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="home-img">
                <div className="img-box">
                    <div className="img-item">
                        <img src={profileImage} alt="Profile Picture" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
