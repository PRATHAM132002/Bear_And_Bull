import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import NewsItem from './NewsItem';

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=9fc0b96d69bd42b0a3def6369109d126";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  render() {
    const { articles } = this.state;

    return (
      <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
        <Carousel style={{ maxWidth: '800px', margin: 'auto'}}>
          {/* Display top 5 news in a smaller carousel */}
          {articles.slice(0, 5).map((element, index) => (
            <Carousel.Item key={element.url}>
              <img className="d-block w-100" src={element.urlToImage} alt={element.title} />
              <Carousel.Caption>
                <h5>{element.title}</h5>
                <p>{element.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
            <br /><br />
        {/* Display regular news cards with wider horizontal layout */}
        {articles.slice(5).map((element) => (
          <NewsItem
            key={element.url}
            title={element.title}
            description={element.description}
            imageUrl={element.urlToImage}
            newsUrl={element.url}
            publishedAt={element.publishedAt}
            isTopNews={false}
          />
        ))}
      </div>
    );
  }
}

export default News;
