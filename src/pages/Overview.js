import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import hutao from '../imgs/hutao.jpg';
import background from '../imgs/background.jpg';

function Overview() {






    return (
        <body className='body-bg'>
            <div className='container'>
                <nav className="navbar navbar-expand-sm bg-header">
                    <div class="container-fluid">
                        <img className="hutao ms-5" src={hutao} alt="hutao" />

                        <div className="collapse navbar-collapse" >
                            <ul className="navbar-nav ">
                                <li className='nav-item ms-3'><NavLink className="text-white text-decoration-none nav-link" to="/">MainPage</NavLink></li>
                                <li className='nav-item'><NavLink className="text-white text-decoration-none nav-link" to="/Characters">Characters</NavLink></li>
                                <li className='nav-item'><NavLink className="text-white text-decoration-none nav-link" to="/Weapons">Weapons</NavLink></li>
                                <li className='nav-item'><NavLink className="text-white text-decoration-none nav-link" to="/Artifacts">Artifacts</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='container'>
                <div className='background' style={{ backgroundImage: `url(${background})` }}>


                    <div className=' p-md-5 bg-title ' style={{ transform: 'scale(0.95)' }}>
                        <div className=' col-lg-6 '>
                            <h1 className='display-4 fst-italic text-light fw-bold'>Tan's self developed Genshin Impact Wiki webpage</h1>
                            <p className='lead mt-4 text-light'>This is a self developed Genshin impact wiki webpage which is made by a player called Tan. Feel free to enjoy!</p>
                        </div>
                    </div>

                    <div className='row row-cols-3  '>
                        <div className='col-md-4'>
                            <div className="card mb-3 bg-title" style={{ maxWidth: 550, transform: 'scale(0.9)' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="..." className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fst-italic text-light">Characters's Page</h5>
                                            <p className="card-text text-light">This is a page including every Character's info.</p>
                                            <p className="card-text "><NavLink className="text-primary text-decoration-none nav-link" to="/Characters">Characters</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card mb-3  bg-title" style={{ maxWidth: 550, transform: 'scale(0.9)' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="..." className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fst-italic text-light">Weapons's Page</h5>
                                            <p className="card-text text-light">This is a page including every Weapons info.</p>
                                            <p className="card-text "><NavLink className="text-primary text-decoration-none nav-link" to="/Weapons">Weapons</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card mb-3  bg-title" style={{ maxWidth: 550, transform: 'scale(0.9)' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="..." className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fst-italic text-light">Artifacts's Page</h5>
                                            <p className="card-text text-light">This is a page including every Artifacts's info.</p>
                                            <p className="card-text "><NavLink className="text-primary text-decoration-none nav-link" to="/Artifacts">Artifacts</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>

                </div>
            </div>





        </body>






    )
}

export default Overview