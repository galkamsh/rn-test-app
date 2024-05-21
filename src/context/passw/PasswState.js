import React, { useReducer, useContext, useState } from 'react'
import { Alert } from 'react-native'
import { PasswContext } from './passwContext'
import { passwReducer } from './passwReducer'
import {
  SAVE_PASSW,
  DELETE_PASSW,
  UPDATE_PASSW,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_PASSW
 

} from '../types'
import { ScreenContext } from '../screen/screenContext'



export const PasswState = ({ children }) => {
    const initialState = {
        passwords: [],
        loading: false,
        error: null
      }
      const { changeScreen } = useContext(ScreenContext)
      const [state, dispatch] = useReducer(passwReducer, initialState)
      const [passwords, setPasswords] = useState([]); 
      const [website, setWebsite] = useState(""); 
       const [username, setUsername] = useState(""); 
       const [password, setPassword] = useState(""); 
       const [editIndex, setEditIndex] = useState(null); 
      // const [passwords, setPasswords] = useState([]); 
   
       const [editing, setEditing] = useState(false);
      
       const savePassword = async (website, username, password) => { 
      
        // Check if any of the input fields is empty 
        const response = await fetch(

          'https://rn-passw-default-rtdb.firebaseio.com/passwords.json',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ website, username, password  })
          }
        )
        //const data = await response.json()
        console.log('Save passwords', passwords)
        dispatch({ type: SAVE_PASSW, website, username, password, index: data.name, passwords })
    }
 
    
 
  const updatePassword = async (index, website, username, password) => { 
    clearError()
    console.log('update index', index);
    console.log('update website', website);
    try {
      await fetch(`https://rn-passw-default-rtdb.firebaseio.com/passwords/${index}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ website, username, password})
      })
     // const data = await response.json()
      console.log('update passwords', passwords)
      dispatch({ type: UPDATE_PASSW, index, website, username, password, passwords})
    
    } catch (e) {
      showError('Сталася халепа...')
      console.log(e)
    }
  } 
  
  const fetchPassw = async () => {
    showLoader()
    clearError()
    try {
      const response = await fetch(
        'https://rn-passw-default-rtdb.firebaseio.com/passwords.json',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      )
      const data = await response.json() || [];
       console.log('Fetch data', data)
      const passwords = Object.keys(data).map(key => ({ ...data[key], index: key }))
      dispatch({ type: FETCH_PASSW, passwords })
      setPasswords(passwords)
    } catch (e) {
      showError('Сталася халепа...')
      console.log(e)
    } finally {
      hideLoader()
    }
  }

  const deletePassword = index => { 
      const passw = passwords.find(e => e.index === index )
      
      console.log('delete index', index);
         Alert.alert(
        'Видалення елемента',
        `Ви впевнені, що хочете видалити "${passw.website}"?`,
        [
          {
            text: 'Відміна',
            style: 'cancel'
          },
          {
            text: 'Видалити',
            style: 'destructive',
            onPress: async () => {
              changeScreen(null)
              await fetch(
                `https://rn-passw-default-rtdb.firebaseio.com/passwords/${index}.json`,
                {
                  method: 'DELETE',
                  headers: { 'Content-Type': 'application/json' }
                }
              )
            
             
              dispatch({ type: DELETE_PASSW, index })
              
            }
          }
        ],
        { cancelable: false }
      ) 
  }

/*   const editPassword = async (index, passwords) => { 
    clearError()
    try {
      
      //dispatch({ type: EDIT_PASSW, index, passwords});
      console.log('pas.websit', passwords[index].website);
      console.log('index', index)
       setEditing(true); 
            
      setWebsite(passwords[index].website); 
      setUsername(passwords[index].username); 
      setPassword(passwords[index].password); 

    
    } catch (e) {
      showError('Сталася халепа...')
      console.log(e)
    }
  }  */
  
const showLoader = () => dispatch({ type: SHOW_LOADER })

const hideLoader = () => dispatch({ type: HIDE_LOADER })

const showError = error => dispatch({ type: SHOW_ERROR, error })

const clearError = () => dispatch({ type: CLEAR_ERROR })
    return (
        <PasswContext.Provider
          value={{
            // passwords: state.passwords,
            loading: state.loading,
            error: state.error,
            website, setWebsite,
            username, setUsername,
            password, setPassword,
            editing, setEditing,
            editIndex, setEditIndex, 
            passwords: passwords, setPasswords, 
            index : state.index,
            savePassword,
           
            deletePassword,
            fetchPassw,
            updatePassword
            
          }}
        >
          {children}
        </PasswContext.Provider>
      )

}