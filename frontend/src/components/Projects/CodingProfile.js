import React from 'react';
import styles from './CodingProfile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function CodingProfile(){
    return(
        <div className={styles.container}>
        <h1>Link To Coding Profiles</h1>
        <div className={styles.link}>
        <a href="https://leetcode.com/u/Maitreyee_Kulkarni/"><FontAwesomeIcon icon={faLink} size="1x"></FontAwesomeIcon> Link to Leetcode Profile</a>
        <a href="https://codeforces.com/profile/Maitreyee_Kulkarni"><FontAwesomeIcon icon={faLink} size="1x"></FontAwesomeIcon> Link to Codeforces Profile</a>
        <a href="https://www.geeksforgeeks.org/user/22uccyelv/"><FontAwesomeIcon icon={faLink} size="1x"></FontAwesomeIcon> Link to GFG Profile</a>
        </div>
        </div>
    );
}

export default CodingProfile;