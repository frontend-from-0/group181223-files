import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "./models/recipe";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    value: [] as Recipe[],
  },
  reducers: {
    updateRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.value = [...action.payload, ...state.value];
    },
  },
});

export const { updateRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
