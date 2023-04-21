const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const {id} = req.params;
    axios.get(URL + id).then(
        (response) => {
            const character = {
                id: id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin,
                image: response.data.image,
                status: response.data.status,
            };
            res.status(200).json(character);
        }
    ).catch(
        (error) => res.status(500).json({error: error.message})
    )
}

module.exports = getCharById;