import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import hutao from '../imgs/hutao.jpg';
import background from '../imgs/background.jpg';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(10);


    useEffect(() => {
        const characterDataAPI = 'https://genshin.jmp.blue/characters/all?lang=en';
        axios.get(characterDataAPI)
            .then(res => {
                setCharacters(res.data);
            })
            .catch(err => {
                console.error('error fetching character data: ', err);
            })
    }, [])

    // Get current characters
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

            <div className='background' style={{ backgroundImage: `url(${background})` }}>

                <div className='with-blur-backdrop justify-content-center'>
                    <table className='table table-warning table-hover table-sm mx-auto ' style={{ maxWidth: "600px" }}>
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col ">#</th>
                                <th scope="col" className='col-3'>Name</th>
                                <th scope="col" className='col-1'>Rarity </th>
                                <th scope="col" className='col-3'>Vision</th>
                                <th scope="col" className='col-3'>Weapon</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {currentCharacters.map((character, index) => {
                                const imgURl = `../imgs/icons/${character.name}.png`;
                                return (
                                    <tr>
                                        <th scope='row'>
                                            {/* <img src={require(`../imgs/icons/${character.name}.png`)} alt={`${character.name}`} style={{ width: "50px", height: "50px" }}></img> */}
                                        </th>
                                        <td >{character.name}</td>
                                        <td>{character.rarity}</td>
                                        <td>{character.vision}</td>
                                        <td>{character.weapon}</td>
                                    </tr>
                                )

                            })}

                        </tbody>

                    </table>
                    <ul className="pagination pagination-sm justify-content-center ">
                        <li className="page-item">
                            <button className="page-link" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                                &laquo;
                            </button>
                        </li>
                        {Array.from({ length: Math.ceil(characters.length / charactersPerPage) }).map((_, i) => (
                            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button onClick={() => paginate(i + 1)} className="page-link " >{i + 1}</button>
                            </li>
                        ))}
                        <li className="page-item">
                            <button className="page-link" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(characters.length / charactersPerPage)}>
                                &raquo;
                            </button>
                        </li>
                    </ul>
                </div>


            </div>



        </div >
    )
}

export default Characters