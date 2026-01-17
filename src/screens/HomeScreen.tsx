import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import { useRecipes } from "../hooks/useRecipes";
import { COLORS } from "../theme/colors";
import HomeHeader from "../components/HomeHeader";

const HomeScreen = ({ navigation }: any) => {
    const { recipes, search } = useRecipes();
    const [query, setQuery] = useState("");

    useEffect(() => {
        search("chicken");
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F9F9FF" />
            <HomeHeader
                value={query}
                onChange={(text) => {
                    setQuery(text);
                    search(text);
                }}
                onFilterPress={() => console.log("Filter clicked")}
                onNotificationPress={() => console.log("Notification clicked")}
            />

            <Text style={styles.title}>Explore New Recipes</Text>

            <FlatList
                data={recipes}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate("RecipeDetail", { id: item.idMeal })
                        }
                    >
                        <Image source={{ uri: item.strMealThumb }} style={styles.cardImage} />

                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.strMeal}</Text>
                            <Text style={styles.time}>⏱ 20 minutes</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 16,
    },
    searchBox: {
        backgroundColor: COLORS.card,
        borderRadius: 14,
        paddingHorizontal: 14,
        marginBottom: 20,
    },
    input: {
        height: 48,
    },
    card: {
        backgroundColor: COLORS.secondary,
        borderRadius: 24,
        marginBottom: 20,
        overflow: "hidden",
    },
    cardImage: {
        width: "100%",
        height: 180,
    },
    cardContent: {
        padding: 16,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "700",
    },
    time: {
        marginTop: 6,
        color: COLORS.muted,
    },
});
