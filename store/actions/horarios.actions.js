export const SELECT_HORARIO = 'SELECT_HORARIO';
export const FILTER_HORARIO = 'FILTERED_HORARIO';

export const selectHorarios = (id) => ({
  type: SELECT_HORARIO,
  horariosID: id,
})

export const filterHorario = (id) => ({
  type: FILTER_HORARIO,
  categoriaID: id,
})