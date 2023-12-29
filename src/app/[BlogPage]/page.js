'use client'
import React, {useEffect, useState} from 'react';
import styles from "./page.css"
import ArticleHeader from "@/app/[BlogPage]/ArticleHeader";

function Page({params}) {
    const [allBlogs, setAllBlogs] = useState()
    const [currentBlog, setCurrentBlog] = useState()
    const [newDate, setNewDate] = useState()



    // const newDate = `${day}.${month}.${year}`

    useEffect(() => {
        const getCategories = async (token) => {
            const query = await fetch(`https://api.blog.redberryinternship.ge/api/blogs/${params.BlogPage}`, {
                method: 'GET', headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const response = await query.json()
            setCurrentBlog(response)


            const originalDate = currentBlog.publish_date
            const [year, month, day] = originalDate.split("-")
            setNewDate(`${day}.${month}.${year}`)
            // console.log(currentBlog)
        }

        getCategories("7b87c938bf2ebecd3f1578e6efc7b35be3f1064e20bcc1f28ef7b4c64ebae6f1")


    }, []);


    return (<>
        <ArticleHeader/>
          <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
            <div id="articleContainer">
                {
                    currentBlog&& <>
                        <img src={currentBlog.image} id="articleImage"/>
                        <p id="articleName">{currentBlog.author}</p>
                        <p id="articleDate">{`${newDate} • ${currentBlog.email}`}</p>
                        <h3 id="Blogtitle">{currentBlog.title}</h3>
                    </>
                }


            </div>
          </div>
    </>)
}

export default Page;