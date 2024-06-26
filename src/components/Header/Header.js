import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaRegFile, FaTwitter } from "react-icons/fa";
import { IoCloseSharp, IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaBarsStaggered } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SiHyperskill } from 'react-icons/si';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../redux/slices/modeSlice';

const Header = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const currentURL = location.hash;
    let [url, setUrl] = useState(location.hash);
    console.log(currentURL);
    const [temp, setTemp] = useState(false);
    // const [activeLink, setActiveLink] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    // const navigate = useNavigate();


    useEffect(() => {
        setUrl(currentURL);
        // localStorage.clear('activeLink');
    }, [currentURL]);

    useEffect(() => {
        dispatch(changeMode(isChecked));
    }, [isChecked, dispatch]);

    const openSlideBar = () => {
        setTemp(!temp);
    };

    // const handleNavClick = (link) => {
    //     navigate(link);
    //     openSlideBar();
    // };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    let darkModeClass = (isChecked) ? "header-dark-mode" : '';
    let darkmodeClass2 = (isChecked) ? "menu-btn-dark-mode" : " ";

    return (
        <>
            <header id="header" className={`${darkModeClass}`} style={{
                transform: (temp === true) ? "translateX(0px)" : "translateX(-300px)"
            }}>
                <div className="d-flex flex-column position-relative h-100">
                    <div className="profile">
                        <img src={require('../../assets/profile-img.jpeg')} alt="" className="img-fluid rounded-circle" />
                        <h1><a href="a">Vishal Gohil</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://github.com/vishalgohil2201"><FaGithub /></a>
                            <a href="https://twitter.com/VishalGohil089"><FaTwitter /></a>
                            <a href="https://www.linkedin.com/in/vishalgohil089"><FaLinkedinIn /></a>
                        </div>
                        <div className="toggle-switch mx-auto mt-2">
                            <label className="switch-label">
                                <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                                <span className="slider" />
                            </label>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href='#home-page' className={`nav-link ${(url === '#home-page' || url === '') ? 'active' : ''}`}><IoHomeOutline /> <span>Home</span></a></li>
                            <li><a href='#about-page' className={`nav-link ${url === '#about-page' ? 'active' : ''}`}><FiUser /> <span>About</span></a></li>
                            <li><a href='#skills-page' className={`nav-link ${url === '#skills-page' ? 'active' : ''}`}><SiHyperskill /> <span>Skills</span></a></li>
                            <li><a href='#resume-page' className={`nav-link ${url === '#resume-page' ? 'active' : ''}`} ><FaRegFile /> <span>Resume</span></a></li>
                            <li><a href='#contact-page' className={`nav-link ${url === '#contact-page' ? 'active' : ''}`} ><FaRegEnvelope /> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                    <div className='position-absolute bottom-0 start-0 text-center bottom-text w-100'>
                        <p className='m-0'>Designed and Developed</p>
                        <p>by<b> Vishal Gohil</b></p>
                    </div>
                </div>
            </header>
            <div className={`menu-btn d-lg-none ${darkmodeClass2}`}>
                <button onClick={openSlideBar}>
                    <FaBarsStaggered style={{ display: (temp === false) ? 'block' : 'none' }} />
                    <IoCloseSharp style={{ display: (temp === true) ? 'block' : 'none' }} />
                </button>
            </div>
        </>
    );
};

export default Header;
