import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { deleteBin,updateBin } from "../../store/binsReducer";
import "./BinEditPage.css";


const BinEditPage = (props) => {
  const { binId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const bins = useSelector((state) => state.bins);
  const [title, setTitle] = useState(bins.title);
  const [body, setBody] = useState(bins.body);
  const fileRef = useRef(null);

  useEffect(() => {
    setTitle(bins.title);
    setBody(bins.body);
  }, [bins]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleClick = () => {
    dispatch(deleteBin(binId));
    history.push("/");
  };

  const handleSubmit = () => {
    dispatch(updateBin(binId));
    history.push("/");
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
            onChange={handleTitleChange}
          />
        </label>
        <label id="form-label">
          Body
          <textarea
            name="description"
            id="description"
            value={body}
            onChange={handleBodyChange}
            rows={4}
            style={{ width: "100%", height: "auto", overflow: "auto" }}
          />
        </label>

        <button type="submit" id="submit-button">
          Done
        </button>
        <button
          type="button"
          id="form-cancel"
          onClick={() => props.setIsEditing(false)}
        >
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