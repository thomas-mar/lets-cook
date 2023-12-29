import React from "react";

const Header = () => {



    return (

        <div className="header" >
            <nav className="navbar navbar-expand-lg mt-2">
                <div className="container justify-content-center px-0">
                    <div class="row w-100 align-items-center">
                        <div class="col-3">
                            <div className="logo">
                                <a href="/">
                                    <img src="/assets/images/tastebuds.png" alt="logo" />

                                </a>
                            </div>
                        </div>
                        <div class="col-6">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center mx-auto">
                                    <li className="nav-item">
                                        <a className="px-4 nav-link" href="/about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="px-4 nav-link" href="/recipes">Recipes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="px-4 nav-link" href="/recipes">Contribute</a>
                                    </li>




                                </ul>

                            </div>
                        </div>

                        <div class="col-3">

                            <button class="btn btn-primary float-end ms-2">Subscribe</button>
                            <a class="social-link float-end" href="/">                   
                                <i class="fi fi-brands-facebook"></i>
                            </a>
                            <a class="social-link float-end" href="/">                   
                                <i class="fi fi-brands-instagram"></i>
                                
                            </a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                    </div>


                </div>
            </nav>





        </div>




    )
}


export default Header;