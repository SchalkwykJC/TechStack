export default (state = null, action) => {

    switch (action.type) {
        case 'selected_libary':
            return action.payload;
        default:
            return state;
    }

}