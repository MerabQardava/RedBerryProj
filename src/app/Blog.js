import React from 'react';
import styles from "./Blog.css"
import Tag from "@/app/Tag";
function Blog(props) {
    return (
        <div id="card">
            <img id="photo" src="https://media.istockphoto.com/id/952696392/vector/television-test-card.jpg?s=612x612&w=0&k=20&c=HLKN1cPrugPVtcPI6RK60CVb2wKq39ERVa9LgfLW38s="
                 alt=""/>

            <div id="content">
                <p id="name">ნია გოგსაძე</p>
                <p id="date">02.11.2023</p>
                <Tag tag="ai"/>
                <h3 id="title">EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h3>
                <p id="description">6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...</p>
                <div  id="link_container">
                    <p id="link">სრულად ნახვა</p> <img src="Arrow.svg" alt=""/>
                </div>

            </div>


        </div>
    );
}

export default Blog;