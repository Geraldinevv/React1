import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Tags from '../Tags/Tags';
import './MyCard.css';

const MyCard = ({ image, name, description, tags }) => {
  return (
    <Card className="my-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tags tags={tags} />
        <Button variant="primary">Adoptar</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;