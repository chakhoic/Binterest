import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from 'react';
import { fetchBins } from "../../store/binsReducer";
import { fetchBoards } from "../../store/boardsReducer";
import { useHistory } from "react-router-dom";
import "./BinPage.css"
import { createSave, saveBin } from "../../store/savedBinsReducer";

const BinPage = () => {
    const dispatch = useDispatch();
    const bins = useSelector(state => state.bins)
    const boards = useSelector(state => Object.values(state.boards))
    const [selectedBoard, setSelectedBoard] = useState(boards && boards.length > 0 ? boards[0].id : null)
    const history = useHistory();
  
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
        bin_id: parseInt(id.binid),
        board_id: parseInt(selectedBoard)
      }
      dispatch(createSave(updatedBin)); // Save bin to the "Saved Bins" section
      if (selectedBoard) {
        history.push(`/boards/${selectedBoard}`); // Navigate to the board page
      }
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
                <div className="edit-wrapper">
              <select className="editdropdown" onChange={(e) => {
                    if (e.target.value === "edit") {
                      history.push(`/bins/${id.binid}/edit`);
                    }
                  }}>
                    <option value="placeholder">. . .</option>
                    <option value="edit">Edit</option>
                  </select>
                  </div>
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
            {/* <div className="bin-author-container" style={{clear: 'both'}}>
                <p>Uploaded by: {bin && bin.author ? bin.author.email : ""}</p>
              </div> */}
              <br></br>
              <br></br>
              <div className="bin-title-container">
                <h2 id="bintitle">{bin ? bin.title : ""}</h2>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <hr></hr>
              <br></br>
              <div className="bin-body-container">
              <h2 id="binbody">{bin ? bin.body : ""}</h2>
              </div>
              <br></br>

            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  
  

export default BinPage;