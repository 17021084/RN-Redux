export const selectLibrary = (libraryId) => {
  return {
    type: 'SELECTED_LIBRARY',
    payload: libraryId,
  };
};
