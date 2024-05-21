import React, {useCallback, useContext} from 'react'
import { View,ScrollView,  StyleSheet } from 'react-native'

import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen/build/index";

import { MainForm } from "./components/MainForm";
import { EditList } from "./components/EditList";
import { PasswContext } from './context/passw/passwContext';
import { ScreenContext } from './context/screen/screenContext';
import { styles } from "./../styles"; 
import { HeaderForm } from './components/HeaderForm';


SplashScreen.preventAutoHideAsync();

export const MainLayout = () => {
    const [fontsLoaded, fontError] = useFonts({
        'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
    });
    const {passwords, editing} = useContext(PasswContext)

    const { passwId } = useContext(ScreenContext)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
        return null;
  }


  
return (
    <ScrollView style={styles.wrapper} onLayout={onLayoutRootView}> 
       <HeaderForm />
     <View style={styles.content}>    
        {/* <MainForm onSubmit = {editing ? updatePassword() : savePassword()}/> */}
        <MainForm /> 
      <EditList passwords={passwords} editing={editing}/>  
    </View>
</ScrollView> 
  );

}

/* const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
    flex: 1
  },
  wrapper: {
    flex: 1
  }
}) */