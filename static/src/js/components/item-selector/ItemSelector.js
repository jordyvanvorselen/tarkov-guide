import React, { useState } from "react";

import { uniq, filter } from "lodash";

import Header from "./Header";
import Item from "./Item";

const quests = [
  {
    id: 1,
    title: "Shortage",
    subtitle: "Therapist",
    maps: [
      "customs",
      "woods",
      "shoreline",
      "factory",
      "lighthouse",
      "reserve",
      "interchange",
    ],
  },
  {
    id: 2,
    title: "Painkiller",
    subtitle: "Therapist",
    maps: [
      "customs",
      "woods",
      "shoreline",
      "factory",
      "lighthouse",
      "reserve",
      "interchange",
    ],
  },
  {
    id: 3,
    title: "Operation Aquarius - Part 1",
    subtitle: "Therapist",
    maps: ["customs"],
  },
];

const ItemSelector = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const onItemClick = (id) => {
    setSelectedItems(
      selectedItems.includes(id)
        ? filter(selectedItems, (x) => x !== id)
        : uniq([...selectedItems, id])
    );
  };

  return (
    <div className="relative z-10 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden my-auto xl:mt-18 bg-slate-800">
      <section>
        <Header />
        <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6 bg-slate-900/40 ring-1 dark:ring-white/5 max-height-80 overflow-y-scroll">
          {quests.map((q) => (
            <Item
              key={q.title}
              {...q}
              onItemClick={onItemClick}
              selected={selectedItems.includes(q.id)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ItemSelector;
