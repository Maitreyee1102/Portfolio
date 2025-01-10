import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <div className={styles.container}>
        <div className={styles.head}>
        <div>
        <h1>Maitreyee Kulkarni</h1>
        <p>An engineering enthusiast</p>
        </div>
        <div>
        <h1>SOCIAL</h1>
        <div className={styles.social}>
        <Link to="https://github.com/Maitreyee1102"><FontAwesomeIcon className={styles.icon} size="lg" icon={faGithub}></FontAwesomeIcon></Link>
        <Link to="https://www.instagram.com/maitreyee_1102/"><FontAwesomeIcon className={styles.icon} size="lg" icon={faInstagram}></FontAwesomeIcon></Link>
        <Link to="https://www.linkedin.com/in/maitreyee-kulkarni-b94141259/"><FontAwesomeIcon  className={styles.icon} size="lg" icon={faLinkedin}></FontAwesomeIcon></Link>
        </div>
        </div>
        </div>
        <hr></hr>
        <p className={styles.para}>© Copyright 2025.Design and developed by Maitreyee Kulkarni</p>
        </div>

    );
}

export default Footer;
