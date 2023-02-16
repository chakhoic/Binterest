import React, { useState, useEffect } from 'react';
import './water.css';

const WaterfallPage = () => {
    const [bins, setBins] = useState([]);


    useEffect(() => {
        fetch('/api/bins')
            .then(response => response.json())
            .then(data => setBins(data.bins))

    }, []);

    return (
        <div className="waterfall-grid-container">
            {bins && bins.map(bin => (
                <div key={bin.id} className="waterfall-grid-item">
                    {/* <img src={bin.photo} /> */}
                    <h2>{bin.title}</h2>
                    <img src={bin.photo.photoUrl} alt="" />

                    {/* <p>{bin.body}</p> */}
                </div>
            ))}
        </div>
    );
};

export default WaterfallPage;
