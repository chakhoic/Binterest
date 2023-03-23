import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteBin } from "../../store/binsReducer";

function DeleteButton() {
  const dispatch = useDispatch();
  const { binId } = useParams();
  const history = useHistory();
 ;
  const handleClick = () => {
    dispatch(deleteBin(binId));
    history.push("/");
  };

  return (
    <>
      <button className="deletebuttons" onClick={handleClick}>
        Delete
      </button>
    </>
  );
}

export default DeleteButton;