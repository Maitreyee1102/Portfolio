import React from "react";
import styles from './Achievements.module.css';

function Achievements(){
    return(
        <div className={styles.achieve} >
        <h1>Achievements</h1>
        <div className={styles.list}>
        <p>1. Solved more than 300 questions on leetcode,codeforces and other platforms.</p>
        <p>2. Web Developer at IEEE Student branch.</p>
        <p>3. I was part of CP domain at GDG LNMIIT</p>
        </div>

        </div>
    )
}

export default Achievements;