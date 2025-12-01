import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import './components/css/style.css';


const App = () => {
    // You might use state here to manage the currently active section for highlighting in the menu
    const [activeSection, setActiveSection] = useState('home');

    // In a real app, you would use an Intersection Observer to update activeSection based on scroll position
    // For simplicity here, we'll just render the components.

    return (
        <>
            <Header activeSection={activeSection} />
            <Home />
            <Services />
            <Resume />
            <About />
            <Contact />
            {/* Add a Footer component if needed */}
        </>
    );
};

export default App;