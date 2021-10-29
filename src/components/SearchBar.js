import React from "react";

export default function SearchBar({
    handleSearch,
    placeholderText,
    searchVal,
    isSticky = false,
}){
    return (
      <input
        onChange={handleSearch}
        placeholder={placeholderText}
        value={searchVal}
        data-default=""
        className={`blog-search roboto-mono normal ba br3 pa2 ${isSticky && "sticky"}`}
      />
    );
  }