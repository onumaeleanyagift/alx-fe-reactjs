import { useNavigate } from "react-router-dom";
import recipeDetails from "./recipeDetails";

const DeleteRecipeButton = ({ recipeDetails, onDeleteRecipe }) => {
    const navigate = useNavigate();
    const deleteRecipe = useRecipeStore();
    const recipeDetails = useRecipeStore();
    
    return (
<button onClick={() => onDeleteRecipe(recipeDetails)}>Delete</button>
    );
};

export default DeleteRecipeButton;