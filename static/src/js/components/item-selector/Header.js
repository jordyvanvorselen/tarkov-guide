import React from "react";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="rounded-t-xl space-y-4 p-4 py-6 highlight-white/10 bg-slate-800">
      <h2 className="font-semibold text-slate-900 text-white">Quests</h2>
      <SearchBar />
    </header>
  );
};

export default Header;
