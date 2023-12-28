'use client';
import React, {useEffect, useState} from 'react';
import styles from "./Blogs.css"
import Blog from "@/app/components/Blog";

function Blogs(props) {
    const [allBlogs, setAllBlogs] = useState()

    function haveCommonNumber(arr1, arr2) {
        for (let num of arr1) {
            const found = arr2.some(obj => obj.id === num);
            if (found) {
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        const getCategories = async (token) => {
            const query = await fetch("https://api.blog.redberryinternship.ge/api/blogs", {
                method: 'GET', headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const response = await query.json()
            setAllBlogs(response.data)
        }

        getCategories("7b87c938bf2ebecd3f1578e6efc7b35be3f1064e20bcc1f28ef7b4c64ebae6f1")

    }, []);

    const currentDate=(new Date).setHours(4,0,0,0);

    // console.log(allBlogs)
    return (<div id="blogsDiv">

        {allBlogs&&props.filter.length===0 ? allBlogs.map((blog) => {
            console.log(`${currentDate>=new Date(blog.publish_date)} ${new Date(blog.publish_date)}`)
            if(currentDate>=new Date(blog.publish_date)){
                return <Blog key={blog.id} author={blog.author} description={blog.description}
                             tag={blog.categories} publish_date={blog.publish_date}
                             title={blog.title} image={blog.image}/>

            }

        }) :allBlogs && allBlogs.map((blog)=>{
            // console.log(props.filter)
            // console.log(blog.categories)


            if(haveCommonNumber(props.filter,blog.categories)){
                return <Blog key={blog.id} author={blog.author} description={blog.description}
                      tag={blog.categories} publish_date={blog.publish_date}
                      title={blog.title} image={blog.image}/>
            }

        })}


    </div>);
}

export default Blogs;