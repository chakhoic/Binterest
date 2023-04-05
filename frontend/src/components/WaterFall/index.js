import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBins } from '../../store/binsReducer';
import { useSelector } from 'react-redux';
import Video from "../Video/Video";
import "./water.css"


const Feed = () => {
  const dispatch = useDispatch();
  const bins = useSelector(state => state.bins)
  const binsArray = Object.values(bins);


  useEffect(() => {
    dispatch(fetchBins())
  }, []);


  return (
    <div style={{position: 'relative'}}>
      <Video style={{position: 'absolute', width: '100%', height: '100%'}} />
      <div id="homes">
        <ul>
          {binsArray
            .sort(() => Math.random() - 0.5) // shuffle the array randomly
            .map(bin => {
              return (
                <li key={bin.id}>
                  <Link to={`/bins/${bin.id}`}>
                    <img id="pics" src={bin.photoUrl} alt="" />
                  </Link>
                  {/* <div id="binsuserid">{bin.authorId}</div> */}
                  <div id="binstitle">{bin.title}</div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}  

export default Feed;
