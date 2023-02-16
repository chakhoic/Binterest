import React, { useState, useEffect } from 'react';
import "./profilePage.css"
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import plus from "../../images/plus.png"
import { useSelector, useDispatch } from 'react-redux';
import * as boardActions from '../../store/boardsReducer'
import share from "../../images/shareedit.png";
import BoardItem from './boardItem';
import luis from "../../images/feed/5.jpeg";
import alvin2 from "../../images/00.jpeg"
import alvin from "../../images/alvin.png"







const ProfilePage = (props) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const boards = useSelector(state => Object.values(state.boards))
    useEffect(() => {
        dispatch(boardActions.fetchBoards())
    }, []);

    const sessionUser = useSelector(state => state.session.user)

    const boardsIndex = boards.map((board) => <BoardItem setShowModal={setShowModal} board={board} />)
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCloseModal();
        const makeboard = {
            title: title,
            author_id: sessionUser.id
        }
        return dispatch(boardActions.createBoard(makeboard))
    }

    if (!sessionUser) return <Redirect to="/login" />
    return (
        <div id="profileback">
            <br></br>
            <div id="profilediv">
            <img id="alvin" src={alvin} alt="alvin" width="120" height="120" />
            </div>
            <br></br>
            <h1 id="demo">Demo User</h1>
            <br></br>
            <ul id="demo2">@demo_user</ul>
            <br></br>
            <h2>15 followers · 0 following</h2>
            <br></br>
            <ul id="share">
            <img id="shares" src={share} alt="share" width="260" height="90" />
            </ul>
            <hr></hr>
            <div id="modal">
            <button id ="plus" onClick={handleOpenModal}><img id="plus" src={plus} alt="plus" /></button>
            {showModal && (
                <div className="modal-background">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <h2 id="create">Create Board</h2>
                            <br></br>
                            <div>
                                <label id="name" htmlFor="title">Name </label>
                                <br></br>
                                    <br></br>
                                <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                                <br></br>
                                <br></br>
                            <button id="buttons" type="submit" >Create Board</button>
                        </form>
                    </div>
                </div>
            )}
            </div>
            
            <h2>Created Boards</h2>
            <br></br>
            <br></br>
            <div id="boarddiv">
            <br></br>
            {boardsIndex}
            </div>
            <hr></hr>
            <div id="binsdiv">
                <br></br>
                <br></br>

            <h2>Unorganized Bins</h2>
            <div id="binz">
                    <img src={alvin2} />
                    <img src={luis} />
                    <img src={luis} />
                    <img src={luis} />
                    <img src={luis} />
                    <img src={alvin2} />
                    <img src={luis} />
                    <img src={luis} />
            </div>
            <h1 id ="place">hi</h1>
            <h1 id="place">hi</h1>
            </div>
        </div>
    );
};

export default ProfilePage;
