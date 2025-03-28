import { useNavigate } from "react-router-dom";
import recipeDetails from "./recipeDetails";

const DeleteRecipeButton = ({ recipeID }) => {
    const navigate = useNavigate();
    const { deleteRecipe } = useRecipeStore();

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate("/");
    }
    
    return (
<button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteRecipeButton;