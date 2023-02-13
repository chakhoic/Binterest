import React, { useState, useEffect } from 'react';
import "./profilePage.css"
import { NavLink, useHistory } from 'react-router-dom';
import plus from "../../images/plus.png"



const ProfilePage = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    

    return (
        <div id="profileback">
            <h1>users's Profile</h1>
            <h2>Binned Items:</h2>
            <button onClick={handleOpenModal}><img id="plus" src={plus} alt="plus" /></button>
            {showModal && (
                <div className="modal-background">
                    <div className="modal-content">
                        <form>
                            <h2>Create Board</h2>
                            <div>
                                <label htmlFor="title">Name </label>
                                <input type="text" id="title" name="title" />
                            </div>
                            <button type="submit">Create Board</button>
                            <button type="button" onClick={handleCloseModal}>Close</button>
                        </form>
                    </div>
                </div>
            )}
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
            <h1>users's Profile</h1>
        </div>
    );
};

export default ProfilePage;
