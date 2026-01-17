import React from "react";
import { View, FlatList, Text, StyleSheet, StatusBar } from "react-native";
import { useFavorites } from "../context/FavoritesContext";
import { COLORS } from "../theme/colors";
import RecipeCard from "../components/RecipeCard";

const FavoritesScreen = ({ navigation }: any) => {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return (
            <View style={styles.center}>
                <Text style={styles.empty}>No favorites yet ❤️</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F9F9FF" />
            <Text style={styles.header}>Favorite Recipes</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.idMeal}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <RecipeCard
                        recipe={item}
                        onPress={() =>
                            navigation.navigate("RecipeDetail", { id: item.idMeal })
                        }
                    />
                )}
            />
        </View>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 16,
        top: 20
    },
    header: {
        fontSize: 22,
        fontWeight: "700",
        marginVertical: 16,
        color: COLORS.text,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    empty: {
        color: COLORS.muted,
        fontSize: 16,
    },
});
