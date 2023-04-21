import Cards from "../components/Cards";

const Home = (props) => {
    return(
        <div>
            <Cards characters={props.characters} onClose ={props.onClose}/>
        </div>
    )
}

export default Home;