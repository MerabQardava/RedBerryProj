'use client';
import React, {useEffect} from 'react';
import styles from "./Blogs.css"
function Blogs(props) {
    useEffect(() => {
        const getCategories = async (token) => {
            const query = await fetch("https://api.blog.redberryinternship.ge/api/blogs",{
                method:'GET',
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            const response = await query.json()
            console.log(response)
        }

        getCategories("9b998e79af2f6fcd05a4ecdef769d2108dbbcd6dff1b9096f0ec1dc9d16196ae")

    }, []);
    // console.log("test")
    return (
        <div>
            test

        </div>
    );
}

export default Blogs;