import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h1> A things I've done</h1>
    <p>This is page is for the item with the id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;