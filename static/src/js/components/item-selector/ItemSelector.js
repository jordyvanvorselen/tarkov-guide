import React from "react";

import Header from "./Header";
import Item from "./Item";

const ItemSelector = () => {
  return (
    <div className="relative z-10 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden my-auto xl:mt-18 bg-slate-800">
      <section>
        <Header />
        <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6 bg-slate-900/40 ring-1 dark:ring-white/5 max-height-80 overflow-y-scroll">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>
      </section>
    </div>
  );
};

export default ItemSelector;
