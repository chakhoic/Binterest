import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';


function BinCreatePage ({ setNewBin }) {
const history = useHistory();
  const [title, setTitle] = useState ("");
  const [photoFile, setPhotoFile] = useState (null);
  const [photoUrl, setPhotoUrl] = useState (null);
  const [imageFiles, setImageFiles] = useState ([]);
  const [imageUrls, setImageUrls] = useState ([]);
  const fileRef = useRef(null);

  const handleInput = e => {
    setTitle(e.currentTarget.value);
  }

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
    if (photoFile) {
      formData.append('bin[photo]', photoFile);
    }
    else if (imageFiles.length !== 0) {
      Array.from(imageFiles).forEach(image => {
        formData.append('bin[images][]', image);
      })
    }

    const response = await fetch('/api/bins', {
      method: 'bin',
      body: formData
    });
    if (response.ok) {
      const bin = await response.json();
      setTitle("");
      setPhotoFile(null);
      setPhotoUrl(null);
      setImageFiles([]);
      setImageUrls([]);
      setNewBin(bin);
      fileRef.current.value = null;
      history.push('/feed');
    }
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
      <input type="file" ref={fileRef} onChange={handleFile} />
      <h3>Image preview</h3>
      {preview}
      <button>Make a new bin!</button>
    </form>
  );
}

export default BinCreatePage;