import React, { useState, useEffect, useContext,useCallback } from 'react';
import {StyleSheet,  Text, TouchableOpacity,ScrollView, Dimensions } from "react-native";
import { styles } from "../../styles"; 
import { InputItem, View } from '@ant-design/react-native';
import { PasswContext } from '../context/passw/passwContext';
import { AppLoader } from '../components/ui/AppLoader'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'


export const  MainForm = () => {
    
    /*const [website, setWebsite] = useState(""); 
       const [username, setUsername] = useState(""); 
       const [password, setPassword] = useState(""); 
       const [passwords, setPasswords] = useState([]); 
   
       const [editing, setEditing] = useState(false); 
       const [passwords, setPasswords] = useState([]); */
      //  const [editIndex, setEditIndex] = useState(null); 
   
       const {website,  setWebsite, username, setUsername, 
        password, setPassword, editing, editIndex, setEditIndex,
        setEditing,  fetchPassw, updatePassword,savePassword, loading, error,  passwords, setPasswords
      } = useContext(PasswContext)
   
      useEffect(() => { 
        showPasswords(); 
    }, []); 

    
   
    const [deviceWidth, setDeviceWidth] = useState(
        Dimensions.get('window').width - 30 * 2
      )
    
      const loadPassw = useCallback(async () => await fetchPassw(), [fetchPassw])
    
      useEffect(() => {
        loadPassw()
      }, [])
    
      useEffect(() => {
        const update = () => {
          const width =
            Dimensions.get('window').width - 30 * 2
          setDeviceWidth(width)
        }
    
        const subscription = Dimensions.addEventListener(
            'change',
            update,
        );
        return () => subscription?.remove();
      })
    
      if (loading) {
        return <AppLoader />
      }
    
      if (error) {
        return (
          <View style={styles.center}>
            <AppText style={styles.error}>{error}</AppText>
            <AppButton onPress={loadPassw}>Повторити</AppButton>
          </View>
        )
      }

    const pressHandler = () => {
        if (!website || !username || !password) { 
            Alert.alert("Заповніть всі поля"); 
            return;            
            
        } else {
            if (editing && editIndex !== null) { 
                const updatedPasswords = [...passwords]; 
                updatedPasswords[editIndex] = { 
                    website, 
                    username, 
                    password, 
                }; 
                setPasswords(updatedPasswords); 
                setEditing(false); 
                setEditIndex(null);  
                updatePassword(editIndex, website, 
                    username, 
                    password);
              
            } else { 
                const newPassword = { 
                    website, 
                    username, 
                    password 
                    
                }; 
                setPasswords([...passwords, newPassword]); 
                savePassword(website, 
                    username, 
                    password)
            }
          
            setWebsite(""); 
            setUsername(""); 
            setPassword("");   
        }
       // onsubmit()
    }

    const showPasswords = () => { 
        setPasswords([]); 
        setWebsite(""); 
        setUsername(""); 
        setPassword(""); 
        setEditing(false); 
        setEditIndex(null); 
    };  
 
   
  
      return (
        <ScrollView style={styles.container}> 
       <View>
           
   
            <InputItem 
                 style={styles.input} 
                 placeholder="Введіть назва/адресу сайту"
                 value={website} 
                 onChange={(text) => 
                 setWebsite(text) 
            }/> 
          
            <InputItem 
             style={styles.input} 
             placeholder="Введіть логін"
             value={username} 
             onChange={(text) => 
             setUsername(text)}/> 
                       
             <InputItem style={styles.input} 
                        placeholder="Введіть пароль"
                        type = "password"
                       
                         value={password} 
                        onChange={(text) => 
                        setPassword(text) 
                 }/> 
          
           <TouchableOpacity 
               style={styles.submitButton} 
                onPress={pressHandler}> 
          
               <Text style={styles.submitButtonText}> 
               {editing 
                ? "Змінити дані"
                : "Зберегти дані"} 
              </Text> 
            </TouchableOpacity> 
         </View>
         </ScrollView> 
        );
    }