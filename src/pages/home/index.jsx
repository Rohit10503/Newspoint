import React, { useEffect, useState } from "react";
import "./home.css"
import { NewsCAll } from "../../components/newscall";

const Home = () => {
    const [data, setData] = useState([]);
     const  getNews = async (country,category) => {
        
        // let news=await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f00a961ecdbb4350b2cd5c57bf003bc1`);
        
        // news=await news.json()
        // news=news.articles

        let news=await NewsCAll(country,category)
        setData(news)
        console.log(news)
    }
    useEffect(() => {
         getNews("in","technology");
    }, []);

    return <>
        <section>
            <marquee behavior="" direction=""><h3>NewsPoint - News You Can Trust</h3></marquee>
        </section>
        <section>
            <div className="category">
                <ul>
                    
                    <li onClick={()=>{getNews("in", "Sports")}}>Sports</li>
                    <li onClick={()=>{getNews("in", "Entertainment")}}>Entertainment</li>
                    <li onClick={()=>{getNews("in", "General")}}>General</li>
                    <li onClick={()=>{getNews("in", "Technology")}}>Technology</li>
                    <li onClick={()=>{getNews("in", "Business")}}>Business</li>
                    
                </ul>
            </div>
        </section>
        <div className="container">
            {
                data.map((item , index) => {
                    return <div key={index} className="card">
                        <div className="upper">
                            <img className="card_image" src={item.urlToImage ?item.urlToImage: "https://cdn-images-1.medium.com/v2/resize:fit:1200/1*On6A3Q86PMCZYgv8qYzqiA.jpeg" } alt="" />
                        </div>
                        <div className="lower">
                            <h4><a href={item.url}>{item.title}</a></h4>
                        </div>

                    </div>
                })
            }
        </div>

    </>
}
export default Home  ;
