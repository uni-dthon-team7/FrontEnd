import { recipeImages } from "../const";

const RecipeCard = ({
  recipe,
  color,
  onClick,
  isSelected,
  showMatchRate = true,
  useStroke = false,
}) => {

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * recipeImages.length);
    return recipeImages[randomIndex].imgPath;
  };

  const defaultImage = "https://mblogthumb-phinf.pstatic.net/MjAyMzAxMDJfOTQg/MDAxNjcyNjI1Mjg4MDg4.0So90H3XrJ89k48OKGVizwxucQBaNGW-KqxPq2EGf2sg.3n-ZMgwF6BNkpJH0mpcY9ACPtwC276qok3-9OPtE_s0g.JPEG.iskra316/1672625284926.jpg?type=w800"

  return (
    <div
      className={`bg-white shadow-custom rounded-md p-3 shrink-0 cursor-pointer border-2 ${
        isSelected ? "border-[#F2843B]" : "border-white"
      } ${useStroke ? "!border !border-[#D9D9D9] !shadow-none" : ""}`}
      onClick={onClick}
    >
      <img
        src={recipe.image ?? recipe.imgPath ?? defaultImage}
        alt={recipe.name || recipe.recipeName}
        className="h-32 w-[8.3rem] object-cover rounded-md mb-1"
      />
      <div className="font-semibold w-full text-center">
        {recipe.name || recipe.recipeName}
      </div>
      <div className="text-sm flex items-center justify-between">
        <span className="text-[#ACACAC]">
          {recipe.user || recipe.userName} 님
        </span>
        <div className="flex items-center text-[#ACACAC]">
          <img className="w-3 h-3" src="/src/assets/share.png" />
          {recipe.used || recipe.frequency}
        </div>
        <span>({recipe.time || recipe.avgCookingTime}분)</span>
      </div>
      <p>{recipe.description}</p>
      <p>{recipe.instructions}</p>
      <hr className="mt-1 mb-2" />
      <div className="flex justify-between">
        <div className="">
          <div className="flex items-center justify-center bg-[#F2843B] rounded-full text-white px-2 py-0.5 mb-1">
            <span className="text-xs mr-1">메인재료</span>
            <span className="text-sm font-bold">
              {recipe.mainIngredient ??
                (recipe.primaryIngredients
                  ? recipe.primaryIngredients[0].name
                  : "")}
            </span>
          </div>
          <div className="flex items-center justify-center bg-[#FFF1EC] rounded-full text-[#F2843B] px-2 py-0.5 border border-[#F2843B]">
            <span className="text-xs mr-1 ">부재료</span>
            <span className="text-sm font-bold">
              {recipe.subIngredient ??
                (recipe.nonPrimaryIngredients &&
                recipe.nonPrimaryIngredients.length > 0
                  ? recipe.nonPrimaryIngredients[0].name
                  : "")}
            </span>
          </div>
        </div>
        {showMatchRate && (
          <div className="flex flex-col justify-center items-center">
            <div className="text-xs font-semibold text-[#979797]">일치율</div>
            <div className="font-bold text-[#F2843B]">{recipe.matchRate}%</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
