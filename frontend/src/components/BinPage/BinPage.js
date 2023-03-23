import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from 'react';
import { fetchBins, updateBin } from "../../store/binsReducer";
import { fetchBoards } from "../../store/boardsReducer";
import { useHistory } from "react-router-dom";
import "./BinPage.css"
import { saveBin } from "../../store/savedBinsReducer";

const BinPage = () => {
  const dispatch = useDispatch();
  const { boardid } = useParams(); // Get the board's ID from the URL params
  const bins = useSelector(state => state.bins)
  const boards = useSelector(state => Object.values(state.boards))
  const [selectedBoards, setSelectedBoards] = useState([])
  const [selectedBoard, setSelectedBoard] = useState(boardid);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchBins())
    dispatch(fetchBoards())
  }, []);

  const options = boards ? boards.map(board => <option key={board.id} value={board.id}>{board.title}</option>) : []
  const { binid } = useParams()

  const bin = Object.values(bins)[parseInt(binid)]
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBin = {
      ...bin,
      boardId: [...bin.boardId, parseInt(selectedBoards[selectedBoards.length - 1])]
    }
    console.log(updatedBin.boardId); // Check if bin.boardId is an array
    dispatch(updateBin(updatedBin));
    dispatch(saveBin(bin.id)); // Save bin to the "Saved Bins" section
    if (selectedBoards.length > 0) {
      history.push(`/boards/${selectedBoards[selectedBoards.length - 1]}`); // Navigate to the board page of the last selected board
    }
    setSelectedBoard('');
  }
  

  return (
    <div className="bin-page">
      <div className="bin-container">
        <div className="bin-image-container">
          <img className="bin-image" src={bin ? bin.photoUrl : ""} alt=""></img>
        </div>
        <div className="bin-form-container">
          <form onSubmit={handleSubmit} className="bin-form">
            <div className="bin-form-row">
            <select className="bin-select" value={selectedBoard} onChange={(e) => setSelectedBoard(e.target.value)}>
                <option disabled value="">select a board</option>
                {options}
              </select>
              <input type="submit" value="Save to Board" className="bin-submit" /> 
            </div>
          </form>
          <br></br>
          <br></br>
          <div className="bininfo">
            <br></br>
            <div className="bin-author-container" style={{clear: 'both'}}>
              <p>Uploaded by: {bin && bin.author ? bin.author.email : ""}</p>
            </div>
            <br></br>
            <br></br>
            <div className="bin-title-container" style={{clear: 'both'}}>
              <h2 id="bintitle">{bin ? bin.title : ""}</h2>
            </div>
            <div className="bin-body-container" style={{clear: 'both'}}>
              <p>{bin ? bin.body : ""}</p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default BinPage;
