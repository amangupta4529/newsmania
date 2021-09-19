import React,{useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

  const News=(props)=>{
  
  const [article, setarticle] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const [totalResults, settotalResults] = useState(0); 
  
  const fetchData = async () => {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=` +
      page;
     
      setloading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log("parseddata="+parseddata);
      setarticle(parseddata.articles);
      settotalResults(parseddata.totalResultes);
      setloading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);


  
  const capitalizeFL = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const fetchMoreData = async () => {
    
    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=
      ${page+1}`;
      setpage(page+1);
    setloading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
      setarticle(article.concat(parseddata.articles));
      settotalResults(parseddata.totalResultes);
      setloading(false);
    
  };
  return (
    <div>
      <div className="container my-3">
        <h2 className="text-center">
          NEWSMONKEY _ TOP HEADLINES From-
          {capitalizeFL(props.category)}
        </h2>
        {/* {state.loading && <Spinner/>} */}

        <div className="container">
        <div className="row">

          {article.map((ele) => {
            
            return (
              ele.urlToImage != null && (
                <div className="col-md-4">
                  <NewsItem
                    title={ele.title} description={ele.description}imageurl={ele.urlToImage}
                    url={ele.url}author={ele.author} date={ele.publishedAt}  source={ele.source.name}/>
                </div>) );})}
        </div>
        </div>
         
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!=totalResults}
          loader={loading && <Spinner/>}
        ></InfiniteScroll>
      </div>
    </div>
  )
}
    News.defaultProps = {
      country: "in",
      category: "general",
    };
    News.prototype={
      country:PropTypes.string,
      page:PropTypes.number,
      category:PropTypes.string
    }
    export default News;