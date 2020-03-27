export const updateShelfData = (id, data) => {
  console.log('DATA', data);
  return {
    type: 'UPDATE_SHELF_DATA',
    payload: {id, data},
  };
};
