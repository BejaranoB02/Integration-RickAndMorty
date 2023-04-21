const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            console.log(action.payload)
            return {
                ...state, myFavorites: [...state.myFavorites, action.payload],
            }
        case "REMOVE_FAV":
            console.log(action.payload)
            return { ...state, myFavorites: state.myFavorites.filter((char) => char.id !== action.payload) }
        default:
            return { ...state }
    }
};

export default rootReducer