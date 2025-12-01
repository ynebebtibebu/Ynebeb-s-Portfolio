import { useState, useEffect } from 'react';

// This hook manages the state for opening/closing the mobile menu 
// and handles closing the menu when the user clicks outside.
export const useMenu = (headerRef) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    // useEffect handles event listeners for outside clicks
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click is outside the header/menu container
            // and the menu is currently open.
            if (isMenuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        // Add event listener for clicks anywhere on the document
        document.addEventListener('click', handleOutsideClick);

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [headerRef, isMenuOpen]); // Dependency on headerRef (DOM element) and isMenuOpen state

    return { isMenuOpen, toggleMenu, setIsMenuOpen };
};
