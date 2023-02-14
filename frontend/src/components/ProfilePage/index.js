import React, { useState, useEffect } from 'react';
import "./profilePage.css"
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import plus from "../../images/plus.png"
import { useSelector, useDispatch } from 'react-redux';
import * as boardActions from '../../store/boardsReducer'
import alvin from "../../images/alvin.png";
import share from "../../images/shareedit.png";
import BoardItem from './boardItem';





const ProfilePage = (props) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const boards = useSelector(state => Object.values(state.boards))

    const sessionUser = useSelector(state => state.session.user)
    // useEffect(()=> {dispatch(boardActions.fetchBoards(sessionUser.id))}, [])

    const boardsIndex = boards.map((board) => <BoardItem board={board} />)
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCloseModal();
        const makeboard = {
            title: title,
            author_id: sessionUser.id
        }
        return dispatch(boardActions.createBoard(makeboard, sessionUser.id))
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
            <br></br>
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
            <div id="boarddiv">
            {boardsIndex}
            </div>
            <hr></hr>
            <div id="binsdiv">
            <h2>Unorganized Bins</h2>
            <h1 id ="place">hi</h1>
            <h1 id="place">hi</h1>
            </div>
        </div>
    );
};

export default ProfilePage;
