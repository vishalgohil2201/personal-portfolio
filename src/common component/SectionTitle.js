import React from 'react'
import { useSelector } from 'react-redux'

const SectionTitle = ({ title }) => {
    let modeType = useSelector((state) => state.mode.modeValue);
    let darkModeClass = (modeType) ? "section-title-dark-mode" : "";
    return (
        <div className={`section-title ${darkModeClass}`}>
            <h3>{title}</h3>
            <div className='line'></div>
        </div>
    )
}

export default SectionTitle
