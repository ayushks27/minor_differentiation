// SearchBar.js
"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch, placeholder = "Search..." }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) {
    onSearch(e.target.value);
    }
  };

  return (
    <div className="fixed top-2.5 right-15 z-50">
      <form onSubmit={handleSubmit} className="relative w-40 focus-within:w-80 transition-all duration-300 ease-in-out">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          className="w-full px-4 py-2 pl-4 pr-10 rounded-full border border-white 
                     bg-white text-black shadow-md placeholder-black
                     focus:outline-none focus:ring-2 focus:ring-white-500"
        />
        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
          <Search size={18} />
        </button>
      </form>
    </div>
  );
}