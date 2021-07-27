import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import {useFonts} from "expo-font"
import AppLoading from "expo-app-loading"
import NavigationApp from './navigation/navigationApp';
import { Provider } from 'react-redux';
import store from './store';


export default function App() {
  const[dataLoaded]=useFonts({
    "PermanentMarker-Regular":require("./assets/fonts/PermanentMarker-Regular.ttf"),
  })

  if (!dataLoaded){
    return(<AppLoading/>
    )
  }

  return (
    <Provider store={store}>
      <NavigationApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  title: {
    fontSize:35,
    justifyContent:"flex-start",
    alignSelf:"flex-start",
  }
});
