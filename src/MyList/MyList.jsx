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

                        <button className='delete' onClick={() => deleteWatchCard(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div >
    )
}


export default MyList;


// import React, { useState } from 'react';
// import './MyList.css';

// function MyList() {
//   const [cards, setCards] = useState([]);
//   const [inputText, setInputText] = useState('');

//   const handleAddCard = () => {
//     if (inputText.trim() !== '') {
//       const newCard = { text: inputText };
//       setCards([...cards, newCard]);
//       setInputText('');
//     }
//   };

//   const handleDeleteCard = (index) => {
//     const newCards = [...cards];
//     newCards.splice(index, 1);
//     setCards(newCards);
//   };

//   const renderCards = () => {
//     return cards.map((card, index) => (
//       <div className="MyListCard" key={index}>
//         <p>{card.text}</p>
//         <button className="delete" onClick={() => handleDeleteCard(index)}>
//           Delete
//         </button>
//       </div>
//     ));
//   };

//   return (
//     <div className="MyList">
//       <h1>My List</h1>

//       <div className="InputCont">
//         <input
//           type="text"
//           className="MyListInput"
//           placeholder="Type episode name"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//         <button className="add" onClick={handleAddCard}>
//           Add
//         </button>
//       </div>

//       <div className="MyListContainer">{renderCards()}</div>
//     </div>
//   );
// }

// export default MyList;

