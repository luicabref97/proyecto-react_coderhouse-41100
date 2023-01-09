import React from 'react'
import { useDarkModeContext } from '../../Context/DarkModeContext'
import linkedinLight from '../../assets/images/linkedin-light.svg'
import linkedin from '../../assets/images/linkedin.svg'
import githubLight from '../../assets/images/github-light.svg'
import github from '../../assets/images/github.svg'
import linkedinBlue from '../../assets/images/linkedin-blue.svg'
import githubBlue from '../../assets/images/github-blue.svg'

const Footer = () => {
    const {darkMode} = useDarkModeContext()
    const changeBlueLinkedin = e => {
        e.target.src = linkedinBlue
    }
    const changeWhiteLinkedin = e => {
        e.target.src = linkedinLight
    }
    const changeBlueGit = e => {
        e.target.src = githubBlue
    }
    const changeWhiteGit = e => {
        e.target.src = githubLight
    }
    return (
        <footer className={`w-full ${darkMode ? 'bg-dark-blue' : 'bg-white'}`}>
            <hr className={`w-full bg-light-gray ${darkMode ? "text-gray-text-secondary" : "text-light-gray"}`} />
            <div className={`flex justify-between items-center gap-6 p-6 sm-max:flex-col ${darkMode ? 'bg-dark-blue text-white' : 'bg-white text-dark-gray-text'}`}>
                <div>Copyright © 2023, All Right Reserved</div>
                <div>Powered by: <span className='font-bold'>Luis Cabrera</span></div>
                <div className='flex gap-4 justify-center items-center'>
                    <a target='_blank' rel='noreferrer' href={'https://www.linkedin.com/in/ing-luis-cabrera/'}>
                        <img onMouseEnter={changeBlueLinkedin} onMouseLeave={changeWhiteLinkedin} src={`${darkMode ? linkedinLight : linkedin}`} alt="Linkedin" />
                    </a>
                    <a target='_blank' rel='noreferrer' href={'https://github.com/luicabref97'}>
                        <img onMouseEnter={changeBlueGit} onMouseLeave={changeWhiteGit} src={`${darkMode ? githubLight : github}`} alt="Github" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer