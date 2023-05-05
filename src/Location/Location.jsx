
import './Location.css'

import { useEffect, useState } from 'react';

import AOS from 'aos'
import 'aos/dist/aos.css'

import LocationFilter from './LocationFilter/LocationFilter';






function Location() {
    const [locations, setLocations] = useState([]);

    const [filter, setFilter] = useState('');

    const [page, setPage] = useState(1)

    const [type, setType] = useState('');
    const [dimension, setDimension] = useState('');


    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location?page=${page}&type=${type}&dimension=${dimension}`)
            .then(response => response.json())
            .then(data => {
                setLocations(data.results)



            }
            )
            .catch(error => console.error(error));
    }, [page, type, dimension]);

    const filteredLocations = locations.filter(location =>
        location.name.toLowerCase().includes(filter.toLowerCase())
    )

    function PrevPage() {
        if (page > 1)
            setPage(page - 1)
    }

    function NextPage() {
        setPage(page + 1)
    }
    const changeType = (slectedType) => {
        setType(slectedType)
    }
    const changeDimension = (slectedDimension) => {
        setDimension(slectedDimension)
    }


    return (

        <div className='locationContainer' id='Location'>
            <h1 className='Location__h1'>Location</h1>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={event => setFilter(event.target.value)}
                className='character__input'
            />

            <div className="Filter">
                <LocationFilter changeType={changeType} changeDimension={changeDimension} />

            </div>


            {filteredLocations.length > 0 ? (
                <div className='List loc__list'>

                    {filteredLocations.map(location => (
                        <div className='location__card' key={location.id} data-aos='fade-up'>

                            <li className='loc__name'> {location.name}</li>
                            <div className='loc__text'>
                                <li className='loc__li'> <span>type: </span> {location.type}</li>
                                <li className='loc__li'> <span>dimension: </span> {location.dimension}</li>


                            </div>





                        </div>


                    ))}

                </div>

            ) : (
                <p className='no__cards'>No locations found...</p>
            )}
            <div className='pagination loc__pagination' data-aos='fade-up'>
                <button className='PagBtn' onClick={PrevPage} disabled={page === 1}>Prev</button>
                <div className='pageCount'>{`Page ${page}`}</div>
                <button className="PagBtn" onClick={NextPage} disabled={page === 7}>Next</button>
            </div>

        </div>

    )
}

export default Location;
