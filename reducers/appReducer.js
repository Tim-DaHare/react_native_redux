const initialState = {
    text: ''
}

const app = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_TEXT':
            return {
                ...state,
                text: action.value
            }
        default:
            return state;
    }
}

export default app