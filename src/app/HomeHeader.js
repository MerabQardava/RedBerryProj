'use client';
import React, {useEffect, useState} from 'react';
import styles from "./HomeHeader.css"
import LoginModal from "@/app/components/LoginModal";
import Link from "next/link";

function HomeHeader(props) {
    const [loginModal, setLoginModal] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn')==="true")

    }, []);


    function toggleLoggedIn(){
        setIsLoggedIn(localStorage.getItem('isLoggedIn')==="true")
    }


    function loginToggleHandler(){
        setLoginModal(prevLoginModal => !prevLoginModal)
        // console.log(loginModal)

    }

    return (
        <header>
            {loginModal&&<LoginModal toggleLoginHandler={toggleLoggedIn} toggleModal={loginToggleHandler}/>}
            <div id="bar">
                <img src="LOGO-02%203.svg" alt="Redberry logo"/>

                {isLoggedIn ? <Link href="AddBlog"><button>დაამატე ბლოგი</button></Link>
                    : <button onClick={loginToggleHandler}>შესვლა</button>}
            </div>

            <div id="title">
            <p>ბლოგი</p>
                <img src="Blog-1024x355 1.svg" alt=""/>


            </div>


        </header>
    );
}

export default HomeHeader;