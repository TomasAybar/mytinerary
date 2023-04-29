import { mytineraryDB } from "../../api/config";

const tineraryActions = {


    getTineraries: () => {

        return async (dispatch, getState) => { // es asincrona porq necesita esperar la respuesta del axios

            const res = await mytineraryDB.get('/tineraries')

            dispatch({ type: 'GET_TINERARIES', payload: res.data.response }) // envia el type y el payload(la carga del axios)
        }

    },

    getOneTinerary: (id) => {

        return async (dispatch, getState) => {

            const res = await mytineraryDB.get(`/tinerary/${id}`)

            return res

        }

    },

    getIinerariesFromOneCity: (id) => {

        return async (dispatch, getState) => {

            const res = await mytineraryDB.get(`/tineraries/${id}`)

            dispatch({ type: 'GET_TINERARIES_FROM_CITY', payload: res.data.response })

        }

    },

    likeDislike: (id) => { // recibe el id del itinerario

        const token = localStorage.getItem('token')

        return async (dispatch, getState) => {

            const res = await mytineraryDB.put(`/tineraries/like/${id}`, {}, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            return res
        }
    },

}

export default tineraryActions;