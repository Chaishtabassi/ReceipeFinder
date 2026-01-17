export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;

  strArea?: string;
  strTags?: string;
  strYoutube?: string;

  [key: string]: any;
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
