import { useState } from 'react';
import './MyList.css';

function MyList() {

    const [watchCard, setWatchCard] = useState([]);
    const [text, setText] = useState("")

    const add = () => {


        if (text.trim() !== "") {
            setWatchCard([...watchCard, text])
            setText('')
        }

        const now = new Date();
    }

    const deleteWatchCard = (index) => {
        const newWatchCrad = [...watchCard];
        newWatchCrad.splice(index, 1);
        setWatchCard(newWatchCrad)
    }
    return (
        <div className='MyList'>
            <h1 >My list</h1>

            <div className="InputCont" data-aos='fade-up'>


                <input type="text" className='MylListInput' placeholder='Type episode name' value={text} onChange={(e) => setText(e.target.value)} />
                <button className='add' onClick={add}>add</button>
            </div>

            <div className="MyListContainer" data-aos='fade-up'>
                {watchCard.map((watch, index) => (
                    <div className="watchCard" key={index} data-aos='fade-up'>
                        <p>{watch}</p>
                        <p></p>

                        <button className='delete' onClick={() => deleteWatchCard(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div >
    )
}


export default MyList;

