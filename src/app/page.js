import Image from 'next/image'
import styles from './page.css'
import Blog from "@/app/components/Blog";
import Tag from "@/app/components/Tag";
import CategoriesBar from "@/app/components/CategoriesBar";
import HomeHeader from "@/app/HomeHeader";
import Blogs from "@/app/Blogs";

export default function Home() {


    const token="9b998e79af2f6fcd05a4ecdef769d2108dbbcd6dff1b9096f0ec1dc9d16196ae";

    return (
        <main id="homeMain">
            <HomeHeader/>
            <CategoriesBar/>
            {/*<Blogs/>*/}


        </main>
    )
}
