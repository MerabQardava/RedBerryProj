import Image from 'next/image'
import styles from './page.css'
import Blog from "@/app/components/Blog";
import Tag from "@/app/components/Tag";
import CategoriesBar from "@/app/components/CategoriesBar";
import HomeHeader from "@/app/HomeHeader";
import Blogs from "@/app/Blogs";

export default function Home() {
    return (
        <main id="homeMain">
            {/*<HomeHeader/>*/}
            {/*<CategoriesBar/>*/}
            <Blogs/>


        </main>
    )
}
