export default (state = 0, action) => {
  switch (action.type) {
    case 'SELECTED_LIBRARY':
      return action.payload;
    default:
      return state;
  }
};
// always return non undefined value
