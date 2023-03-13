import React from 'react';
import { Link } from 'react-router-dom';
import "./water.css"


const Feed = ({ bins }) => {
  const binsArray = Object.values(bins);

  if (!Array.isArray(binsArray)) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {binsArray.map(bin => {
        return (
          <li key={bin.id}>
            <Link to={`/bins/${bin.id}`}>
              <h2>{bin.title}</h2>
              <img id="pics" src={bin.photoUrl} alt="" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Feed;
