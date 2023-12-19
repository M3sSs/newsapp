import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} =this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..." height={140}/>
            <div className="card-body">
                <h5 className="card-title">{title}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "85%",zIndex: '1'}}>
    {source.name}
    <span className="visually-hidden">unread messages</span>
  </span></h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target='_blank' className="btn btn-dark">Read More</a>
                <p className="card-text my-1"><small className="text-body-secondary">By {author} on {date}</small></p>
                <p className="card-text my-1"><small className="text-body-secondary"></small></p>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem