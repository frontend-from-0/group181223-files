import { useEffect } from "react";
import { listMealsByFirstLetter } from "../recipiesService";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { Container, useTheme } from "@mui/material";
import { Recipe } from "../models/recipe";
import { updateRecipes } from "../recipeSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

export const RecipeList = () => {
  // Used properly typed useSelector and useDispatch hook wrappers from the scr/hooks.ts file according to the instructions here: https://redux.js.org/tutorials/typescript-quick-start
  const recipes = useAppSelector((state: { recipes: { value: Recipe[] } }) => state.recipes.value);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  useEffect(() => {
    listMealsByFirstLetter("b").then((recipes) => {
      dispatch(updateRecipes(recipes));
    });
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {recipes.map((recipe) => (
          <ListItem key={recipe.idMeal} sx={{ maxWidth: 345 }}>
            <Link to={`/recipes/${recipe.idMeal}`}>
              <Card sx={{ width: 300 }}>
                <CardMedia
                  sx={{ minHeight: 150 }}
                  image={recipe.strMealThumb}
                  title={recipe.strMeal}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      marginBottom: theme.spacing(2),
                    }}
                  >
                    {recipe.strMeal}
                  </Typography>
                  <Stack spacing={2} direction={"row"}>
                    <Chip label={"Tart"} variant="outlined" />
                    <Chip label={"Baking"} variant="outlined" />
                    <Chip label={"Alcoholic"} variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
