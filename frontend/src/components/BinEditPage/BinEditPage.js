import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBin,fetchBin,updateBin } from "../../store/binsReducer";
import "./BinEditPage.css";
import * as sessionActions from "../../store/binsReducer"



const BinEditPage = () => {
  const dispatch = useDispatch();
  let { binid } = useParams();
  binid = Number(binid)
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //server running non stop
  useEffect(() => {
    dispatch(fetchBin({id: binid}))
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  await dispatch(sessionActions.updateBin({id: binid, title, body}));
  history.push('/feed'); 
}


    const handleClick = () => {
      dispatch(deleteBin(binid));
      history.push("/feed");
    };

    const handleClick2 = () => {
      history.push(`/bins/${binid}`);
    };
    

    return (
      <>
        <form id="edit-form" onSubmit={handleSubmit}>
          <h2 id="edityour">Edit Your Bin ✎</h2>
          <label id="form-label">
            Title
            <input
              type="text"
              name="title"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
          </label>
          <label id="form-label">
            Body
            <textarea
              name="description"
              id="description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              />
          </label>

          <button type="submit" id="submit-button">
            Done
          </button>
          <button className="cancelbuttons" onClick={handleClick2}>
            Cancel
          </button>
        <button className="deletebuttons" onClick={handleClick}>
          Delete
        </button>
        </form>
      </>
    );
  };

export default BinEditPage;