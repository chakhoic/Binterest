import "./boardItem.css"

const BoardItem = (props) => {
    return (
        <div id="board2">
            <div id="images"></div>
            <div id="title2">{props.board.title}</div>
        </div>


    )
}

export default BoardItem