import { SubmitHandler, useForm } from "react-hook-form";
import {FormError} from "../../../components/form/FormError";
import "./styles.css";
import { Categories, Category } from "../models/categories";
import { Area, Areas } from "../models/areas";

interface NewRecipeProps {
  strMeal: string;
  strCategory: Category;
  strArea: Area;
  strYoutube?: string;
}

export const NewRecipeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewRecipeProps>({
    defaultValues: {
      strMeal: "",
      strCategory: undefined,
      strArea: undefined,
    },
  });

  const onSubmit: SubmitHandler<NewRecipeProps> = (data) => {
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
            <option value={undefined}>Select category</option>
            {Categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <FormError error={errors.strCategory?.message} />
        </div>

        <div className="input-group">
          <label htmlFor="strArea">Area</label>
          <select id="strArea" {...register("strArea")}>
            <option value={undefined}>Select area</option>
            {Areas.map((area) => (
              <option value={area}>{area}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="strYoutube">YouTube URL</label>
          <input
            id="strYoutube"
            type="text"
            className={errors.strMeal ? "error" : ""}
            {...register("strYoutube", {
              pattern: {
                value: /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+/,
                message: "Please enter a valid YouTube URL",
              },
            })}
          />
          <FormError error={errors.strMeal?.message} />
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



