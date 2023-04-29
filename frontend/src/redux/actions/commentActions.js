import { mytineraryDB } from "../../api/config";

const commentActions = {

    addComment: (data) => { // objeto con comentario nuevo y id del itinerario

        const token = localStorage.getItem('token');

        return async (dispatch, getState) => {

            if (data.comment !== '') {

                const res = await mytineraryDB.post('/tineraries/comment', { data }, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })

                return res
            }

        }
    },

    removeComment: (id) => { // id del comentario a eliminar

        const token = localStorage.getItem('token');

        return async (dispatch, getState) => {

            const res = await mytineraryDB.post(`/tineraries/comment/${id}`, {}, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            return res
        }
    },

    modifyComment: (data) => { // objeto con comentario nuevo y id del comentario

        const token = localStorage.getItem('token');

        return async (dispatch, getState) => {

            const res = await mytineraryDB.put('/tineraries/comment', { data }, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            return res
        }
    },

}

export default commentActions;