'use client'
import Image from 'next/image'
import styles from './page.css'
import Blog from "@/app/components/Blog";
import Tag from "@/app/components/Tag";
import CategoriesBar from "@/app/components/CategoriesBar";
import HomeHeader from "@/app/HomeHeader";
import Blogs from "@/app/Blogs";
import {useState} from "react";

export default function Home() {
    const [filter, setFilter] = useState([])


    function addFilter (num) {
        const isNumberInArray = filter.includes(num)
        if (isNumberInArray) {
            const updatedFilter = filter.filter((number) => number !== num)
            setFilter(updatedFilter);
        } else {
            setFilter((prevFilter) => [...prevFilter, num])
        }
    }

    // console.log(filter)


    const token="7b87c938bf2ebecd3f1578e6efc7b35be3f1064e20bcc1f28ef7b4c64ebae6f1";

    return (
        <main id="homeMain">
            <HomeHeader/>
            <CategoriesBar filter={filter} addFilter={addFilter}/>
            <Blogs filter={filter}/>


        </main>
    )
}
