import React from 'react';
import styles from "./HomeHeader.css"
function HomeHeader(props) {
    return (
        <header>
            <div id="bar">
                <img src="LOGO-02%203.svg" alt="Redberry logo"/>
                <button>შესვლა</button>
            </div>

            <div id="title">
                <h1>ბლოგი</h1>
                <img src="Blog-1024x355 1.svg" alt=""/>

            </div>


        </header>
    );
}

export default HomeHeader;