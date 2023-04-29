import { mytineraryDB } from "../../api/config";

const userActions = {


    signUpUser: (data) => {

        return async (dispatch, getState) => {

            try {

                const res = await mytineraryDB.post('/signup', data)

                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                });

                return res;
            } catch (error) { console.log(error) }

        }
    },

    signInUser: (data) => {

        return async (dispatch, getState) => {

            try {

                const res = await mytineraryDB.post('/signin', data)


                if (res.data.success) { // para no generar algun tonken al pepe

                    localStorage.setItem('token', res.data.response.token) // seteo en el ls mi token creado en el contorlador

                    dispatch({
                        type: 'USER',
                        payload: res.data.response.userData
                    });

                }

                return res;

            } catch (error) { console.log(error) }

        }
    },

    signOutUser: () => {

        return async (dispatch, getState) => {

            localStorage.removeItem('token');

            dispatch({
                type: 'USER',
                payload: null
            })

        }
    },

    verifyToken: (token) => {

        return async (dispatch, getState) => {


            const res = await mytineraryDB.post('/signinToken', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            if (res.data.success) {

                dispatch({
                    type: 'USER',
                    payload: res.data.response
                });


            } else {
                localStorage.removeItem('token')
            }

        }
    }

}

export default userActions;