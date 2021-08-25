import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/auth.reducer';
import CanchaReducer from './reducers/cancha.reducers';
import ConfirmacionReducer from './reducers/confirmacion.reducers';
import DeporteReducer from './reducers/deporte.Reducers';
import HorariosReducer from './reducers/horarios.reducers';
import OrderReducer from './reducers/order.reducer';

const RootReducer = combineReducers({
  deportes: DeporteReducer ,
  canchas: CanchaReducer,
  horarios: HorariosReducer,
  // reservas:ReservaReducer,
  confirmacion: ConfirmacionReducer,
  auth: AuthReducer,
  orders: OrderReducer,

})

export default createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk),
  ),
)