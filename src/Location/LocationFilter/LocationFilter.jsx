


function LocationFilter({ changeType, changeDimension }) {
    return (
        <div className='locatonFilter'>

            <select id="location" name="location" onChange={(e) => changeType(e.target.value)}>
                <option value="" selected>Type</option>
                <option value="planet" >Planet</option>
                <option value="microverse" >Microverse</option>
                <option value="dream" >Dream</option>
                <option value="cluster" >Cluster</option>
                <option value="tv" >Tv</option>
                <option value="customs" >Customs</option>
                <option value="Game" >Game</option>
                <option value="menagerie">Menagerie</option>
                <option value="box" >Box</option>
                <option value="spacecraft" >Spacecraft</option>
                <option value="miniverse" >Miniverse</option>

                <option value="dimension">Dimension</option>
                <option value="reality">Reality</option>
                <option value="Death Star">Death Star</option>
                <option value="base">Base</option>
                <option value="liquid">Liquid</option>
                <option value="arcade">Arcade</option>
                <option value="Elemental Rings">Elemental Rings</option>
                <option value="human">Human</option>
                <option value="consciousness">Consciousness</option>
                <option value="country"> Country</option>
                <option value="hell">Hell</option>
                <option value="Police Department">Police Department</option>
                <option value="Space">Space</option>
                <option value="Memory">Memory</option>
                <option value="dwarf planet (Celestial Dwarf)">Dwarf planet (Celestial Dwarf)</option>
                <option value="teenyverse">Teenyverse</option>
                <option value="resort" >Resort</option>
                <option value="fantasy town" >Fantasy town</option>
                <option value="space station" >Space station</option>
                <option value="Daycare">Daycare</option>
                <option value="Machine">Machine</option>
                <option value="Artificially generated world">Artificially generated world</option>
                <option value="Spa">Spa</option>
                <option value="Nightmare">Nightmare</option>
                <option value="Diegesis">Diegesis</option>
                <option value="Quadrant">Quadrant</option>
                <option value="Quasar">Quasar</option>
                <option value="Mount">Mount</option>
                <option value="Convention">Convention</option>

            </select>
            <select id="location" name="location" onChange={(e) => changeDimension(e.target.value)}>
                <option value="" selected>Dimension</option>
                <option value="dimension c-137">Dimension C-137</option>
                <option value="unknown">Unknown</option>
                <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
                <option value="Replacement Dimension">Replacement Dimension</option>
                <option value="Cronenberg Dimension">Cronenberg Dimension</option>
                <option value="Fantasy Dimension">Fantasy Dimension</option>
                <option value="Dimension 5-126">Dimension 5-126</option>
                <option value="Evil Rick's Target Dimension">Evil Rick's Target Dimension</option>
                <option value="Eric Stoltz Mask Dimension">Eric Stoltz Mask Dimension</option>
                <option value="Dimension J19ζ7">Dimension J19ζ7</option>
                <option value="Dimension K-83">Dimension K-83</option>
                <option value="Dimension C-500A">Dimension C-500A</option>
                <option value="Cromulon Dimension">Cromulon Dimension</option>
                <option value="Testicle Monster Dimension">Testicle Monster Dimension</option>

                <option value="Dimension D716-B">Dimension D716-B</option>

                <option value="Unknown dimension">Unknown dimension</option>
                <option value="Giant Telepathic Spiders Dimension">Giant Telepathic Spiders Dimension</option>
                <option value="Fascist Shrimp Dimension">Fascist Shrimp Dimension</option>
                <option value="Fascist Dimension">Fascist Dimension</option>
                <option value="Chair Dimension">Chair Dimension</option>
                <option value="Phone Dimension">Phone Dimension</option>
                <option value=" Pizza Dimension"> Pizza Dimension</option>
                <option value="Tusk Dimension">Tusk Dimension</option>


            </select>

        </div>
    )
}

export default LocationFilter;
