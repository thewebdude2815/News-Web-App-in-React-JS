import React from "react";


const NewsItem =(props)=>{

    // let { title, description, imageUrl, nextPage, time, author, source } =
    //   this.props;
    let myDate = new Date(props.time);
    let allDate = myDate.toGMTString();
    return (
      <div className="card mt-3">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: "1", left: "80%" }}
        >
          {props.source}
        </span>
        <img src={props.imageUrl == null ? 'https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg': props.imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <small className="card-text ">
            By {props.author == null ? "No Author" : props.author} on {allDate}
          </small>
          <br />
          <a href={props.nextPage} className="btn btn-dark mt-2">
            Read More
          </a>
        </div>
      </div>
    );
  
}
export default NewsItem