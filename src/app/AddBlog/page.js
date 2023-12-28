'use client'
import React, {useState} from 'react';
import BlogHeader from "@/app/AddBlog/BlogHeader";
import BackButton from "@/app/AddBlog/BackButton";
import FormsBox from "@/app/AddBlog/FormsBox";
import styles from "./page.css"
import BlogSuccess from "@/app/AddBlog/BlogSuccess";



function Page(props) {
    const [blogCreated, setBlogCreated] = useState(false)


    function toggleSuccessModal(){
        setBlogCreated(val=>!val)
        // console.log("mechiko")
        if(localStorage){
            localStorage.setItem('image', "")
            localStorage.setItem('author', "")
            localStorage.setItem('title', "")
            localStorage.setItem('description', "")
            localStorage.setItem('publish_dat', "")
            localStorage.setItem('email', "")
            localStorage.setItem('categories', "[]")

        }


    }

    return (
        <div id="addBlogContainer">
            <BlogHeader/>
            <BackButton/>
            <FormsBox toggleModal={toggleSuccessModal}/>
            {blogCreated&&<BlogSuccess toggleModal={toggleSuccessModal}/>}

        </div>

    );
}

export default Page;