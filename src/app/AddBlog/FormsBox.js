'use client'
import React, {useState} from 'react';
import styles from "./FormsBox.css"
import UploadImageBox from "@/app/AddBlog/UploadImageBox";
import UploadedImg from "@/app/AddBlog/UploadedImg";
import AuthorInput from "@/app/AddBlog/AuthorInput";
import TitleInput from "@/app/AddBlog/TitleInput";
import DescriptionInput from "@/app/AddBlog/DescriptionInput";

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



                {/*<button>submit</button>*/}

            </form>


        </div>
    );
}

export default FormsBox;