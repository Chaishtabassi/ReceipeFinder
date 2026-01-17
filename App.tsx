import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import TabNavigator from "./src/navigation/TabNavigator";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <TabNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
}
