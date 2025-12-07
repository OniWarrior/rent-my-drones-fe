import {
    OWNED_START,
    OWNED_SUCCESS,
    OWNED_FAILURE
} from '../actions/owned-actions'


const initialState = {
    drones: {},
    loading: true,
    error: ''
}

const ownedReducer = (state = initialState, action) => {
    switch (action.type) {
        case OWNED_START:
            return { ...state, loading: true }
        case OWNED_SUCCESS:
            return { ...state, loading: false, drones: action.payload }
        case OWNED_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export default ownedReducer;