import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typed from 'typed.js';

const Home = () => {

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

    const darkModeClass = modeType ? "home-dark-mode" : "";

    return (
        <>
            <div className={`home ml-300 ${darkModeClass}`}>
                <div className="box">
                    <img src={require('../assets/software-developer.png')} alt="" />
                    <h1>Vishal Gohil</h1>
                    <p>I'm  <span className="typing-element"></span></p>
                </div>
            </div>
        </>
    )
}

export default Home;
