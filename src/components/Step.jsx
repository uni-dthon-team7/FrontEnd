import React, { useState } from "react";
import GrayCard from "./GrayCard";

const Step = ({
  image,
  title,
  description,
  selectedOption,
  setSelectedOption,
}) => {

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderTextWithDropdown = (text) => {
    const parts = text.split(/(양파)/g);
    return parts.map((part, index) => {
      if (part === "양파") {
        return (
          <select
            key={index}
            value={selectedOption}
            onChange={handleSelectChange}
            className="border rounded p-1 mx-1"
          >
            <option value="양파">양파</option>
            <option value="당근">당근</option>
            <option value="대파">대파</option>
          </select>
        );
      }
      return part;
    });
  };

  return (
    <GrayCard className="flex items-center mb-2 p-2 gap-4">
      <img
        src={image}
        alt="recipe"
        className="w-20 h-20 object-cover rounded-md"
      />
      <div>
        <div className="font-semibold text-sm mb-2 relative">
          {renderTextWithDropdown(title)}
        </div>
        <div className="text-xs">{renderTextWithDropdown(description)}</div>
      </div>
    </GrayCard>
  );
};

export default Step;
