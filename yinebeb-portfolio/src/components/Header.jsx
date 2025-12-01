import React, { useRef } from 'react';
// Import the custom hooks
import { useMenu } from '../hooks/useMenu'; 
import { useScrollSpy } from '../hooks/useScrollSpy'; 

const Header = () => {
    const headerRef = useRef(null);
    // List all section IDs that should be monitored
    const sections = ["home", "services", "resume", "about", "contact"];
    
    const { isMenuOpen, toggleMenu, setIsMenuOpen } = useMenu(headerRef);
    // Call the scroll spy hook to get the currently active section ID
    const activeSection = useScrollSpy(sections); 

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        
        // Smooth Scroll functionality
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        // Close mobile menu after click
        setIsMenuOpen(false);
    };

    return (
        <header ref={headerRef} className={activeSection === 'home' ? 'sticky' : ''}>
            <a href="#home" className="logo">Yinebeb.</a>
            
            <i 
                className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} 
                id="menu-icon" 
                onClick={toggleMenu}
            ></i>
            
            <nav className={isMenuOpen ? 'active' : ''}>
                {sections.map(section => (
                    <a 
                        key={section}
                        href={`#${section}`}
                        // CRITICAL LINE: Applies the 'active' class when the link's href matches the current active section
                        className={activeSection === section ? 'active' : ''}
                        onClick={(e) => handleLinkClick(e, section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;