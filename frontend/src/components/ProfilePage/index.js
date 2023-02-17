import React, { useState, useEffect } from 'react';
import "./profilePage.css"
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import plus from "../../images/plus.png"
import { useSelector, useDispatch } from 'react-redux';
import * as boardActions from '../../store/boardsReducer'
import share from "../../images/shareedit.png";
import BoardItem from './boardItem';
import alvin2 from "../../images/00.jpeg";
import alvin from "../../images/alvin.png";
import a1 from "../../images/feed/1.jpeg";
import a2 from "../../images/feed/2.png";
import a3 from "../../images/feed/3.png";
import a4 from "../../images/feed/4.png";
import a5 from "../../images/feed/5.jpeg";
import a6 from "../../images/feed/6.jpeg";
import a7 from "../../images/feed/7.png";
import a8 from "../../images/feed/8.png";
import a9 from "../../images/feed/9.png";
import a10 from "../../images/feed/10.png";
import a11 from "../../images/feed/11.png";
import a12 from "../../images/feed/12.png";
import jt from "../../images/feed/jt.png"
import dan from "../../images/feed/dan.png";
import jan from "../../images/feed/jan.png";
import jiong from "../../images/feed/jiong.jpeg";
import kev from "../../images/feed/kev.jpeg";
import log from "../../images/feed/log.png";
import mei from "../../images/feed/mei.jpeg";
import sti from "../../images/feed/sti.png";
import yen from "../../images/feed/yen.png";
import yo from "../../images/feed/yo.png";
import xd from "../../images/feed/xd.png";
import born from "../../images/feed/born.png";
import jo from "../../images/feed/jo.jpg";
// import tim from "../../images/feed/xd.png";




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

    const randoms = [a1, a2].sample
    console.log(randoms)

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
                    <img src={a1} />
                    <img src={sti} height="500px" width="300px" />
                    <img src={yen} height="200px" width="400px" />
                    <img src={a2} />
                    <img src={a3} />
                    <img src={dan} height="500px" width="300px" />
                    <img src={a4} />
                    <img src={yo} />
                    <img src={born} height="200px" width="250px" />
                    <img src={a5} />
                    <img src={mei} height="350px" width="350px" />
                    <img src={jo} height="300px" width="300px" />
                    <img src={a6} />
                    <img src={jan} height="350px" width="250px" />
                    <img src={jt} height="500px" width="500px" />
                    <img src={a7} />
                    <img src={a8} />
                    <img src={jiong} height="500px" width="300px" />
                    <img src={a9} />
                    <img src={a10} />
                    <img src={kev} height="350px" width="250px" />
                    <img src={a11} />
                    <img src={log} />
                    <img src={a12} />
                    <img src={xd} />
            </div>
            <h1 id ="place">hi</h1>
            <h1 id="place">hi</h1>
            </div>
        </div>
    );
};

export default ProfilePage;
