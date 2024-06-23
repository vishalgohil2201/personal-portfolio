import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Typed from 'typed.js';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import { BiUpArrowAlt } from 'react-icons/bi';

const Home = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    let modeType = useSelector((state) => state.mode.modeValue);

    useEffect(() => {
        const strings = ['MERN Stack Developer.', 'Full-Stack Web Developer.', 'Front-End Developer.', 'Back-End Developer.'];

        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };

        const typed = new Typed('.typing-element', options);

        return () => {
            typed.destroy();
        };
    }, []);
    <p>I'm  <span className="typing-element"></span></p>

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const darkModeClass = modeType ? "home-dark-mode" : "";
    const darkModeClass2 = modeType ? "scroll-dark-mode" : "";

    const scrollOnTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <section className={`home ml-300 ${darkModeClass}`} id='home-page'>
                <div className="box">
                    <img src={require('../../assets/software-developer.png')} alt="" />
                    <h1>Vishal Gohil</h1>
                    <p>I'm  <span className="typing-element"></span></p>
                </div>
            </section>
            {showScrollButton && <div className={`scroll-top ${darkModeClass2}`} onClick={scrollOnTop}><BiUpArrowAlt /></div>}

            <About></About>
            <Skills></Skills>
            <Resume></Resume>
            <Contact></Contact>
        </>
    )
}

export default Home;
