import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResultes: 0,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=` +
      this.state.page;
      this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({articles: parseddata.articles, loading: false, totalResultes:parseddata.totalResultes});
  }
  fetchData = async () => {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=` +
      this.state.page;
    {
      this.setState({ loading: true });
    }
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      loading: false,
      totalResultes:parseddata.totalResults,
    });
  };

  nextPage = async () => {
    this.setState({ page: this.state.page + 1 });
    this.fetchData();
  };
  prevPage = async () => {
    this.setState({ page: this.state.page - 1 });
    this.fetchData();
  };
  capitalizeFL = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1 });
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=` +
      this.state.page;
      this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResultes:parseddata.totalResultes,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">
          NEWSMONKEY _ TOP HEADLINES From-
          {this.capitalizeFL(this.props.category)}
        </h2>
        {/* {this.state.loading && <Spinner/>} */}

        <div className="container">
        <div className="row">
          {this.state.articles.map((ele) => {
            console.log(ele.des);
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
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={this.state.loading && <Spinner/>}
        ></InfiniteScroll>
      </div>
    );
  }
}
