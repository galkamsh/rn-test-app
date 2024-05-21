import React, { useContext, useState } from 'react';
import { Text, Alert, TouchableOpacity, Clipboard } from "react-native";
// import { EditList } from '.src\components\PasswordList.js';
import Icon from "react-native-vector-icons/FontAwesome"; 
import { View } from '@ant-design/react-native';
import { PasswContext } from '../context/passw/passwContext';
import { styles } from "../../styles"; 

export const PasswordList = () => { 
  
    const {  setWebsite, setUsername, passwords,
        setPassword, setEditIndex, setPasswords,
        setEditing, deletePassword, fetchPassw, loading, error
      } = useContext(PasswContext)
      //const [alertVisible, setaAlertVisible] = useState(false); 
      // const [editIndex, setEditIndex] = useState(null); 
 
      const edPassword = (index) => { 
        console.log('index ', index);
       
        console.log('passwords ', passwords);
                
        setEditing(true); 
        setEditIndex(index); 
        setWebsite(passwords[index].website); 
        setUsername(passwords[index].username); 
        setPassword(passwords[index].password); 
       
    };  
    
     const delPassword = (website, index ) => { 
        const updatedPasswords = passwords?.filter( 
            (e) => e.index !== index 
        ); 
        console.log('delete delPassword', index);
        setPasswords(updatedPasswords);
        Alert.alert(`Successfully deleted ${website} password`); 
        deletePassword(index)
    };  
    
     const maskPassword = (pass) => { 
        let str = ""; 
        for (let index = 0; index < pass.length; index++) { 
            str += "*"; 
        } 
        return str; 
    }; 
   
  /*    
 const copyText = async (txt) => { 
        try { 
            await Clipboard.setString(txt); 
            setAlertVisible(true); 
            setTimeout(() => { 
                setAlertVisible(false); 
            }, 2000); 
        } catch (error) { 
            console.error("Помилка копіювання тексту:", error); 
        } 
    };  */
   
    return passwords?.map((item, index) => ( 
        <View style={styles.passwordItem} key={index}> 
            <View style={styles.listItem}> 
                <Text style={styles.listLabel}> 
                    Вебсайт: 
                </Text> 
                <Text style={styles.listValue}> 
                    {item.website} 
                </Text> 
             {/*    <TouchableOpacity 
                    style={styles.copyIcon} 
                    onPress={() => 
                        copyText(item.website) 
                    }> 
                      
                    <Icon 
                        name="copy"
                        size={20} 
                        color="#555"/> 
                          
                </TouchableOpacity>  */}
            </View> 

            <View style={styles.listItem}> 
                <Text style={styles.listLabel}> 
                   Логін: 
                </Text> 
                <Text style={styles.listValue}> 
                    {item.username} 
                </Text> 
             
            </View> 

            <View style={styles.listItem}> 
                <Text style={styles.listLabel}> 
                    Пароль: 
                </Text> 
                <Text style={styles.listValue}> 
                    {maskPassword(item.password)} 
                </Text> 
              
                  
            </View> 
            <View style={styles.buttonsContainer}> 
                <TouchableOpacity 
                    style={styles.editButton} 
                    onPress={() => edPassword(index)}> 
                      
                    <Icon 
                        name="edit"
                        size={20} 
                        color="#fff"/> 
                          
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.deleteButton} 
                    onPress={() => 
                        delPassword(item.website, item.index)}> 
                      
                    <Icon 
                        name="trash"
                        size={20} 
                        color="white"/> 
                          
                </TouchableOpacity> 
            </View> 
        </View> 
    )); 
}; 