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
    const [mech, setMech] = useState()
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

    // console.log(formInfo.image)

    const createBlog = async () => {
        try {
            const formData = new FormData();
            formData.append('title', formInfo.title.value);
            formData.append('description', formInfo.description.value);
            formData.append('image', base64toFile(formInfo.image,"test","image/png")); //
            formData.append('author', formInfo.author.value);
            formData.append('publish_date', formInfo.publish_date);
            formData.append('categories', JSON.stringify(formInfo.categories));
            formData.append('email', formInfo.email.value);

            const response = await fetch('https://api.blog.redberryinternship.ge/api/blogs', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': 'Bearer 9b998e79af2f6fcd05a4ecdef769d2108dbbcd6dff1b9096f0ec1dc9d16196ae',
                    'accept': 'application/json',
                },
            });

            const responseData = await response.json();

            console.log('Blog created successfully:', responseData);
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };



    let buttonEnabled = formInfo.title.isValid && formInfo.description.isValid && (formInfo.image !== "") && formInfo.author.isValid && (formInfo.publish_date !== "") && (formInfo.categories.length > 0)&&formInfo.email.isValid


    function updateFormInfo(newState) {
        setFormInfo((prevFormInfo) => ({
            ...prevFormInfo, ...newState,
        }));
    }
    function base64toFile(base64String, fileName, fileType) {
        // Step 1: Decode Base64 string
        const binaryString = atob(base64String);

        // Step 2: Create Uint8Array from binary data
        const length = binaryString.length;
        const uint8Array = new Uint8Array(length);

        for (let i = 0; i < length; i++) {
            uint8Array[i] = binaryString.charCodeAt(i);
        }

        // Step 3: Create Blob object
        const blob = new Blob([uint8Array], { type: fileType });

        // Step 4: Create File object
        return new File([blob], fileName, { type: fileType });
    }


    function getImage(image) {

        if (image) {
            const reader = new FileReader();

            reader.onload = () => {


                const result = btoa(reader.result);

                setFormInfo((prevFormInfo) => ({
                    ...prevFormInfo, image: (result),
                }));
                localStorage.setItem('image', result);
            };


            reader.readAsBinaryString(image);

        } else {
            setFormInfo((prevFormInfo) => ({
                ...prevFormInfo, image: (""),
            }));
            localStorage.setItem('image', "");
        }

    }

    function test(image){
        setMech(image)
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
            {}
            {formInfo.image === "" ? <UploadImageBox test={test} getImage={getImage}/> :
                <UploadedImg img={localStorage.getItem('imageName')} updateForm={updateFormInfo}/>}

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


            <button onClick={createBlog} disabled={!buttonEnabled}>გამოქვეყნება</button>

        </form>


    </div>);
}

export default FormsBox;