export const SELECT_CANCHA = 'SELECT_CANCHA';
export const FILTER_CANCHA = 'FILTERED_CANCHA';

export const selectCanchas = (id) => ({
  type: SELECT_CANCHA,
  canchasID: id,
})

export const filterCancha = (id) => ({
  type: FILTER_CANCHA,
  categoriaID: id,
})