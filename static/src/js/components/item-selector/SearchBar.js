import React from "react";

import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  return (
    <div className="group relative rounded-md bg-slate-700 highlight-white/10 focus-within:bg-transparent">
      <SearchIcon />
      <input
        type="text"
        aria-label="Filter quests"
        placeholder="Filter quests..."
        className="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100 placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
      />
    </div>
  );
};

export default SearchBar;
