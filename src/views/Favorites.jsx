import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
const Favorites = () => {
    const myFavorites = useSelector(state => state.myFavorites)
    return (
        <div>
            {myFavorites.map((char) => {
                return (
                    <div>
                        <Link to={`/detail/${char.id}`}>
                            <h2>{char.name}</h2>
                        </Link>
                        <h2>{char.status}</h2>
                        <h2>{char.species}</h2>
                        <h2>{char.gender}</h2>
                        <h2>{char.origin}</h2>
                        <img src={char.image} alt='' />
                    </div>
                )
            })}
        </div>
    )
}

export default Favorites;