import axios from "axios"

export function setData(data) {
    return	{
    	type: "GET_DATA",
    	payload: data
    }
}

export function clearData(data) {
    return	{
    	type: "CLEAR_DATA",
    	payload: null
    }
}

export function getData(id) {
	return (dispatch) => {
		return	axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
			console.log(response.data)
			dispatch(setData(response.data))
		})
	}
}

