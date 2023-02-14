import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/FavoritesSlices';



function CoctailDetails() {
  const dispatch = useDispatch();
  const { coctailId } = useParams();
  const [coctail, setCoctail] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoctail = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctailId}`
        );
        const data = response.data.drinks[0];
        setCoctail(data);
        const newIngredients = [];
        for (let i = 1; i <= 15; i++) {
          const ingredientName = data[`strIngredient${i}`];
          const ingredientMeasure = data[`strMeasure${i}`];
          if (ingredientName) {
            const ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`;
            newIngredients.push({
              name: ingredientName,
              measure: ingredientMeasure,
              image: ingredientImage,
            });
          }
        }
        setIngredients(newIngredients);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchCoctail();
  }, [coctailId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const changeHandler = (event) => {
    if (event.target.checked) {
      dispatch(addToFavorites(coctail));
    }
  };

  return (
    <div>
      <h2>{coctail.strDrink}</h2>
      <p>
        {coctail.strAlcoholic === "Alcoholic"
          ? "This is an alcoholic drink"
          : "This is a non-alcoholic drink"}
      </p>
      <p>Category: {coctail.strCategory}</p>
      <p>Instructions: {coctail.strInstructions}</p>
      <p>Serve in: {coctail.strGlass}</p>
      <img src={coctail.strDrinkThumb} alt={coctail.strDrink} />
      <FormControlLabel
        control={<Checkbox onChange={changeHandler} />}
        label="Add to FAVORITE! "
      />
      <p>Ingredients:</p>
      <ul>
        {[
          coctail.strIngredient1,
          coctail.strIngredient2,
          coctail.strIngredient3,
          coctail.strIngredient4,
        ].map((ingredient, index) => {
          if (ingredient) {
            return <li key={index}>{ingredient}</li>;
          }
          return null;
        })}
      </ul>
      <div>
        <h2>{coctail.strDrink}</h2>
        <p>Instructions: {coctail.strInstructions}</p>
        <p>Ingredients:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <img
                src={ingredient.image}
                alt={ingredient.name}
                style={{ width: "50px" }}
              />
              {ingredient.name} - {ingredient.measure}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CoctailDetails;
