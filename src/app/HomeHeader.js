'use client';
import React, {useState} from 'react';
import styles from "./HomeHeader.css"
import LoginModal from "@/app/components/LoginModal";

function HomeHeader(props) {
    const [loginModal, setLoginModal] = useState(false);

    const isLoggedIn=localStorage.getItem('isLoggedIn')==="true";

    function loginToggleHandler(){
        setLoginModal(prevLoginModal => !prevLoginModal);
        // console.log(loginModal)

    }

    return (
        <header>
            {loginModal&&<LoginModal toggleModal={loginToggleHandler}/>}
            <div id="bar">
                <img src="LOGO-02%203.svg" alt="Redberry logo"/>

                {isLoggedIn ? <button>დაამატე ბლოგი</button> : <button onClick={loginToggleHandler}>შესვლა</button>}
            </div>

            <div id="title">
            <h1>ბლოგი</h1>
                <img src="Blog-1024x355 1.svg" alt=""/>


            </div>


        </header>
    );
}

export default HomeHeader;