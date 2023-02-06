import { 
    GET_ALL_TUTORIALS, 
    DELETE_ALL_TUTORIALS, 

    CREATE_TUTORIAL, 
    UPDATE_TUTORIAL,
    DELETE_TUTORIAL, 
} from "../actions/types";

const initialState = [];

function tutorialReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_TUTORIALS:
            return payload;
        
        case DELETE_ALL_TUTORIALS:
            return [];

        case CREATE_TUTORIAL:
            return [...state, payload];
        
        case UPDATE_TUTORIAL:
            return state.map((tutorial) => {
                if (tutorial.id === payload.id) {
                    return {
                        ...tutorial,
                        ...payload,
                    };
                } else {
                    return tutorial;
                }
            });
        
        case DELETE_TUTORIAL:
            return tutorial.filter(({ id }) => id !== payload.id);
        
        default:
            return state;
    }
}

export default tutorialReducer;
