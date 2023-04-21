import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    console.log(character)

    return (
        <div>
            {character.name ?
                <>
                    <h3>{character.name}</h3>
                    <h3>{character.status}</h3>
                    <h3>{character.species}</h3>
                    <h3>{character.gender}</h3>
                    <h3>{character.origin.name}</h3>
                    <img src={character.image} alt='' />
                </> : <h4>Loading</h4>
            }
        </div>
    )
}

export default Detail;