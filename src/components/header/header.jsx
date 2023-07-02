import React from "react";
import { useState } from "react";
import logo from "../../images/logo.png"

const Header = () => {

    const [searchTerm, setSearchTerm] = useState();

    const searchItems = (term) => {
        alert("Searching for " + term);
    }

    return (

        <div className="header" >
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="logo" />

                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/recipes">Recipes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>


                        </ul>
                        <div className="search input-group">
                            <input className="search-recipes form-control" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <button className="search-button btn btn-primary" onClick={() => searchItems(searchTerm)}>Search</button>
                        </div>
                    </div>
                </div>
            </nav>





        </div>




    )
}


export default Header;