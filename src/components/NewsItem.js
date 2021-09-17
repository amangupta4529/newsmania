import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title,description,imageurl,url,author,date,source}=this.props;
        let dates=new Date(date);
        return (
            <div className='my-3'>
               <div className="card" >
               <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zindex:"1",left:'90%'}}>{source}</span>
    <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">

    <h5 className="card-title">{title}
 
    </h5>
    <p  className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} on {dates.toGMTString()}</small></p>
    <a href={url} className="btn btn-sm btn-primary" target="_blank">Read More</a>
  </div>
</div>
   </div>
        )
    }
}

export default NewsItem
