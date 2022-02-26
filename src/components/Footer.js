import React from 'react';
import githubIcon from '../images/github-square-brands.svg';
import linkedInIcon from '../images/linkedin-brands.svg';

const Footer = () => {
    return <footer>
           <p>
                <a className='footer-links' href="https://github.com/jordyf15" target="_blank" rel="noreferrer">
                    {/* <img className='footer-link-icons' src={githubIcon} alt='github icon'/> */}
                </a> 
                <span id='footer-text'>Created by Jordy Ferdian</span>
                <a className='footer-links' href="https://www.linkedin.com/in/jordy-ferdian-3606041a7/" target="_blank" rel="noreferrer">
                    {/* <img className='footer-link-icons' src={linkedInIcon} alt='linkedin icon'/> */}
                </a>
            </p>
    </footer>
};

export default Footer;