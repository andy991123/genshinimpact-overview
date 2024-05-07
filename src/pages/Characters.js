import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import hutao from '../imgs/hutao.jpg';
import background from '../imgs/background.jpg';
import Header from '../components/Header.js';
import Table from '../components/Table.js';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(10);
    const headers = ['#', 'name', 'rarity', 'vision', 'weapon']
    const iconSource = ['../imgs/characters/icons/', 'name']
    const category = 'characters'
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
        <div className='container-fluid'>

            <Header />

            <div className='background ' style={{ backgroundImage: `url(${background})` }}>


                <div className='d-flex justify-content-center blur-background text-body-tertiary fs-6 fw-bold'>Welcome to <span className='text-warning'>&nbsp;Tan's&nbsp;</span>  self-developed <span className='text-warning'>&nbsp;Genshin Impact&nbsp;</span>  Wiki webpage. The webpage information will continue to be updated and improved</div>
              
                    <div className='mt-3'>

                    </div>
                    <Table  headers={headers} rows={currentCharacters} iconSource={iconSource} category={category} />

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



        </div >
    )
}

export default Characters