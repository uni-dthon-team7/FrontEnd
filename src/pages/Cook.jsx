import { Link } from "react-router-dom";
import backIcon from "../assets/back.svg";
import React, { useEffect } from "react";
import GrayCard from "../components/GrayCard";
import WhiteCard from "../components/WhiteCard";
import ToolIcon from "../assets/cooktop.svg";
import GroceryIcon from "../assets/grocery.svg";
import RecipeCard from "../components/RecipeCard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ingredients, tools } from "../const";
import axios from "axios";
import { recipeImages } from "../const";

const Cook = () => {
  const navigate = useNavigate();
  const recipes1 = [
    {
      id: 1,
      name: "간계밥",
      user: "백종원",
      used: 10,
      time: 30,
      mainIngredient: "계란",
      subIngredient: "대파",
      image: "/src/assets/간계밥.png",
      matchRate: 86,
    },
    {
      id: 2,
      name: "간계밥",
      user: "백종원",
      used: 10,
      time: 30,
      mainIngredient: "계란",
      subIngredient: "대파",
      image: "/src/assets/간계밥.png",
      matchRate: 86,
    },
  ];

  const recipes2 = [
    {
      id: 3,
      name: "간계밥",
      user: "백종원",
      used: 10,
      time: 30,
      mainIngredient: "계란",
      subIngredient: "대파",
      image: "/src/assets/간계밥.png",
      matchRate: 86,
    },
    {
      id: 4,
      name: "간계밥",
      user: "백종원",
      used: 10,
      time: 30,
      mainIngredient: "계란",
      subIngredient: "대파",
      image: "/src/assets/간계밥.png",
      matchRate: 86,
    },
  ];

  const [recipes, setRecipes] = React.useState([]);

  const queryParams = new URLSearchParams(location.search);
  const ingredientsParam = queryParams.get("ingredients");
  const toolsParam = queryParams.get("tools");

  const [selectedRecipe, setSelectedRecipe] = React.useState(null);
  const [selectedIngredients, setSelectedIngredients] = React.useState(
    ingredientsParam ? ingredientsParam.split(",") : []
  );
  const [selectedTools, setSelectedTools] = React.useState(
    toolsParam ? toolsParam.split(",") : []
  );

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleToolClick = (tool) => {
    setSelectedTools((prev) =>
      prev.includes(tool)
        ? prev.filter((item) => item !== tool)
        : [...prev, tool]
    );
  };

  const fetchRecommendedRecipes = async () => {
    try {
      const response = await axios.post(
        "http://16.171.73.198:8080/gpt/recommend",
        {
          gradients: selectedIngredients,
          tools: selectedTools,
        }
      );
      console.log("Recommended recipes fetched:", response.data);
      setRecipes(
        Object.values(response.data).map((recipe, index) => ({
          id: index + 1,
          name: recipe.요리명,
          user: "백종원",
          used: recipe.used,
          time: "15",
          mainIngredient: recipe["메인 재료"],
          subIngredient: recipe["서브 재료"],
          image: recipeImages.find(
            (image) =>
              image.name.replace(" ", "") === recipe.요리명.replace(" ", "")
          )?.imgPath,
          matchRate: recipe["완성도"],
        }))
      );
    } catch (error) {
      console.error("Error fetching recommended recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecommendedRecipes();
  }, [selectedIngredients, selectedTools]);

  console.log(selectedIngredients);
  console.log(selectedTools);

  return (
    <div className="relative flex flex-col pb-16">
      <Link to="/">
        <img src={backIcon} className="absolute left-0 top-1"></img>
      </Link>
      <div className="font-bold text-lg w-full text-center mb-4">
        요리 만들기
      </div>
      <GrayCard className="flex flex-col items-center pb-2 pt-4 mb-3">
        <div className="flex items-center gap-2">
          <div className="flex flex-col justify-center items-center h-full">
            <img src={GroceryIcon} className="h-6 w-6" />
            <div className="text-sm font-semibold whitespace-nowrap shrink-0 mx-2">
              재료
            </div>
          </div>
          <div className="flex overflow-x-scroll pb-2 gap-2 w-[70vw] shrink-0">
            {ingredients.map((ingredient) => (
              <WhiteCard
                image={ingredient.image}
                name={ingredient.name}
                imgSize="small"
                isSelected={selectedIngredients.includes(ingredient.name)}
                onClick={() => handleIngredientClick(ingredient.name)}
              />
            ))}
          </div>
        </div>
        <hr className="w-11/12 my-2" />
        <div className="flex items-center gap-2">
          <div className="flex flex-col justify-center items-center h-full">
            <img src={ToolIcon} className="h-6 w-6" />
            <div className="text-sm font-semibold whitespace-nowrap shrink-0 mx-2">
              도구
            </div>
          </div>
          <div className="flex overflow-x-scroll pb-2 gap-2 w-[70vw] shrink-0">
            {tools.map((tool) => (
              <WhiteCard
                image={tool.image}
                name={tool.name}
                imgSize="small"
                isSelected={selectedTools.includes(tool.name)}
                onClick={() => handleToolClick(tool.name)}
              />
            ))}
          </div>
        </div>
      </GrayCard>

      <div className="font-bold text-lg w-full mb-1">재료 우선</div>
      <GrayCard className="flex gap-3 py-2 px-3 overflow-x-auto flex-nowrap mb-3">
        {recipes &&
          recipes
            .slice(0, 2)
            .map((recipe) => (
              <RecipeCard
                recipe={recipe}
                color="orange"
                isSelected={selectedRecipe === recipe.id}
                onClick={() => setSelectedRecipe(recipe.id)}
              />
            ))}
      </GrayCard>
      <div className="font-bold text-lg w-full mb-1">도구 우선</div>
      <GrayCard className="flex gap-3 py-2 px-3 overflow-x-auto flex-nowrap mb-3">
        {recipes &&
          recipes
            .slice(2, 4)
            .map((recipe) => (
              <RecipeCard
                recipe={recipe}
                color="yellow"
                isSelected={selectedRecipe === recipe.id}
                onClick={() => setSelectedRecipe(recipe.id)}
              />
            ))}
      </GrayCard>
      <div className="flex gap-3 fixed bottom-0 right-0 w-full z-10 bg-white py-2 px-[1.3rem]">
        <Button className="bg-white !text-[#F2843B] border border-[#F2843B]">
          레시피 없이 만들기
        </Button>
        <Button
          disabled={!selectedRecipe}
          onClick={() => navigate(`/recipe/${selectedRecipe}`)}
        >
          레시피 만들기
        </Button>
      </div>
    </div>
  );
};

export default Cook;
