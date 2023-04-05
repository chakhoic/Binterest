import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchBins, removeBinFromBoard } from '../../store/binsReducer';
import { fetchBoards } from "../../store/boardsReducer";
import Video from "../Video/Video2";
import "./BoardPage.css"

const BoardPage = () => {
  const dispatch = useDispatch();
  const bins = useSelector(state => Object.values(state.bins))
  const boards = useSelector(state => Object.values(state.boards))

  const { boardid } = useParams();
  const [dropdownValue, setDropdownValue] = useState('placeholder');

  useEffect(() => {
    dispatch(fetchBins(parseInt(boardid)));
    dispatch(fetchBoards());
  }, []);
  
  const handleRemove = (binId, option) => {
    if (option === 'remove') {
      dispatch(removeBinFromBoard(binId, parseInt(boardid)));
      setDropdownValue('placeholder');
    }
  };
  
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
            .sort(() => Math.random() - 0.5)
            .map(bin => (
              <li key={bin.id}>
                <Link to={`/bins/${bin.id}`}>
                  <img id="pics" src={bin.photoUrl} alt="" />
                </Link>
                <div id="binstitle">{bin.title}</div>
                <br/>
                <select
                  key={bin.id}
                  className="removedropdown"
                  value={dropdownValue}
                  onChange={(e) => {
                    setDropdownValue(e.target.value);
                    handleRemove(bin.id, e.target.value);
                  }}
                >
                  <option value="placeholder">Remove From Board</option>
                  <option value="remove">Confirm (only for new saved bins)</option>
                </select>
                
              </li>
            ))}
        </ul>
        <br />
        <br/>
      </div>
    </div>
  );
};

export default BoardPage;
