const RecipeCard = ({ recipe, color }) => {
  return (
    <div className="bg-white shadow-custom rounded-md p-3 shrink-0">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="h-32 w-[8.3rem] object-cover rounded-md mb-1"
      />
      <div className="font-semibold w-full text-center">{recipe.name}</div>
      <div className="text-sm flex items-center justify-between">
        <span className="text-[#ACACAC]">{recipe.user} 님</span>
        <div className="flex items-center text-[#ACACAC]">
          <img className="w-3 h-3" src="/src/assets/share.png" />
          {recipe.used}
        </div>
        <span>({recipe.time}분)</span>
      </div>
      <p>{recipe.description}</p>
      <p>{recipe.instructions}</p>
      <hr className="mt-1 mb-2" />
      <div className="flex justify-between">
        <div className="">
          <div className="flex items-center justify-center bg-[#F2843B] rounded-full text-white px-2 py-0.5 mb-1">
            <span className="text-xs mr-1">메인재료</span>
            <span className="text-sm font-bold">{recipe.mainIngredient}</span>
          </div>
          <div className="flex items-center justify-center bg-[#FFF1EC] rounded-full text-[#F2843B] px-2 py-0.5 border border-[#F2843B]">
            <span className="text-xs mr-1 ">부재료</span>
            <span className="text-sm font-bold">{recipe.subIngredient}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xs font-semibold text-[#979797]">일치율</div>
          <div className="font-bold text-[#F2843B]">{recipe.matchRate}%</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
