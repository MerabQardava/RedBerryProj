import React from 'react';
import BlogHeader from "@/app/AddBlog/BlogHeader";
import BackButton from "@/app/AddBlog/BackButton";
import FormsBox from "@/app/AddBlog/FormsBox";
import styles from "./page.css"
function Page(props) {
    return (
        <div id="addBlogContainer">
            <BlogHeader/>
            <BackButton/>
            <FormsBox/>

        </div>

    );
}

export default Page;