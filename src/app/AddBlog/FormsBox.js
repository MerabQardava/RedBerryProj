'use client'
import React, {useState} from 'react';
import styles from "./FormsBox.css"
import UploadImageBox from "@/app/AddBlog/UploadImageBox";
import UploadedImg from "@/app/AddBlog/UploadedImg";
import AuthorInput from "@/app/AddBlog/AuthorInput";
import TitleInput from "@/app/AddBlog/TitleInput";
import DescriptionInput from "@/app/AddBlog/DescriptionInput";
import DateInput from "@/app/AddBlog/DateInput";
import CategoriesBar from "@/app/components/CategoriesBar";
import CategoryInput from "@/app/AddBlog/CategoryInput";
import BlogEmailInput from "@/app/AddBlog/BlogEmailInput";

function FormsBox(props) {
    const [uploadedImage, setUploadedImage] = useState(null)

    function getImage(image) {
        setUploadedImage(image)
    }



    function onFormSubmitHandler(event) {
        event.preventDefault();

    }

    return (
        <div id="formsContainer">
            <p>ბლოგის დამატება</p>
            <form onSubmit={onFormSubmitHandler}>
                <p>ატვირთეთ ფოტო</p>
                {
                    uploadedImage === null ?
                        <UploadImageBox getImage={getImage}/> :
                        <UploadedImg img={uploadedImage} getImage={getImage}/>
                }

                <div id="author_titleContainer">
                    <AuthorInput/>
                    <TitleInput/>
                </div>

                <DescriptionInput/>

                <div id="date_category">
                    <DateInput/>
                    <CategoryInput/>


                </div>
                    <BlogEmailInput/>



                <button>გამოქვეყნება</button>

            </form>


        </div>
    );
}

export default FormsBox;