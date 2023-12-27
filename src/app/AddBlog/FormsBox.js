'use client'
import React, {useEffect, useState} from 'react';
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
    const [isFormValid, setIsFormValid] = useState()
    const [formInfo, setFormInfo] = useState({
        title: {
            value: "", isValid: false
        }, description: {
            value: "", isValid: false
        }, image: "", author: {
            value: "", isValid: false
        }, publish_date: "", categories: [1], email: {
            value: "", isValid: false
        },
    })

    useEffect(() => {
        formInfo.image=localStorage.getItem('image')
    }, [formInfo]);








    let buttonEnabled = formInfo.title.isValid && formInfo.description.isValid && (formInfo.image !== "") && formInfo.author.isValid && (formInfo.publish_date !== "") && (formInfo.categories.length > 0)


    function updateFormInfo(newState) {
        setFormInfo((prevFormInfo) => ({
            ...prevFormInfo, ...newState,
        }));
    };

    useEffect(() => {
        if (uploadedImage) {
            const reader = new FileReader();

            reader.onload = () => {

                const result = btoa(reader.result);

                setFormInfo((prevFormInfo) => ({
                    ...prevFormInfo, image: (result),
                }));
                localStorage.setItem('image', result);
            };


            reader.readAsBinaryString(uploadedImage);
        } else {
            setFormInfo((prevFormInfo) => ({
                ...prevFormInfo, image: (""),
            }));
            localStorage.setItem('image', "");
        }

    }, [uploadedImage]);

    function getImage(image) {
        setUploadedImage(image)
    }


    function onFormSubmitHandler(event) {
        event.preventDefault();

    }

    // let imgExtension=uploadedImage?uploadedImage.name.split('.'):"png";
    // base 64 to img


    return (<div id="formsContainer">
        <p>ბლოგის დამატება</p>
        {/*<img*/}
        {/*    src={`data:image/${imgExtension[imgExtension.length - 1]}+xml;base64,${formInfo.image}`}*/}
        {/*    alt="Uploaded"*/}

        {/*/>*/}
        <form onSubmit={onFormSubmitHandler}>
            <p>ატვირთეთ ფოტო</p>
            {formInfo.image === "" ? <UploadImageBox getImage={getImage}/> :
                <UploadedImg img={localStorage.getItem('imageName')} getImage={getImage}/>}

            <div id="author_titleContainer">
                <AuthorInput updateForm={updateFormInfo}/>
                <TitleInput updateForm={updateFormInfo}/>
            </div>

            <DescriptionInput updateForm={updateFormInfo}/>

            <div id="date_category">
                <DateInput updateForm={updateFormInfo}/>
                <CategoryInput/>


            </div>
            <BlogEmailInput updateForm={updateFormInfo}/>


            <button disabled={!buttonEnabled}>გამოქვეყნება</button>

        </form>


    </div>);
}

export default FormsBox;