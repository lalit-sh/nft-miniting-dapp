const initialState = {
    loading: false,
    account: null,
    smartContract: null,
    web3: null,
    errorMsg: "",
    connected: false
};

const blockchainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONNECTION_REQUEST":
            return {
                ...initialState,
                loading: true,
            };
        case "CONNECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                account: action.payload.account,
                smartContract: action.payload.smartContract,
                web3: action.payload.web3,
                connected: true
            };
        case "CONNECTION_FAILED":
            return {
                ...initialState,
                loading: false,
                errorMsg: action.payload,
            };
        case "UPDATE_ACCOUNT":
            return {
                ...state,
                account: action.payload.account,
            };
        case "DISCONNECTED":
            return {
                ...state,
                loading: false,
                account: null,
                smartContract: null,
                web3: null,
                connected: false
            }
        default:
            return state;
    }
};

export default blockchainReducer;
