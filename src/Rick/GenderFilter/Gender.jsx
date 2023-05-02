

import "./Gender.css";

function GenderFilter({ changeGender, changeSpecies, changeStatus }) {
    return (
        <div className="Filter">
            {/* <label>
                Male
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => changeGender(e.target.value)}
                />
            </label>
            <label>
                Female
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => changeGender(e.target.value)}
                />
            </label> */}


            <select id="gender" name="gender" onChange={(e) => changeGender(e.target.value)}>
                <option value="" selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderles</option>
                <option value="unknown">Unknown</option>

            </select>


            <select id="species" name="species" onChange={(e) => changeSpecies(e.target.value)}>
                <option value="" selected>Species</option>

                <option value="human">Human</option>
                <option value="alien">Alien</option>

            </select>
            <select id="status" name="status" onChange={(e) => changeStatus(e.target.value)}>
                <option value="" selected>Status</option>
                <option value="Dead">Dead</option>
                <option value="alive">Alive</option>
                <option value="unknown">Unknown</option>

            </select>

        </div>
    )

}

export default GenderFilter;