import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country:'in',
    category:'general'
  }
 
 
    constructor(){
    super();

        this.state={
           articles: [],
           loading:false,
           page:1
        }
    }
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8a1f3eed5e043e0a6fd1af7d0bdf9ad&page=`+this.state.page;
      {this.setState({loading:true})}
      let data=await fetch(url);
      let parseddata=await data.json();
      this.setState({articles:parseddata.articles,
        loading:false});
    }
    async fetchData(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8a1f3eed5e043e0a6fd1af7d0bdf9ad&page=`+this.state.page;
      {this.setState({loading:true})}
      let data=await fetch(url);
      let parseddata=await data.json();
      this.setState({articles:parseddata.articles,
        loading:false});
    }
    
    nextPage= async ()=>{
      let curpage=this.state.page;
      curpage++;
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8a1f3eed5e043e0a6fd1af7d0bdf9ad&page=`+curpage;
      {this.setState({loading:true})}
      let data=await fetch(url);
      let parseddata=await data.json();
      console.log("page="+curpage);
      if(parseddata.articles.length>0){
        this.setState({page:curpage,
          articles:parseddata.articles,
          loading:false});
        }else{
          alert("Next Page Not Exist");
        }
      console.log("next");
      
    }
     prevPage = async ()=>{
      let curpage=this.state.page;
      curpage--;
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8a1f3eed5e043e0a6fd1af7d0bdf9ad&page=`+curpage;
      {this.setState({loading:true})}
      let data=await fetch(url);
      let parseddata=await data.json();
      
      if(parseddata.articles.length>=0){
        this.setState({articles:parseddata.articles,
          page:curpage,
          loading:false});
        }else{
          alert("Previous Page Not Exist");
        }
      console.log("previous");
      
    }
    capitalizeFL=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    render(){
        return (
            <div className="container my-3">
                <h2 className='text-center'>NEWSMONKEY _ TOP HEADLINES From-{this.capitalizeFL(this.props.category) }</h2>
                 {this.state.loading && <Spinner/>}
                <div className="row">
               {!this.state.loading && this.state.articles.map(
                   (ele)=>{
                     console.log(ele.des);
                    return  ele.urlToImage!=null && <div className="col-md-4">
                    <NewsItem title={ele.title} description={ele.description} imageurl={ele.urlToImage} url={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
                    </div>
                })
                }
                      </div>
                      <div className="container d-flex justify-content-between">
                      <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.prevPage}>&larr; PREV</button>
                      <button className='btn btn-dark' onClick={this.nextPage}>Next &rarr;</button>
                      </div>
                
            </div>
        )
    }
}
