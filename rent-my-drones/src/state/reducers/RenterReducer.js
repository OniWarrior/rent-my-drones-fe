import {
    RENTED_START,
    RENTED_SUCCESS,
    RENTED_FAILURE
} from '../actions/RentedActions'


const initialState={
    rentedDrones:{},
    loading:true,
    error:''
}

const rentedReducer=(state=initialState,action)=>{
    switch(action.type){
        case RENTED_START:
            return {...state,loading:true}
        case RENTED_SUCCESS:
            return {...state,loading:false,rentedDrones:action.payload}
        case RENTED_FAILURE:
            return {...state,loading:false,error:action.payload}

    }

}