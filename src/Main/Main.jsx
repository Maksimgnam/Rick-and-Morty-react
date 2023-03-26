import './Main.css'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
function Main() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    return (

        <div className='Main'>

            <div className="Main__texts" >

                <h1 className='Main__h3' data-aos='fade-up'>Rick and Morty</h1>
                <p className='Main__p' data-aos='fade-up'>Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Television Distribution. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions  </p>
                <button class="Main__btn" data-aos='fade-up'>Start</button>


            </div>
            <div className="Main__img" data-aos='fade-left'>


            </div>
        </div >
    )
}
export default Main;
