import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
}
from '../actions/SignupActions'

const initialState={
    signup:{},
    loading:false,
    error:''
}

const signupReducer=(state=initialState,action)=>{
    switch(action.type){
        case SIGNUP_START:
            return {...state,loading:true}
        case SIGNUP_SUCCESS:
            return {...state,signup:action.payload,loading:false}
        case SIGNUP_FAILURE:
            return {...state,signup:action.payload,loading:false}
        default:
            return state;
    }

}

export default signupReducer