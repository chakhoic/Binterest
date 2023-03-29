import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import csrfFetch from '../../store/csrf';
import { fetchBoards } from '../../store/boardsReducer';
import './binForm.css'


function BinCreatePage ({ setNewBin }) {
    const dispatch = useDispatch();
    const history = useHistory();
  const [title, setTitle] = useState ("");
  const [body, setBody] = useState ("");
  const boards = useSelector(state => Object.values(state.boards))
  const [boardId, setBoardId] = useState ("");
  const [photoFile, setPhotoFile] = useState (null);
  const [photoUrl, setPhotoUrl] = useState (null);
  const sessionUser = useSelector((state) => state.session.user)
  const fileRef = useRef(null);

  useEffect(() => {
    dispatch(fetchBoards())
  }, []);

  const handleInput = e => {
    setTitle(e.currentTarget.value);

  }

  const handleInput2 = e => {
    setBody(e.currentTarget.value);
  }

  const options = boards ? boards.map(board => <option key={board.id} value={board.id}>{board.title}</option>) : []


  const handleFile = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setPhotoFile(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => setPhotoUrl(fileReader.result);
    }
    else setPhotoUrl(null);
  }

  const handleSubmit = async e => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('bin[title]', title);
    formData.append('bin[body]', body);
    formData.append('bin[author_id]', sessionUser.id);
    formData.append('bin[board_id]', boardId);
  
    if (photoFile) {
      formData.append('bin[photo]', photoFile);
    }

    const response = await csrfFetch('/api/bins', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      const bin = await response.json();
      setTitle("");
      setBoardId("");
      setPhotoFile(null);
      setPhotoUrl(null);
      setNewBin(bin);
      fileRef.current.value = null;
    }
    history.push("/feed");

  }

  // let preview = null;
  // if (photoUrl) preview = <img src={photoUrl} alt="" />;

  return (
    <div id="binback">
      <br></br>
      <br></br>

      <br></br>

      <br></br>

    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="bin-title">Add your title</label>
      <input type="text"
        id="bin-title"
        value={title}
        onChange={handleInput}
        required />
     <label htmlFor="bin-body">Tell everyone what your Bin is about </label>
        <input type="text"
        id="bin-body"
        value={body}
        onChange={handleInput2}
        required />
    <select className="bin-select" value={boardId} onChange={(e) => setBoardId(e.target.value)}>
                <option disabled value="">select a board</option>
                {options}
    </select>
      <input type="file" ref={fileRef} onChange={handleFile} />
      {/* <h3>Image preview</h3>
      {preview} */}
      <button>Make a new bin!</button>
    </form>
    </div>
    </div>
  );
}

export default BinCreatePage;
