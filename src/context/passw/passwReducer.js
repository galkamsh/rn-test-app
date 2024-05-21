import {
    SAVE_PASSW,
    DELETE_PASSW,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    FETCH_PASSW,
    UPDATE_PASSW
  } from '../types'
  
  const handlers = {
    [SAVE_PASSW]: (state, { website, 
      username, password, index, passwords }  ) => ({
      ...state,
      passwords: [...passwords,  {index, website, 
        username, 
        password } ]
    }),
    [DELETE_PASSW]: (state, {index} ) => ({
      ...state,
      passwords: passwords.filter(password => password.index !== index)
    }),
  
    [UPDATE_PASSW]: (state,  { index, website, username,password, passwords}  ) => ({
      ...state ,
      passwords: passwords.map(passw => {
        if (passw.index === index) {
          passw.website = website
          passw.username = username
          passw.password = password
        }
        return passw
      })
    }),
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
    [HIDE_LOADER]: state => ({ ...state, loading: false }),
    [CLEAR_ERROR]: state => ({ ...state, error: null }),
    [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
    [FETCH_PASSW]: (state, { passwords }) => ({ ...state, passwords }),

   
    DEFAULT: state => state
  }
  
  export const passwReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
  }