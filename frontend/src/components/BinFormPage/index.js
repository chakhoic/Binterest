import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import csrfFetch from '../../store/csrf';
import { fetchBoards } from '../../store/boardsReducer';
import { createBin } from '../../store/binsReducer'



function BinCreatePage ({ setNewBin }) {
    const dispatch = useDispatch();
    const history = useHistory();
  const [title, setTitle] = useState ("");
  const [body, setBody] = useState ("");
  const boards = useSelector(state => Object.values(state.boards))

  // select a board id 
  const [boardId, setBoardId] = useState ("");

  const [photoFile, setPhotoFile] = useState (null);
  const [photoUrl, setPhotoUrl] = useState (null);
  // select a author id
  const sessionUser = useSelector((state) => state.session.user)
//   const user = useSelector((state) => state.session.user.id)
//   const [authorId, setAuthorId] = useState(sessionUser && sessionUser.id)

  const [imageUrls, setImageUrls] = useState ([]);
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
  

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      title: title, 
      body: body,
      author_id: sessionUser.id,
      board_id: boardId
    }

    if (photoFile) {
      formData.photo = photoFile
    }
    dispatch(createBin(formData));
    history.push("/feed")
  }

  let preview = null;
  if (photoUrl) preview = <img src={photoUrl} alt="" />;
  else if (imageUrls.length !== 0) {
    preview = imageUrls.map(url => {
      return <img key={url} src={url} alt="" />;
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bin-title">Title of bin</label>
      <input type="text"
        id="bin-title"
        value={title}
        onChange={handleInput}
        required />
     <label htmlFor="bin-body">Desription</label>
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
      <h3>Image preview</h3>
      {preview}
      <button>Make a new bin!</button>
    </form>
  );
}

export default BinCreatePage;