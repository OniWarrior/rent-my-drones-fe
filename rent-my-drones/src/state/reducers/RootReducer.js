import { combineReducers} from 'redux'
import signupReducer from './SignupReducer'
import loginReducer from './LoginReducer'
import availableReducer from './AvailableReducer'
import rentedReducer from './RentedReducer'

const rootReducer = combineReducers({rentedReducer,signupReducer,loginReducer,availableReducer})
export default rootReducer