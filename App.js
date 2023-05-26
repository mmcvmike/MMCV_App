// import React from "react";
// import {
//     Image,
//     TouchableOpacity
// } from 'react-native';
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// // screens
// import { Onboarding, DestinationDetail } from "./screens/";
// // extra screens
// import Tabs from "./navigation/tabs";

// import { icons, COLORS, SIZES } from './constants';


// const theme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         border: "transparent",
//     },
// };

// const Stack = createStackNavigator();

// const App = () => {
//     return (
//         <NavigationContainer theme={theme}>
//             <Stack.Navigator
//                 initialRouteName={'Onboarding'}
//             >
//                 {/* Screens */}
//                 <Stack.Screen
//                     name="Onboarding"
//                     component={Onboarding}
//                     options={{
//                         title: null,
//                         headerStyle: {
//                             backgroundColor: COLORS.white
//                         },
//                         headerRight: null,
//                         headerLeft: () => (
//                             <TouchableOpacity
//                                 style={{ marginLeft: SIZES.padding }}
//                                 onPress={() => console.log("Pressed")}
//                             >
//                                 <Image
//                                     source={icons.barMenu}
//                                     resizeMode="contain"
//                                     style={{
//                                         width: 25,
//                                         height: 25,
//                                     }}
//                                 />
//                             </TouchableOpacity>
//                         ),
//                     }}
//                 />

//                 <Stack.Screen
//                     name="DestinationDetail"
//                     component={DestinationDetail}
//                     options={{ headerShown: false }}
//                 />

//                 {/* Tabs */}
//                 <Stack.Screen
//                     name="Home"
//                     component={Tabs}
//                     options={{
//                         title: null,
//                         headerStyle: {
//                             backgroundColor: COLORS.white
//                         },
//                         headerLeft: ({ onPress }) => (
//                             <TouchableOpacity
//                                 style={{ marginLeft: 10 }}
//                                 onPress={onPress}
//                             >
//                                 <Image
//                                     source={icons.back}
//                                     resizeMode="contain"
//                                     style={{
//                                         width: 25,
//                                         height: 25,
//                                     }}
//                                 />
//                             </TouchableOpacity>
//                         ),
//                         headerRight: () => (
//                             <TouchableOpacity
//                                 style={{ marginRight: 10 }}
//                                 onPress={() => console.log("Menu")}
//                             >
//                                 <Image
//                                     source={icons.menu}
//                                     resizeMode="contain"
//                                     style={{
//                                         width: 25,
//                                         height: 25,
//                                     }}
//                                 />
//                             </TouchableOpacity>
//                         ),
//                     }}
//                 />


//             </Stack.Navigator>
//         </NavigationContainer >
//     );
// };

// export default () => {
//     return <App />;
// };






import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  homeScreen:{
    alignContent: "center",
    alignItems: "center",
    padding: 8
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    textAlign: 'center',
    color: 'grey'
  },

  footerText: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    textAlign: 'right',
    marginTop: 8,
    color: 'blue',
    fontStyle: 'italic',
  },

  homeScreenBody: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    marginTop: 5
  },

  buttonContainter: {
    // paddingHorizontal: 18,
    paddingVertical: 18,
    borderRadius: 4,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    margin: 5,
    minWidth: '44.6%',
    textAlign: 'center',
    height: 100,
    borderWidth: 1,
    borderColor: "thistle",
    alignContent: "center",
    alignItems: "center",
  },

  button: {
    padding: 15,
    minHeight: 100,
    color: '#f44336',
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: "center",
    fontWeight: 'bold',
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "50%"
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.titleText}>
        Please chose your screen
      </Text>
      <View style={styles.homeScreenBody}>
        <TouchableOpacity style={styles.buttonContainter}>
          <Text
            onPress={() => navigation.navigate("SMT")}
            style={styles.button}
          >
            Zone SMT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainter}>
          <Text
            onPress={() => navigation.navigate("Backend")}
            style={styles.button}
          >
            Zone Back-end
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainter}>
          <Text
            title="QC"
            onPress={() => navigation.navigate("Quality")}
            style={styles.button}
          >
            QC
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainter}>
          <Text
            title="Checksheet"
            onPress={() => navigation.navigate("Checksheet")}
            style={styles.button}
          >
            Checksheet
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>
        MMCV IT Application Center
      </Text>
    </View>
  );
}

function EBuyoffSMTScreen() {
  return (
    <WebView
      source={{
        uri: 'http://mvswas01.mmcv.mekjpn.ngnet/ebuyoffsmt',
        // uri: 'http://10.80.24.57/ebuyoffsmt',
      }}
      style={{ marginTop: 0 }}
    />
  );
}

function EBuyoffBackendScreen() {
  return (
    <WebView
      source={{
        uri: 'http://mvswas01.mmcv.mekjpn.ngnet/ebuyoffbackend',
        // uri: 'http://10.80.24.57/ebuyoffbackend',
      }}
      style={{ marginTop: 0 }}
    />
  );
}

function QualityScreen() {
  return (
    <WebView
      source={{
        uri: 'http://mvswas01.mmcv.mekjpn.ngnet/ebuyoff/qc',
        // uri: 'http://10.80.24.57/ebuyoff/qc',
      }}
      style={{ marginTop: 0 }}
    />
  );
}

function ChecksheetScreen() {
    return (
        <WebView
            source={{
                uri: 'http://mvswas01.mmcv.mekjpn.ngnet/checksheet',
                // uri: 'http://10.80.24.57/checksheet',
            }}
            style={{ marginTop: 0 }}
        />
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MMCV E-Buyoff System"
          component={HomeScreen} 
          style={{alignItems: 'center', color: 'red'}}
        />
        <Stack.Screen 
          name="SMT" 
          component={EBuyoffSMTScreen} 
          options={({navigation}) => ({
            headerRight: () => (
              <Button
                title="MMCV IT Application center"
                color="#aaa"
              />
            ),
          })}
          style={{alignItems: 'center'}} 
        />
        <Stack.Screen 
          name="Backend" 
          component={EBuyoffBackendScreen} 
          options={({navigation}) => ({
            headerRight: () => (
              <Button
                title="MMCV IT Application center"
                color="#aaa"
              />
            ),
          })}
          style={{alignItems: 'center'}} 
        />
        <Stack.Screen 
          name="Quality" 
          component={QualityScreen} 
          options={({navigation}) => ({
            headerRight: () => (
              <Button
                title="MMCV IT Application center"
                color="#aaa"
              />
            ),
          })}
        />
         <Stack.Screen 
          name="Checksheet" 
          component={ChecksheetScreen} 
          options={({navigation}) => ({
            headerRight: () => (
              <Button
                title="MMCV IT Application center"
                color="#aaa"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}