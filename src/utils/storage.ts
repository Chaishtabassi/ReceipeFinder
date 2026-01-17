import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "FAVORITE_RECIPES";

export const saveFavorites = async (data: any[]) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving favorites", error);
  }
};

export const getFavorites = async (): Promise<any[]> => {
  try {
    const value = await AsyncStorage.getItem(FAVORITES_KEY);
    return value ? JSON.parse(value) : [];
  } catch (error) {
    console.error("Error loading favorites", error);
    return [];
  }
};

export const clearFavorites = async () => {
  try {
    await AsyncStorage.removeItem(FAVORITES_KEY);
  } catch (error) {
    console.error("Error clearing favorites", error);
  }
};
