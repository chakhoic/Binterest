import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBins, fetchBins } from "../../store/binsReducer"


function BinIndex() {
    const dispatch = useDispatch()
    const bins = useSelector(getBins)
    useEffect(() => {
        dispatch(fetchBins())
    }, [dispatch])
console.log(bins)
    
    return (
        <ul>
            {bins.map(bin => {
                return (
                    <>
                    <br></br>
                    <li key={bin.id}>
                        <h2>{bin.title}</h2>
                        <img src={bin.photo.photoUrl} alt="" />
                    </li>
                    </>
                );
            })}
        </ul>
    );
}

export default BinIndex;