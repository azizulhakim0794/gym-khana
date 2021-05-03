import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './WhiteNav.css'

const WhiteNav = () => {
    const history = useHistory()
    const handleGoLogin = () => {
        history.push('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light text-white sticky-top">
            <div className="container-fluid">
                <p className="h4">POWER <span className="text-warning">X</span></p>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse nav-right" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link active text-decoration-none text-white ms-3 mr-3" to="/home" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active text-decoration-none text-white ms-3 mr-3" to="/ourClasses" aria-current="page" >Ous classes</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active text-decoration-none text-white ms-3 mr-3 " to="/pricePlans" aria-current="page" >Pricing</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active text-decoration-none text-white ms-3 mr-3 " to="/myOrders" aria-current="page" >My Orders</Link>
                        </li>
                        <li className="mx-3 nav-item">
                        <button className="btn btn-warning" onClick={handleGoLogin}>Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default WhiteNav;