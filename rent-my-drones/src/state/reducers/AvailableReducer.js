import{
    AVAILABLE_START,
    AVAILABLE_SUCCESS,
    AVAILABLE_FAILURE
} from '../actions/AvailableActions'

const initialState={
    drones:{},
    loading:true,
    error:''
}


const availableReducer=(state=initialState,action)=>{
    switch(action.type){
        case AVAILABLE_START:
            return{...state,loading:true}
        case AVAILABLE_SUCCESS:
            return{...state,drones:action.payload,loading:false}
        case AVAILABLE_FAILURE:
            return{...state,error:action.payload,loading:false}
        default:
            return state
    }

}

export default availableReducer