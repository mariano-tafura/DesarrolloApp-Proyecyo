export const SELECT_DEPORTE = 'SELECT_DEPORTE';

export const selectDeporte = (id) => ({
  type: SELECT_DEPORTE,
  categoriaID: id,
})