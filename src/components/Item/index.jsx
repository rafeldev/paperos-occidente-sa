import React from 'react';

const Item = ({ item }) => {
  const {
    id,
    title,
    description
  } = item

  return (
    <li>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Item;