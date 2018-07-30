const initialState = {
	data: null
}

const mainReducer = (state = initialState, action) => {
	if(action.type === 'GET_DATA') {
		return {
			...state,
			data: action.payload
		}
	} else if(action.type === 'CLEAR_DATA') {
		return	{
			...state,
			data: action.payload
		}
	} else {
		return	{
			...state
		}
	}
}


export default mainReducer;
