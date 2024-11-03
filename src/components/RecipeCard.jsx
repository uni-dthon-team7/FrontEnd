import React from "react";

const RecipeCard = ({ recipe }) => (
  <div className="flex items-start p-4 border rounded-md shadow-md mb-4">
    {/* 레시피 이미지 */}
    <img
      src={recipe.imgPath || "/default-recipe-image.png"}
      alt={recipe.recipeName}
      className="w-24 h-24 rounded-md object-cover mr-4"
    />

    {/* 레시피 정보 */}
    <div className="flex flex-col flex-grow">
      <h3 className="text-lg font-semibold">{recipe.recipeName}</h3>
      <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
        <span className="text-sm text-gray-500">{recipe.userName} 님</span>
        <span className="mx-auto">조회수: {recipe.frequency}</span> {/* 가운데 정렬 */}
        <span>{recipe.avgCookingTime}분 이내</span>
      </div>

      
      {/* 재료 태그 */}
        <div className="flex flex-wrap mt-2 gap-1">
          {recipe.primaryIngredients.map((ingredient, idx) => (
            <div key={idx} className="mb-1">
              <span className="text-xs bg-orange-200 text-orange-700 px-2 py-1 rounded-full flex items-center">
                <img src={ingredient.imgPath} alt={ingredient.name} className="w-4 h-4 mr-1 rounded" />
                {ingredient.name}
              </span>
            </div>
          ))}
          {recipe.nonPrimaryIngredients.map((ingredient, idx) => (
            <div key={idx} className="mb-1">
              <span className="text-xs bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full flex items-center">
                <img src={ingredient.imgPath} alt={ingredient.name} className="w-4 h-4 mr-1 rounded" />
                {ingredient.name}
              </span>
            </div>
          ))}
        </div>


    </div>
  </div>
);

export default RecipeCard;
