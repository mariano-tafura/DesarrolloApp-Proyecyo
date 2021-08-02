import { createStore, combineReducers} from "redux"
import TurnReducer from "./reducers/TurnReducers"
import CanchaReducer from "./reducers/CanchaReducers"

const RootReducer = combineReducers({
    turnStore: TurnReducer,
    canchaStore: CanchaReducer,
})

export default createStore(RootReducer)