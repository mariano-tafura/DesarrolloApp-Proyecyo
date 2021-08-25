import { HORARIOS } from '../../data/dataHorarios';
import { SELECT_HORARIO,FILTER_HORARIO } from '../actions/horarios.actions';

const INITIAL_STATE = {
  list: HORARIOS,
  filteredHorarios: [],
  selected: null, 
}

const HorariosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_HORARIO:
      return {
        ...state,
        selected: state.list.find(horarios => horarios.id === action.horariosID),
      };
    case FILTER_HORARIO:
      return {
        ...state,
        filteredHorarios: state.list.filter(horarios => horarios.categoria === action.categoriaID),
      }
    default:
      return { ...state };
  }
}

export default HorariosReducer;