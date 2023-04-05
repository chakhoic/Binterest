import React, { useState, useEffect } from 'react';
import "./profilePage.css"
import { Redirect } from 'react-router-dom';
import plus from "../../images/plus.png"
import { useSelector, useDispatch } from 'react-redux';
import * as boardActions from '../../store/boardsReducer'
import BoardItem from './boardItem';
import alvin from "../../images/alvin.png";
import { fetchBins, getBins } from '../../store/binsReducer';
import { Link } from 'react-router-dom';
import Video from "../Video/Video2";
import { useHistory } from "react-router-dom"



const ProfilePage = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user)
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const boards = useSelector(state => Object.values(state.boards))
    const bins = useSelector(getBins);

    
    useEffect(() => {
        dispatch(fetchBins());
        dispatch(boardActions.fetchBoards())
    }, []);

    

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
    
    const myBins = bins.filter(bin => bin.authorId === sessionUser.id)
    const myBinsArray = Object.values(myBins);

    const handleClick2 = () => {
        history.push(`/profile`);
    };



    if (!sessionUser) return <Redirect to="/login" />
    return (
        <div style={{position: 'relative'}} >
            <Video style={{position: 'absolute'}} />

            <br></br>
            <div id="profilediv">
            <img id="alvin" src={alvin} alt="alvin" width="130" height="130" />
            </div>
            <br></br>
            <h1 id="demo">Demo User</h1>
            <br></br>
            <ul id="demo2">@demo_user</ul>
            <br></br>
            <h2>15 followers · 0 following</h2>
            <br></br>
            <br></br>
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
                            <button id="buttons" onClick={handleClick2}>Cancel</button>

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
                <br></br>
                <br></br>
            <h2>Created Bins</h2>
            <div id="createdbins">
            <ul>
        {myBinsArray
          .sort(() => Math.random() - 0.5) // shuffle the array randomly
          .map(bin => {
            return (
              <li key={bin.id}>
                <Link to={`/bins/${bin.id}`}>
                  <img id="pics" src={bin.photoUrl} alt="" />
                </Link>
                <div id="binsuserid">{bin.author_id}</div>
                <div id="binstitle">{bin.title}</div>
              </li>
            );
          })}
      </ul>
</div>
            <h1 id="place">hi</h1>
            </div>
        </div>
    );
};

export default ProfilePage;
