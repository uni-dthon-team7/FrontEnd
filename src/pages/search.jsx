import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/SearchIcon";
import RecipeCard from "../components/RecipeCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // 검색어 변경 시 서버에 요청하여 검색 결과 가져오기
  useEffect(() => {
    if (searchTerm) {
      const fetchSearchResults = async () => {
        try {
          const response = await fetch(
            `http://16.171.73.198:8080/recipes/search?q=${searchTerm}`
          );
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      };

      fetchSearchResults();
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center px-4 pt-4">
      <h2 className="text-lg font-semibold mb-4">레시피 검색</h2>
      {/* 검색 영역 */}
      <div className="w-full flex items-center border border-gray-300 rounded-md mb-4">
        <input
          type="text"
          placeholder="레시피명, 닉네임, 재료, 도구"
          className="flex-grow px-4 py-2 rounded-l-md text-gray-600 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="px-4 py-2 bg-gray-100 rounded-r-md">
          <SearchIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* 검색 결과 섹션 */}
      <div className="w-full grid grid-cols-2 gap-2">
        {searchResults.length > 0 ? (
          searchResults.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} showMatchRate={false} useStroke={true}/>
          ))
        ) : (
          <p className="text-gray-500 text-center">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
