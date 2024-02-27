// NewsItem.js
import React from 'react';
import { Card, Carousel, Row, Col } from 'react-bootstrap';

const NewsItem = ({ title, description, imageUrl, newsUrl, publishedAt, isTopNews, isLatestNews }) => {
  if (isTopNews) {
    // Render top 5 news in the carousel
    return (
      <Carousel.Item style={{ maxHeight: '200px', overflow: 'hidden' }}>
        <img className="d-block w-100" src={imageUrl} alt={title} />
        <Carousel.Caption>
          <h5>{title}</h5>
          <p>{description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  } else if (isLatestNews) {
    // Render latest news at the top right
    return (
      <Card style={{ width: '18rem', margin: '10px auto' }}>
        <Card.Img variant="top" src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Card.Body>
      </Card>
    );
  } else {
    // Render regular news cards horizontally
    return (
      <Row style={{ margin: '10px auto' }}>
        <Col xs={12} sm={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img src={imageUrl} alt={title} />
          </Card>
        </Col>
        <Col xs={12} sm={8}>
          <Card.Body>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer">
              <Card.Title>{title}</Card.Title>
            </a>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    );
  }
};

export default NewsItem;
