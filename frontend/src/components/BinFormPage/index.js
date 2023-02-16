import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { createBin } from "../../store/binsReducer";
import "./binForm.css"


const CreateBinForm = ({ setNewBin }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [photoFile, setPhotoFile] = useState(null);
      const [photoUrl, setPhotoUrl] = useState(null);

    const history = useHistory()
    const profileButton = () => {
        history.push("/profile")
    }

    const handleInput = e => {
        setTitle(e.currentTarget.value);
    }

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('bin[title]', title);
//         if (photoFile) {
//             formData.append('bin[photo]', photoFile);
//         }
// // fetch route?
//         const response = await fetch('/api/bins', {
//             method: 'POST',
//             body: formData
//         });
//         if (response.ok) {
//             const bin = await response.json();
//             setTitle("");
//             setPhotoFile(null);
//             // setBody("");
//             setNewBin(bin);
//         }
//     }
   
    const handleFile = ({ currentTarget }) => {
        const file = currentTarget.files[0];
        setPhotoFile(file);
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => setPhotoUrl(fileReader.result);
        }; 
    }

    let preview = null;
    if (photoUrl) preview = <img src={photoUrl} alt="" />;

    return (
        <>
        <div id="binback">
                <h1 id="fakeh1">hi</h1>
            <div id="box3">

                    <form onSubmit={profileButton}>                        
                    <br></br>   
                        <div id="add">
                        <label htmlFor="bin-title">Add your title</label>
                            <hr></hr>
                        </div>
                        <br></br>
                        <div>
                        <input type="text"
                            id="bin-title"
                            value={title}
                            onChange={handleInput}
                            required />
                            <br></br>
                        <input type="file" onChange={handleFile} />
                        </div>
                        <br></br>
                        {preview}
                        <button id="signup">Save</button>
                    </form>
            </div>
            <h1 id="fakeh12">hi</h1>
        </div>
        </>
    )
};

export default CreateBinForm;