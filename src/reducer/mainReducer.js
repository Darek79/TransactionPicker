export default function reducer(state = '', action) {
    switch (action.type) {
        case 'SETINPUT':
            return action.value;
        default:
            return state;
    }
}
