import {useState , useEffect} from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {

  const [articles , setArticles] = useState([])
  

  useEffect(()=>{
   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9dc2c3ded36b49988a4ca9e9890c1d60`
   fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles))
   
  },[category])


  return (
    <>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news , index)=>{
           return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </>
  )
}

export default NewsBoard
