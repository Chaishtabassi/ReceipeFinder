import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesContext = createContext<any>(null);

export const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    AsyncStorage.getItem("favorites").then((data) => {
      if (data) setFavorites(JSON.parse(data));
    });
  }, []);

  const toggleFavorite = async (recipe: any) => {
    const updated = favorites.some((r) => r.idMeal === recipe.idMeal)
      ? favorites.filter((r) => r.idMeal !== recipe.idMeal)
      : [...favorites, recipe];

    setFavorites(updated);
    await AsyncStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (idMeal: string) => {
    return favorites.some((r) => r.idMeal === idMeal);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
