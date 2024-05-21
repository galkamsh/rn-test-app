
import React from "react"; 
import {MainLayout} from "./src/MainLayout";
import { PasswState } from './src/context/passw/PasswState';
import {ScreenState} from "./src/context/screen/ScreenState";

export default function App() {
  return(
    <ScreenState>
      <PasswState>
        <MainLayout />
      </PasswState>
    </ScreenState>
);
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});*/
