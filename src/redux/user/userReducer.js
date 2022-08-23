const initialState = {
    token: 0,
    gas: 0,
    contract: 0,
    loading: false,
    error: false,
    errorMessage: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_USER_DATA':
            return {
                ...state,
                loading: true
            }
        case 'RECEIVE_USER_DATA':
            return {
                ...state,
                token: action.payload.token,
                gas: action.payload.gas,
                contract: action.payload.contract,
                loading: false
            }
        case 'RECEIVE_USER_ERROR':
            return {
                ...state,
                error: true,
                errorMessage: action.payload.errorMessage,
                loading: false
            }
        case 'SET_TOKEN':
            return {
                ...state,
                loading: false,
                token: action.payload
            }
        case 'SET_GAS':
            return {
                ...state,
                loading: false,
                gas: action.payload
            }
        case 'SET_CONTRACT':
            return {
                ...state,
                loading: false,
                contract: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;