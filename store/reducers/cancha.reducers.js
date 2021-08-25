import { CANCHAS } from '../../data/dataCanchas';
import { SELECT_CANCHA,FILTER_CANCHA } from '../actions/canchas.actions';

const INITIAL_STATE = {
  list: CANCHAS,
  filteredCanchas: [],
  selected: null,
}

const CanchaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CANCHA:
      return {
        ...state,
        selected: state.list.find(canchas => canchas.id === action.canchasID),
      };
    case FILTER_CANCHA:
      return {
        ...state,
        filteredCanchas: state.list.filter(canchas => canchas.categoria === action.categoriaID),
      }
    default:
      return { ...state };
  }
}

export default CanchaReducer;