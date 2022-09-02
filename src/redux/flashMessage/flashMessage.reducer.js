const initialState = {
	type: "",
    title: "",
    detail: ""
};

const flashMessageReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_FLASH_MESSAGE':
            return {
                ...state,
                type: action.payload.type,
                detail: action.payload.message,
                title: action.payload.title
            }
        case 'CLEAR_FLASH_MESSAGE':
            return {
                ...state,
                type: "",
                message: "",
                title: ""
            }
		default:
			return state;
	}
};

export default flashMessageReducer;
