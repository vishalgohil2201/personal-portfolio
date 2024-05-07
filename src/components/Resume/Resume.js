import React from 'react'
import { FaEye } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import SectionTitle from '../../common component/SectionTitle';
import { useSelector } from 'react-redux';

const Resume = () => {
  let modeType = useSelector((state) => state.mode.modeValue);
  let darkModeClass = (modeType) ? "resume-dark-mode" : "";
  let showUrl = 'https://drive.google.com/file/d/1GkAYOIH-Kgq_URfFwXHStf5Ki48zhr3p/view?usp=sharing';
  let downloadUrl = "https://drive.google.com/uc?export=download&id=1GkAYOIH-Kgq_URfFwXHStf5Ki48zhr3p";
  return (
    <>
      <section className={`p-5 px-md-5 py-sm-5 px-xl-5 resume ml-300 d-flex flex-column justify-content-between ${darkModeClass}`}>

        <SectionTitle title={"Resume Source"}></SectionTitle>
        <div className='box d-flex flex-column flex-sm-row align-items-center justify-content-center'>
          <div>
            <a href={showUrl} className='btn-1 m-3 text-center d-inline-block'>Show CV <FaEye /></a>
          </div>
          <div>
            <a href={downloadUrl} className='btn-2 m-3 text-center d-inline-block' download>Download CV <HiDownload /></a>
          </div>
        </div>
      </section>
    </>

  )
}

export default Resume
