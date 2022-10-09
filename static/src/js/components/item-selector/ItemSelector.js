import React from "react";

import Header from "./Header";
import Items from "./Items";

const ItemSelector = () => {
  return (
    <div className="relative z-10 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden my-auto xl:mt-18 bg-slate-800">
      <section>
        <Header />
        <Items />
      </section>
    </div>
  );
};

export default ItemSelector;
