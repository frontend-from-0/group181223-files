import { useForm } from "react-hook-form";
import {FormError} from "../../../components/form/FormError";
import "./styles.css";

export const NewRecipeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      strMeal: "",
      strCategory: null,
      strArea: null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Create new recipe</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="input-group">
          <label htmlFor="strMeal">Meal name</label>
          <input
            id="strMeal"
            type="text"
            placeholder="Recipe name"
            className={errors.strMeal ? "error" : ""}
            {...register("strMeal", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength: {
                value: 2,
                message: "Recipe name should be at least 2 characters long",
              },
              maxLength: {
                value: 60,
                message: "Recipe name should be 60 or less characters long",
              },
            })}
          />
          <FormError error={errors.strMeal?.message} />
        </div>

        <div className="input-group">
          <label htmlFor="strCategory">Category</label>
          <select
            className={errors.strCategory ? "error" : ""}
            id="strCategory"
            {...register("strCategory", {
              required: {
                value: true,
                message: "Category is required",
              },
            })}
          >
            <option value={null}>Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <FormError error={errors.strCategory?.message} />
        </div>

        <div className="input-group">
          <label htmlFor="strArea">Area</label>
          <select name="" id="strArea" {...register("strArea")}>
            <option value={null}>Select area</option>
            {areas.map((area) => (
              <option value={area}>{area}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-success">
          Save Recipe
        </button>
        {/* 
        strMeal -

        strDrinkAlternate - no input, prefilled data

        strCategory
        strArea
        strInstructions
        strMealThumb

        strTags - will not fill for now

        strYoutube

        strIngredient1 - strIngredient20
        strMeasure1 - strMeasure20

        strSource - no input, prefilled data
        strImageSource - no input, prefilled data
        strCreativeCommonsConfirmed - checkbox

        dateModified - no input, prefilled data (current date)
        */}
      </form>
    </div>
  );
};

const categories = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

const areas = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "French",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Jamaican",
  "Japanese",
  "Kenyan",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Thai",
  "Tunisian",
  "Turkish",
  "Ukrainian",
  "Unknown",
  "Vietnamese",
];
