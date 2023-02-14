import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBin } from "../../store/binsReducer";
import "./binForm.css"


const CreateBinForm = ({ setNewBin }) => {
    const dispatch = useDispatch();
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [photoFile, setPhotoFile] = useState(null);


    const handleInput = e => {
        setTitle(e.currentTarget.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('bin[title]', title);
        if (photoFile) {
            formData.append('bin[photo]', photoFile);
        }
// fetch route?
        const response = await fetch('/api/bins', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            const bin = await response.json();
            setTitle("");
            setPhotoFile(null);
            setNewBin(bin);
        }
    }
   
    const handleFile = ({ currentTarget }) => {
        const file = currentTarget.files[0];
        setPhotoFile(file);
    }

    return (
        <>
        <div id="binback">
                <h1 id="fakeh1">hi</h1>
            <div id="box3">

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="post-title">Add your title</label>
                        <input type="text"
                            id="post-title"
                            value={title}
                            onChange={handleInput}
                            required />
                        <input type="file" onChange={handleFile} />
                        <button>Save</button>
                    </form>
            </div>
            <h1 id="fakeh12">hi</h1>
        </div>
        </>
    )
};

export default CreateBinForm;