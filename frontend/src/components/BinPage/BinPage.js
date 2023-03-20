import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from 'react';
import { fetchBins, updateBin } from "../../store/binsReducer";
import { fetchBoards } from "../../store/boardsReducer";
import "./BinPage.css"

const BinPage = () => {
    const dispatch = useDispatch();
    const bins = useSelector(state => state.bins)
    const boards = useSelector(state => Object.values(state.boards))
    const [selectedBoard, setSelectedBoard] = useState(null)
  
    useEffect(() => {
      dispatch(fetchBins())
      dispatch(fetchBoards())
    }, []);
  
    const options = boards ? boards.map(board => <option value={board.id}>{board.title}</option>) : []
    const id = useParams()
  
    const bin = bins[parseInt(id.binid)]
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedBin = {
        ...bin,
        boardId: parseInt(selectedBoard)
      }
      dispatch(updateBin(updatedBin))
    }
  
    return (
      <div className="bin-page">
        <div className="bin-container">
          <div className="bin-image-container">
            <img className="bin-image" src={bin ? bin.photoUrl : ""} alt=""></img>
          </div>
          <div className="bin-form-container">
            <form onSubmit={handleSubmit} onChange={(e) => setSelectedBoard(e.target.value)} className="bin-form">
              <div className="bin-form-row">
                <select className="bin-select">
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