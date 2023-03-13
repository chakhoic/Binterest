import "./boardItem.css"
import { useDispatch } from "react-redux"
import { deleteBoard } from "../../store/boardsReducer"
import { useSelector } from "react-redux"
import { updateBoard } from "../../store/boardsReducer"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const BoardItem = (props) => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const [title, setTitle] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        handleCloseModal()
        const updatedBoard = {
            id: props.board.id,
            title: title,
            author_id: sessionUser.id
        }
        dispatch(updateBoard(updatedBoard))
    }

    const handleClick = e => {
        e.preventDefault()
        history.push(`/boards/${props.board.id}`)
    }

    const handleDelete = e => {
        e.preventDefault()
        dispatch(deleteBoard(props.board.id))
    }
    return (
        <div id="board2" onClick={handleClick}>
            <div id="images"></div>
            <div id="title2">{props.board.title}
                <div id="ex" onClick={handleDelete}>✖</div>
                <div id="edits" onClick={handleOpenModal}>✎</div>
            </div>
            <div id="modal">
                {showModal && (
                    <div className="modal-background">
                        <div className="modal-content">
                            <form onSubmit={handleSubmit}>
                                <h2 id="create">Update Board</h2>
                                <br></br>
                                <div>
                                    <label id="name" htmlFor="title">Name </label>
                                    <br></br>
                                    <br></br>
                                    <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <br></br>
                                <br></br>
                                <button id="buttons" type="submit" >Update Board</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>


    )
}

export default BoardItem