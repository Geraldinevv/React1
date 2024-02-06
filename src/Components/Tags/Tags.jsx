import React from 'react';
import { Badge } from 'react-bootstrap';
import './Tags.css';

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <Badge key={index} bg={tag.color}>
          {tag.text}
        </Badge>
      ))}
    </div>
  );
};

export default Tags;