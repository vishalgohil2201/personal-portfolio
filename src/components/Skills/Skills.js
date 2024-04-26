import React from 'react'
import SectionTitle from '../../common component/SectionTitle'
import { useSelector } from 'react-redux'

const Skills = () => {
  let modeType = useSelector((state) => state.mode.modeValue);
  let darkModeClass = (modeType) ? "skills-dark-mode" : "";
  return (
    <section className={`skills ml-300 h-100 ${darkModeClass}`}>
      <div className='p-3 px-md-5 py-sm-5 px-xl-5 '>
        <SectionTitle title={"Skills"}></SectionTitle>
        <div className="main-box frontend-box">
          <h3 className='text-center'>Frontend Developer</h3>
          <div className="f-skills d-flex flex-wrap justify-content-center">
            <div className="col-6 col-sm-4 py-3">
              <div className="box">
                <img src={require('../assets/html.png')} alt="" />
                <strong>HTML</strong>
                <span className='d-block'>90%</span>
              </div>
            </div>
            <div className="col-6 col-sm-4 py-3">
              <div className="box">
                <img src={require('../assets/css-3.png')} alt="" />
                <strong>CSS</strong>
                <span className='d-block'>90%</span>
              </div>
            </div>
            <div className="col-6 col-sm-4 py-3">
              <div className="box">
                <img src={require('../assets/js.png')} alt="" />
                <strong>JavaScript</strong>
                <span className='d-block'>85%</span>
              </div>
            </div>
            <div className="col-6 col-sm-4 py-3">
              <div className="box">
                <img src={require('../assets/bootstrap.png')} alt="" />
                <strong>Bootstrap</strong>
                <span className='d-block'>90%</span>
              </div>
            </div>
            <div className="col-6 col-sm-4 py-3">
              <div className="box">
                <img src={require('../assets/icons8-tailwind-css-256.png')} alt="" />
                <strong>Tailwind</strong>
                <span className='d-block'>80%</span>
              </div>
            </div>
            <div className="col-6 col-sm-4 py-3">
              <div className="box">
                <img src={require('../assets/physics.png')} alt="" />
                <strong>React JS</strong>
                <span className='d-block'>90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-box backend-box">
          <h3 className='text-center'>Backend Developer</h3>
          <div className="f-skills d-flex flex-wrap justify-content-center">
            <div className="col-6 col-sm-3 py-3">
              <div className="box">
                <img src={require('../assets/icons8-node-js-256.png')} alt="" />
                <strong>Node JS</strong>
                <span className='d-block'>90%</span>
              </div>
            </div>
            <div className="col-6 col-sm-3 py-3">
              <div className="box express-box">
                <img src={require('../assets/icons8-express-js-256.png')} alt="" />
                <strong>Express JS</strong>
                <span className='d-block'>90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-box backend-box">
          <h3 className='text-center'>Database</h3>
          <div className="f-skills d-flex flex-wrap justify-content-center">
            <div className="col-6 col-sm-3 py-3">
              <div className="box">
                <img src={require('../assets/icons8-mongodb-256.png')} alt="" />
                <strong>Mongo DB</strong>
                <span className="d-block">90%</span>
              </div>
            </div>
            <div className="col-6 col-sm-3 py-3">
              <div className="box express-box">
                <img src={require('../assets/icons8-mysql-256.png')} alt="" className='mysql' />
                <strong>MySql</strong>
                <span className="d-block">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
