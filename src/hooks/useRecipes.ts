import { useState } from "react";
import { searchRecipes } from "../api/mealApi";

export const useRecipes = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [error, setError] = useState("");

  const search = async (query: string) => {
    try {
      setLoading(true);
      setError("");
      const data = await searchRecipes(query);
      console.log(data)
      setRecipes(data || []);
    } catch {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  return { recipes, loading, error, search };
};
