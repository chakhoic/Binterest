import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchBins } from '../../store/binsReducer';
import { fetchBoards } from "../../store/boardsReducer";
import Video from "../Video/Video2";
import "./BoardPage.css"

const BoardPage = () => {
  const dispatch = useDispatch();
  const bins = useSelector(state => Object.values(state.bins))
  const boards = useSelector(state => Object.values(state.boards))

  const { boardid } = useParams();

  useEffect(() => {
    dispatch(fetchBins());
    dispatch(fetchBoards());
  }, []);
  

  const board = boards.find(board => board.id.toString() === boardid);

  return (
    <div id="yerr" style={{ position: 'relative' }}>
      <Video style={{ position: 'absolute', width: '100%', height: '100%' }} />
      <br />
      <br />

      <div id="boardz">
        {board && <div id="boardtitle">{board.title}</div>}
      </div>
      
      <div id="boardpage">
        <ul>
          {bins
            .filter(bin => parseInt(bin.boardId) === parseInt(boardid))
            .sort(() => Math.random() - 0.5)
            .map(bin => (
              <li key={bin.id}>
                <Link to={`/bins/${bin.id}`}>
                  <img id="pics" src={bin.photoUrl} alt="" />
                </Link>
                <div id="binstitle">{bin.title}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BoardPage;
