import { useState, useEffect } from 'react';

// Hook to detect which section is currently visible on scroll
export const useScrollSpy = (sectionIds = []) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

    useEffect(() => {
        // Create an observer instance
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // When a section enters the specified viewing area (isIntersecting), set it as active
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { 
                // rootMargin defines the viewing area. This setting makes the "active" section 
                // change when the next section is about 60% up the viewport.
                rootMargin: '0px 0px -60% 0px', 
                threshold: 0.1 // Trigger when 10% of the section is visible
            }
        );

        // Find and observe all sections listed in sectionIds
        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup: stop observing when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, [sectionIds]);

    return activeSection;
};