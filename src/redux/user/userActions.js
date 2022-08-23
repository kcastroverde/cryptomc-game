//DATA
    const DataUser = {
        token: 0,
        gas: 10,
        contract: 10
    }


const fetchUserRequest = () => {
    return {
        type: 'REQUEST_USER_DATA',
    }
}

const fetchUserSuccess = (payload) => {
    return {
        type: 'RECEIVE_USER_DATA',
        payload: payload
    }
}

const fetchSetToken = (payload) => {
    return {
        type: 'SET_TOKEN',
        payload: payload
    }
}

const fetchSetGas = (payload) => {
    return {
        type: 'SET_GAS',
        payload: payload
    }
}

const fetchSetContract = (payload) => {
    return {
        type: 'SET_CONTRACT',
        payload: payload
    }
}

const fetchUserError = (payload) => {
    return {
        type: 'RECEIVE_USER_ERROR',
        payload: payload
    }
}

export const fetchUser = () => {
    return async (dispatch) => {
        dispatch(fetchUserRequest());
        try{
        setTimeout(() => {
            dispatch(fetchUserSuccess(DataUser));
        }, 1000);
        }catch(err){
            dispatch(fetchUserError(err));
            console.log("error",err);
        }
    }
}


