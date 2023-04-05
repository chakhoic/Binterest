import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBin, fetchBin, updateBin } from "../../store/binsReducer";
import "./BinEditPage.css";

const BinEditPage = () => {
  const dispatch = useDispatch();
  let { binid } = useParams();
  binid = Number(binid);
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(fetchBin({ id: binid }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateBin({ id: binid, title, body }));
    history.push("/feed");
  };

  const handleClick = () => {
    dispatch(deleteBin(binid));
    history.push("/feed");
  };

  const handleClick2 = () => {
    history.push(`/bins/${binid}`);
  };

  return (
    <div className="edit-container">
      <form id="edit-form" onSubmit={handleSubmit}>
        <h1 id="edityour">Edit Your Bin ✎</h1>
        <hr></hr>
        <label id="form-label">
          Title
          <br></br>
          <br></br>

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
          <br></br>
          <br></br>        
          <textarea
            name="description"
            id="description"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>

        <div className="button-container">
          <button className="delete-button" onClick={handleClick}>
            Delete This Bin
          </button>
          <div>
            <button className="cancel-button" onClick={handleClick2}>
              Cancel
            </button>
            <button id="submit-button" type="submit" className="done-button">
              Done
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BinEditPage;
