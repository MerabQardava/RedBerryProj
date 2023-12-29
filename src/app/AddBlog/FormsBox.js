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

    const [formInfo, setFormInfo] = useState({
        title: {
            value: "", isValid: false
        }, description: {
            value: "", isValid: false
        }, image: "", author: {
            value: "", isValid: false
        }, publish_date: "", categories: [], email: {
            value: "", isValid: false
        },
    })
    // useEffect(() => {
    //
    //     console.log(formInfo)
    // }, [formInfo]);

    const createBlog = async () => {
        
        try {
            const formData = new FormData();
            formData.append('title', formInfo.title.value);
            formData.append('description', formInfo.description.value);
            formData.append('image', base64toFile(formInfo.image,"test","image/png"));
            formData.append('author', formInfo.author.value);
            formData.append('publish_date', formInfo.publish_date);
            formData.append('categories', JSON.stringify(formInfo.categories));
            formData.append('email', formInfo.email.value);
            console.log(formInfo.email.value)

            const response = await fetch('https://api.blog.redberryinternship.ge/api/blogs', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': 'Bearer bd21a7cb74229b18566fbaf79a6b79c175f6215124cd41dc7ce0445d1c114700',
                    'accept': 'application/json',
                },
            });

            if(response.status===204){
                props.toggleModal()
                // console.log("test")
            }





            console.log('Blog created successfully:', response.status);
        } catch (error) {
            console.error('Error mech creating blog:', error);
        }
    };



    let buttonEnabled = formInfo.title.isValid && formInfo.description.isValid && (formInfo.image !== "") && formInfo.author.isValid && (formInfo.publish_date !== "") && (formInfo.categories.length > 0)&&formInfo.email.isValid


    function updateFormInfo(newState) {
        setFormInfo((prevFormInfo) => ({
            ...prevFormInfo, ...newState,
        }));
    }
    function base64toFile(base64String, fileName, fileType) {
        const binaryString = atob(base64String)

        const length = binaryString.length
        const uint8Array = new Uint8Array(length)

        for (let i = 0; i < length; i++) {
            uint8Array[i] = binaryString.charCodeAt(i)
        }

        const blob = new Blob([uint8Array], { type: fileType })

        return new File([blob], fileName, { type: fileType })
    }


    function getImage(image) {

        if (image) {
            const reader = new FileReader();

            reader.onload = () => {


                const result = btoa(reader.result);

                setFormInfo((prevFormInfo) => ({
                    ...prevFormInfo, image: (result),
                }));
                localStorage.setItem('image', result)
            };


            reader.readAsBinaryString(image)

        } else {
            setFormInfo((prevFormInfo) => ({
                ...prevFormInfo, image: (""),
            }));
            localStorage.setItem('image', "")
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
        <form id="blogForm" onSubmit={onFormSubmitHandler}>
            <p>ატვირთეთ ფოტო</p>

            {!formInfo.image  ? <UploadImageBox getImage={getImage}/> :
                <UploadedImg img={localStorage.getItem('imageName')} updateForm={updateFormInfo}/>}

            <div id="author_titleContainer">
                <AuthorInput updateForm={updateFormInfo}/>
                <TitleInput updateForm={updateFormInfo}/>
            </div>

            <DescriptionInput updateForm={updateFormInfo}/>

            <div id="date_category">
                <DateInput updateForm={updateFormInfo}/>
                <CategoryInput updateForm={updateFormInfo}/>


            </div>
            <BlogEmailInput updateForm={updateFormInfo}/>


            <button onClick={createBlog} disabled={!buttonEnabled}>გამოქვეყნება</button>

        </form>


    </div>);
}

export default FormsBox;
