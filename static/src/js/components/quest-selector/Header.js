import React from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";

const Header = ({ onFilterChange }) => {
  return (
    <header className="rounded-t-xl space-y-4 p-4 py-6 highlight-white/10 bg-slate-800">
      <h2 className="font-semibold text-slate-900 text-white">Quests</h2>
      <SearchBar onFilterChange={onFilterChange} />
    </header>
  );
};

Header.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Header;
