import { useNavigate } from "react-router-dom";
import recipeDetails from "./recipeDetails";

const DeleteRecipeButton = ({ recipeDetails, onDeleteRecipe }) => {
    const navigate = useNavigate();
    const { deleteRecipe } = useRecipeStore();
    return <button onClick={() => onDeleteRecipe(recipeDetails)}>Delete</button>;
    
    const handleDelete = () => {
        deleteRecipe(recipeDetails);
        navigate("/");
    }
};

return (<button onClick={handleDelete} >
    Delete Recipe
</button> );

export default DeleteRecipeButton;