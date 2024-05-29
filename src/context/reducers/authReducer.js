export const initialState = {
  status: 'checking',
  info: {},
  errorMessage: undefined
}

export const authReducer = (state, action) => {
  const { type: actionType, payload: actionPayLoad } = action

  switch (actionType) {
    case 'LOGIN':
      return {
        ...state,
        status: 'authenticated',
        info: actionPayLoad,
        errorMessage: undefined
      }

    case 'SIGNUP':
      return {
        ...state,
        status: 'not-authenticated',
        info: actionPayLoad,
        errorMessage: undefined
      }

    case 'LOGOUT':
      return {
        ...state,
        status: 'not-authenticated',
        info: {},
        errorMessage: undefined
      }

    case 'CHECKING':
      return {
        ...state,
        status: 'checking',
        info: {},
        errorMessage: undefined
      }

    case 'ERROR':{
      return {
        ...state,
        status: 'not-authenticated',
        info: {},
        errorMessage: actionPayLoad
      }
    }
  }

  return state
}
