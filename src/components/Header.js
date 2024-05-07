import React from 'react'
import hutao from '../imgs/hutao.jpg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <img class="hutao   " src={hutao} alt="hutao" />

                    <div class="collapse navbar-collapse" >
                        <div class="navbar-nav">
                            <ul class="nav  ">
                                <li className='nav-link '><NavLink className="text-white text-decoration-none" to="/">MainPage</NavLink></li>
                                <li className='nav-link'><NavLink className="text-white text-decoration-none" to="/Characters">Characters</NavLink></li>
                                <li className='nav-link'><NavLink className="text-white text-decoration-none" to="/Weapons">Weapons</NavLink></li>
                                <li className='nav-link'><NavLink className="text-white text-decoration-none" to="/Artifacts">Artifacts</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Header