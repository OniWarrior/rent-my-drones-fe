import { combineReducers} from 'redux'
import signupReducer from './SignupReducer'
import loginReducer from './LoginReducer'
import availableReducer from './AvailableReducer'

const rootReducer = combineReducers({signupReducer,loginReducer,availableReducer})
export default rootReducer