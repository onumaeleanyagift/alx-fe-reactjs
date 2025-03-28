import { useNavigate } from "react-router-dom";
import recipeDetails from "./recipeDetails";

const DeleteRecipeButton = ({ recipeDetails, onDeleteRecipe }) => {
    const navigate = useNavigate();
    const { deleteRecipe } = useRecipeStore((state) => state.deleteRecipe);
    
    const handleDelete = () => {
        deleteRecipe(recipeDetails);
        navigate("/");
    }

    return (
<button onClick={() => onDeleteRecipe(recipeDetails)}>Delete</button>
    );
};

export default DeleteRecipeButton;