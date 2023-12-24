'use client';
import React, {useEffect} from 'react';
import styles from "./Blogs.css"
function Blogs(props) {
    useEffect(() => {
        const getCategories = async (token) => {
            // console.log(token.token)
            const query = await fetch("https://api.blog.redberryinternship.ge/api/blogs",{
                method:'GET',
                headers:{
                    Authorization:`Bearer ${token.token}`
                }
            })
            const response = await query.json()
            // return response
            console.log(response)
        }

        const getToken = async () => {
            const query = await fetch("https://api.blog.redberryinternship.ge/api/token")
            const response = await query.json()
            await getCategories(response)
            // return response
            // console.log(response)
        }
        // console.log(getToken())

        getToken()

    }, []);
    // console.log("test")
    return (
        <div>
            test

        </div>
    );
}

export default Blogs;