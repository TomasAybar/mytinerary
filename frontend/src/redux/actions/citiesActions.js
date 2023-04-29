import { mytineraryDB } from "../../api/config";

const citiesActions = {


    getCities: () => {

        return async (dispatch, getState) => {

            const res = await mytineraryDB.get('/cities')

            dispatch({ type: 'GET_CITIES', payload: res.data.response })
        }

    },

    getOneCity: (id) => {

        return async (dispatch, getState) => {

            const res = await mytineraryDB.get(`/cities/${id}`)

            dispatch({ type: 'GET_ONE_CITY', payload: res.data.response })

        }

    },

    filterCities: (cities, value) => {

        return (dispatch, getState) => {
            dispatch({ type: 'FILTER_CITIES', payload: { cities, value } })
        }

    }
}

export default citiesActions;