import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import GoOut from "./Screens/GoOut";
import Pro from "./Screens/Pro";
import Nutrition from "./Screens/Nutrition";
import Donate from "./Screens/Donate";
import {
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";
import HeaderList from "./CustomLists/HeaderList";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Order"
        activeColor="#000"
        inactiveColor="#a1a1a1"
        barStyle={{
          backgroundColor: "white",
          justifyContent: "center",
        }}
        shifting={false}
      >
        <Tab.Screen
          name="Order"
          component={HeaderList}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="shopping-bag" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Go Out"
          component={GoOut}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bike" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Pro"
          component={Pro}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="shield" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Nutrition"
          component={Nutrition}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="heartbeat" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Donate"
          component={Donate}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="hand-holding-heart" size={22} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
