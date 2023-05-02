


function LocationFilter({ changeType, changeDimension }) {
    return (
        <div className='locatonFilter'>

            <select id="location" name="location" onChange={(e) => changeType(e.target.value)}>
                <option value="" selected>Type</option>
                <option value="planet" >Planet</option>
                <option value="microverse" >Microverse</option>
                <option value="dream" >Dream</option>
                <option value="space station" >Space station</option>

            </select>
            <select id="location" name="location" onChange={(e) => changeDimension(e.target.value)}>
                <option value="" selected>Dimension</option>
                <option value="dimension c-137">Dimension C-137</option>


            </select>

        </div>
    )
}

export default LocationFilter;
