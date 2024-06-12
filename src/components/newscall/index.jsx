export const NewsCAll=async(country,category)=>{
    let news=await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f00a961ecdbb4350b2cd5c57bf003bc1`);
        
        news=await news.json()
        news=news.articles
        return news;
}