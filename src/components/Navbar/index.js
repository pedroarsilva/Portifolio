import React from 'react';
import logo2 from "../../static/logo2.png"
import "./style.css";
import {FiMenu} from "react-icons/fi"


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className='container'>

                <a className="navbar-brand" href="#"><img className='logo' src={logo2} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FiMenu color='#FFF' size={24} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">serviços</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">trabalhos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">portfolios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contatos</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;