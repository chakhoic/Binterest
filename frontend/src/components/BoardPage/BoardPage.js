import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchBins } from '../../store/binsReducer';
import { fetchBoards } from "../../store/boardsReducer";
import { useSelector } from 'react-redux';
import "./BoardPage.css"

const BoardPage = () => {
  const dispatch = useDispatch();
  const bins = useSelector(state => state.bins);
  const boards = useSelector(state => Object.values(state.boards))
  const binsArray = Object.values(bins);
  const boardsArray = Object.values(boards);

  const {boardid} = useParams()

  useEffect(() => {

    dispatch(fetchBins(parseInt(boardid)));
    dispatch(fetchBoards())
  }, []);


  let theboard;
  boardsArray.forEach(board => {
      if(board.id.toString() === boardid) {
      theboard = <div id="boardtitle">{board.title}</div>
    }
  })
                   

  return (
    <div id="yerr">
      <div id="boardz">
        {theboard}
      </div>
      <div id="boardpage">
      <ul>
        {binsArray
          .sort(() => Math.random() - 0.5)
          .map(bin => {
            return (
              <li key={bin.id}>
                <Link to={`/bins/${bin.id}`}>
                  <img id="pics" src={bin.photoUrl} alt="" />
                </Link>
                <div id="binstitle">{bin.title}</div>
              </li>
            );
          })}
      </ul>
      </div>
    </div>
  );
};

export default BoardPage;
