import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBin } from "../../store/binsReducer";
import "./binForm.css"

const CreateBinForm = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        const bin = {
            img: img,
            title: title,
            body: body
        };

        dispatch(createBin(bin));
        setImg('');
        setTitle('');
        setBody('');
    };


    return (
        <>
        <div id="binback">
                <h1 id="fakeh1">hi</h1>
            <div id="box3">

                <form id="binform" onSubmit={handleSubmit}>
                    <input
                        value={img}
                        onChange={e => setImg(e.target.value)}
                        placeholder="Img URL"
                    />
                    <br />
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <br />
                    <input
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        placeholder="Body"
                    />
                    <br />
                    <input type="submit" value="Create" />
                </form>
            </div>
            <h1 id="fakeh12">hi</h1>
        </div>
        </>
    )
};

export default CreateBinForm;