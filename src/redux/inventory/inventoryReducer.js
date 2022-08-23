const initialState = {
    burgers: [],
    bykes: [],
    loading: false,
    error: false,
    errorMessage: ''
}

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_INVENTORY_DATA':
            return {
                ...state,
                loading: true
            }
        case 'RECEIVE_INVENTORY_DATA':
            return {
                ...state,
                burgers: action.payload.burgers,
                bykes: action.payload.bykes,
                loading: false
            }
        case 'RECEIVE_INVENTORY_ERROR':
            return {
                ...state,
                error: true,
                errorMessage: action.payload.errorMessage,
                loading: false
            }
        default:
            return state;
    }
}

export default inventoryReducer;