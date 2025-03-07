import { Recipe } from "./models/recipe";

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const listMealsByFirstLetter: (firstLetter: string) => Promise<Recipe[]> = async (firstLetter) => {
  const response = await fetch(`${BASE_URL}/search.php?f=${firstLetter}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data from the server');
  }

  const data = await response.json();
  return data.meals;
};

export const getMealById: (id: string) => Promise<Recipe> = async (id) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data from the server');
  }

  const data = await response.json();
  return data.meals[0];
};