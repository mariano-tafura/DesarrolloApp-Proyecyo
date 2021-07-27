import { createStore, combineReducers} from "redux"
import TurnReducer from "./reducers/TurnReducers"
import CanchaReducer from "./reducers/CanchaReducers"

const RootReducer = combineReducers({
    turn: TurnReducer,
    cancha: CanchaReducer,
})

export default createStore(RootReducer)