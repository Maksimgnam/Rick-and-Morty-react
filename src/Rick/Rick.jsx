import React, { useState, useEffect } from 'react';
import './Rick.css'

import AOS from 'aos'
import 'aos/dist/aos.css'


function RickAndMorty() {
    const [characters, setCharacters] = useState([]);
    const [filter, setFilter] = useState('');

    const [page, setPage] = useState(1)



    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])




    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)



            }
            )
            .catch(error => console.error(error));
    }, [page]);

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(filter.toLowerCase())
    )



    function PrevPage() {
        if (page > 1)
            setPage(page - 1)
    }

    function NextPage() {
        setPage(page + 1)
    }

    return (
        <div className='characterContainer'>

            <h1 data-aos='fade-up'>Characters</h1>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={event => setFilter(event.target.value)}
                className='character__input'

                data-aos='fade-up'
            />

            {filteredCharacters.length > 0 ? (
                <div className='List'>

                    {filteredCharacters.map(character => (
                        <div className='card' key={character.id} data-aos="fade-up">
                            <img src={character.image} alt="" className='avatar' />
                            <li className='li'> {character.name}</li>
                            <div className='text'>
                                <li className='lir'><span>gender:</span> {character.gender}</li>
                                <li><span>status:</span> {character.status}</li>
                                <li><span>species:</span> {character.species}</li>
                            </div>





                        </div>


                    ))}

                </div>

            ) : (
                <p className='no__cards'>No characters found...</p>
            )}

            <div className='pagination' data-aos='fade-up'>
                <button onClick={PrevPage} disabled={page === 1} className='PagBtn'>Prev</button>
                <div className='pageCount'>{`Page ${page}`}</div>
                <button onClick={NextPage} disabled={page === 41} className="PagBtn">Next</button>
            </div>




        </div >









    );
}

export default RickAndMorty;
