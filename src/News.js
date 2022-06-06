import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [article, setarticle] = useState([]);
    const [page, setpage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResults, settotalResults] = useState(0)
    useEffect( () => {
        updateNews();
      
      }, [])
    const updateNews = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=717ec82671ec4bb483cc33825fa728a2&page=1&pageSize=10`;
      props.setProgress(33);
      setLoading(true);
      let data = await fetch(url);
      let newsData = await data.json();
      props.setProgress(66);
      setLoading(false);
      setarticle(newsData.articles);
      settotalResults(newsData.totalResults)
      props.setProgress(100);
    }
    
    
    
   const fetchMoreData = async () =>{
        setpage(page +1);
        if(page + 1 > Math.ceil(totalResults/10)){
        }else{
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=717ec82671ec4bb483cc33825fa728a2&page=${ page + 1}&pageSize=10`;
            props.setProgress(20);
            
            let data = await fetch(url);
            let newsData = await data.json();
            props.setProgress(70);
            
        setarticle(article.concat(newsData.articles));
        settotalResults(newsData.totalResults)
            props.setProgress(100);
        }
    }

    return (
      <div>
        <h2 className='mt-3 text-center'>Daily News</h2>
        
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !==  totalResults}
          loader={<Spinner/>}
        >
            <div className='container my-3'>
                <div className='container'>
        <div className='row'>
            {article.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title? element.title.slice(0, 45): ""} description={element.description?element.description.slice(0, 88): ""} author={element.author} time={element.publishedAt} imageUrl={element.urlToImage} nextPage={element.url} source={element.source.name}/>
                </div>
            })}
        </div>
        </div>
        </div>
        </InfiniteScroll>
        </div>
    )

}

export default News