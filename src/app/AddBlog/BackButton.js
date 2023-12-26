import React from 'react';
import styles from "./BackButton.css"
import Link from "next/link";

function BackButton(props) {
    return (
        <Link href="/">
            <img src="Arrow (1).svg" id="backButton" alt="back button"/>
        </Link>
    );
}

export default BackButton;