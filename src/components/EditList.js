import React, { useState, useContext } from 'react';
import { View } from '@ant-design/react-native';
import { Text, ScrollView} from "react-native";
import { styles } from "../../styles"; 
import { EmptyList } from './EmptyList';
import { PasswordList } from './PasswordList';
import { PasswContext } from '../context/passw/passwContext';

export const EditList = ({ alertVisible }) => {


   const { passwords } = useContext(PasswContext)
    return (
        <View>
       
    {passwords?.length === 0 ? ( 
         
            <EmptyList />
       
    ) : ( 
        <ScrollView horizontal> 
             <Text style={styles.subHeading}> 
             {/* Ваш пароль */}
            
             </Text> 
            <View style={styles.table}> 
                < PasswordList /> 
            </View> 
       {/*  <Text style={styles.subHeading}> 
        {editing 
            ? "Змінити "
            : "Додати "} 
    </Text>  */}
        </ScrollView> 
    )} 

   {/*  <Text style={styles.subHeading}> 
        {editing 
            ? "Змінити "
            : "Додати "} 
    </Text>  */}
        </View>
    );
}
