import React from 'react'
import { PiPaperPlaneRightLight } from 'react-icons/pi'
import SectionTitle from '../../common component/SectionTitle'
import { useSelector } from 'react-redux'

const About = () => {

    const modeType = useSelector((state) => state.mode.modeValue)
    let darkModeClass = (modeType) ? "about-dark-mode" : '';
    return (
        <>
            <section className={`ml-300 about d-md-flex align-items-center ${darkModeClass}`}>
                <div className='p-4 px-md-5 py-sm-5 px-xl-5'>
                    <SectionTitle title={"About"}></SectionTitle>
                    <div className='my-about'>
                        <p className='m-0'>Hello everyone, I'm Vishal, and I'm excited to introduce myself as a budding MERN stack developer. Having recently running my education in Bachelor of Computer Application, I've embarked on a journey to explore the dynamic realm of web development. With a keen interest in building robust and user-friendly applications, I've immersed myself in mastering the MERN stack - MongoDB, Express.js, React.js, and Node.js.</p>
                    </div>
                    <div className='my-information'>
                        <h4>MERN Stack Developer / Full Stack Web Developer</h4>
                    </div>
                    <div className="details d-flex flex-wrap mt-4">
                        <div className="col-12 col-md-6 my-2">
                            <div className='d-flex align-items-center'>
                                <PiPaperPlaneRightLight />
                                <strong className='ms-2'>
                                    Name:
                                </strong>
                                <span className='ms-2'>Vishal Gohil</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <div className='d-flex align-items-center'>
                                <PiPaperPlaneRightLight />
                                <strong className='ms-2'>
                                    Email:
                                </strong>
                                <span className='ms-2'>vishalgohil424@gmail.com</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <div className='d-flex align-items-center'>
                                <PiPaperPlaneRightLight />
                                <strong className='ms-2'>
                                    Phone:
                                </strong>
                                <span className='ms-2'>+91 85117 26017</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <div className='d-flex align-items-center'>
                                <PiPaperPlaneRightLight />
                                <strong className='ms-2'>
                                    City:
                                </strong>
                                <span className='ms-2'>Surat</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <div className='d-flex align-items-center'>
                                <PiPaperPlaneRightLight />
                                <strong className='ms-2'>
                                    State:
                                </strong>
                                <span className='ms-2'>Gujarat</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <div className='d-flex align-items-center'>
                                <PiPaperPlaneRightLight />
                                <strong className='ms-2'>
                                    Country:
                                </strong>
                                <span className='ms-2'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-about">
                        <p className='m-0'>
                            I am particularly drawn to the collaborative nature of web development and thrive in environments where I can contribute my ideas while also learning from others. As a fresher in this field, I am eager to embark on new opportunities where I can leverage my passion for coding and my dedication to continuous learning.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
