import { mytineraryDB } from "../../api/config";

const activityActions = {

    getActivities: () => {

        return async (dispatch, getState) => { // Esperar la respuesta del axios

            const res = await mytineraryDB.get('/activities')

            dispatch({ type: 'GET_ACTIVITIES', payload: res.data.response }) // envia el type y el payload(la carga del axios)
        }

    },

    getActivitiesFromItinerary: (id) => {

        return async (dispatch, getState) => {

            const res = await mytineraryDB.get(`/tinerariesActivities/${id}`)

            return res;

        }

    },
}

export default activityActions;
