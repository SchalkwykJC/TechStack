export const selectedLibrary = (libraryId) => {
    return {
        type: 'selected_libary',
        payload: libraryId
    };
};