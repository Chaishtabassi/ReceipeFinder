import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import { getRecipeById } from "../api/mealApi";
import { useFavorites } from "../context/FavoritesContext";
import { COLORS } from "../theme/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const RecipeDetailScreen = ({ route }: any) => {
    const { id } = route.params;
    const [recipe, setRecipe] = useState<any>(null);
    const { favorites, toggleFavorite } = useFavorites();

    useEffect(() => {
        getRecipeById(id).then(setRecipe);
    }, []);

    if (!recipe) return null;

    const isFav = favorites.some((r) => r.idMeal === recipe.idMeal);

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <Image source={{ uri: recipe.strMealThumb }} style={styles.hero} />

            <TouchableOpacity
                style={styles.favBtn}
                onPress={() => toggleFavorite(recipe)}
            >
                <Ionicons
                    name={isFav ? "heart" : "heart-outline"}
                    size={26}
                    color="red"
                />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>{recipe.strMeal}</Text>
                <Text style={styles.rating}>⭐ 4.7</Text>

                <View style={styles.statsRow}>
                    <View style={[styles.statCard, { backgroundColor: COLORS.green }]}>
                        <Text style={styles.statValue}>570</Text>
                        <Text>Kcal</Text>
                    </View>

                    <View style={[styles.statCard, { backgroundColor: COLORS.purple }]}>
                        <Text style={styles.statValue}>10</Text>
                        <Text>Ingredients</Text>
                    </View>
                </View>

                <Text style={styles.section}>Instructions</Text>
                <Text style={styles.text}>{recipe.strInstructions}</Text>
            </View>
            <View style={{ height: 80 }}></View>
        </ScrollView>
    );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    hero: {
        width: "100%",
        height: 320,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    favBtn: {
        position: "absolute",
        top: 40,
        right: 20,
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 30,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
    },
    rating: {
        marginVertical: 8,
        color: COLORS.muted,
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    statCard: {
        width: "47%",
        padding: 20,
        borderRadius: 20,
    },
    statValue: {
        fontSize: 22,
        fontWeight: "700",
    },
    section: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10,
    },
    text: {
        color: COLORS.muted,
        lineHeight: 22,
    },
});
