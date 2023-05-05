import React, { useState, useEffect } from 'react';
import './Episodes.css'


import AOS from 'aos'
import 'aos/dist/aos.css'


function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    const [filter, setFilter] = useState('');





    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])




    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode`)

            .then(response => response.json())
            .then(data => {
                setEpisodes(data.results)



            }
            )
            .catch(error => console.error(error));
    }, []);

    const filteredEpisode = episodes.filter(episode =>
        episode.name.toLowerCase().includes(filter.toLowerCase())
    )













    return (

        <div className='EpisodeContainer' id='Episode'>
            <h1 className='Episode__h1'>Episodes</h1>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={event => setFilter(event.target.value)}
                className='character__input'

                data-aos='fade-up'
            />




            {filteredEpisode.length > 0 ? (
                <div className='episod__list'>

                    {filteredEpisode.map(episode => (
                        <div className='location__card' key={episode.id} data-aos='fade-up'>

                            <li className='loc__name'> {episode.name}</li>
                            <div className='loc__text'>

                                <li className='loc__li'> <span>type: </span> {episode.air_date}</li>
                                <li className='loc__li'> <span>name: </span> {episode.episode}</li>



                            </div>





                        </div>


                    ))}

                </div>

            ) : (
                <p className='no__cards'>No episodes found...</p>
            )}


        </div>










    );
}

export default Episodes;
