import { useParams } from "react-router-dom";

function BoardPage() {
    const id = useParams();

    return (
        <ul>
            {id}
        </ul>
    );
}

export default BoardPage;