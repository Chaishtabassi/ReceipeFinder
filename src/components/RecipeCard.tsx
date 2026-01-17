import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../theme/colors";
import { useFavorites } from "../context/FavoritesContext";

const CARD_WIDTH = "48%";

const RecipeCard = ({ recipe, onPress }: any) => {
    const { isFavorite, toggleFavorite } = useFavorites();
    const favorite = isFavorite(recipe.idMeal);

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View>
                <Image
                    source={{ uri: recipe.strMealThumb }}
                    style={styles.image}
                />

                <TouchableOpacity
                    style={styles.heart}
                    onPress={() => toggleFavorite(recipe)}
                >
                    <Ionicons
                        name={favorite ? "heart" : "heart-outline"}
                        size={18}
                        color={favorite ? "#E63946" : "#333"}
                    />
                </TouchableOpacity>
            </View>

            <Text numberOfLines={2} style={styles.title}>
                {recipe.strMeal}
            </Text>
        </TouchableOpacity>
    );
};

export default RecipeCard;

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        backgroundColor: "#fff",
        borderRadius: 16,
        marginBottom: 16,
        overflow: "hidden",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    image: {
        width: "100%",
        height: 130,
    },
    heart: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 6,
        elevation: 3,
    },
    title: {
        padding: 10,
        fontSize: 14,
        fontWeight: "600",
        color: COLORS.text,
    },
});
