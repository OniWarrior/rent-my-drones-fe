import { combineReducers } from 'redux'
import signupReducer from './signup-reducer'
import loginReducer from './login-reducer'
import availableReducer from './available-reducer'
import rentedReducer from './rented-reducer'
import ownedReducer from './owned-reducer'

const rootReducer = combineReducers({ rentedReducer, signupReducer, loginReducer, availableReducer, ownedReducer })
export default rootReducer