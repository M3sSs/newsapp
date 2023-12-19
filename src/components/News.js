import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from './Navbar';
export class News extends Component {

  async update(pageNo){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e52f887c92c4113a77049e3b62b072e&page=${pageNo}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data=await fetch(url);
      let parseData= await data.json()
      console.log(parseData);
      this.setState({articles: parseData.articles,totalResults: parseData.totalResults,loading: false})
  }

  fetchMoreData =async  () => {
   
   let nextPage = this.state.page + 1;
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e52f887c92c4113a77049e3b62b072e&page=${nextPage}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data=await fetch(url);
      let parseData= await data.json()
      console.log(parseData);
      this.setState({articles: this.state.articles.concat(parseData.articles),totalResults: parseData.totalResults,loading: false,page:nextPage})
  };
  
  // it runs first
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }
  // it run after render function
   async componentDidMount(){
      
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e52f887c92c4113a77049e3b62b072e&pageSize=${this.props.pageSize}`
      let data=await fetch(url);
      let parseData= await data.json()
      // console.log(parseData);
      this.setState({articles: parseData.articles,totalResults: parseData.totalResults})

      // it runs after constructor
    }
  render() {
    return (
      <div className="container">
        <h3 className='text-center' style={{margin:"90px"}}>Khabri News-Top Headlines</h3>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<div className="loading text-center">< Loading/></div>}
        >
          <div className="row">
        {
         this.state.articles.map((elements)=>{
          return( 
          
            <div className="col-md-4" key={elements.url}>
                <NewsItem  title={elements.title?elements.title.slice(0,45).concat("..."):""} description={elements.description?elements.description.slice(0,88).concat("..."):""} imageUrl={elements.urlToImage} newsUrl={elements.url} author={elements.author?elements.author:"-- "} source={elements.source} date={new Date(elements.publishedAt).toGMTString()}/>
            </div>
          )
        })
        }
        </div>
        </InfiniteScroll>
        
        
      </div>
    )
  }
}

export default News
