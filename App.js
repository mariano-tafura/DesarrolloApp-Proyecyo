import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import {useFonts} from "expo-font"
import AppLoading from "expo-app-loading"
import { Provider } from 'react-redux';
import store from './store';
import Colors from './constants/Colors';
import MainNavigator from './navigation'


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
      <MainNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  title: {
    fontSize:35,
    justifyContent:"flex-start",
    alignSelf:"flex-start",
  }
});
