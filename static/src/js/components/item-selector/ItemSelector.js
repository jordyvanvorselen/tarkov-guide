import React, { useState } from "react";
import PropTypes from "prop-types";

import { uniq, filter as filterArr } from "lodash";

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
    x: 250,
    y: 320,
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
    x: 1200,
    y: 250,
  },
  {
    id: 3,
    title: "Operation Aquarius - Part 1",
    subtitle: "Therapist",
    maps: ["customs"],
    x: 500,
    y: 600,
  },
];

const ItemSelector = ({ setQuests }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState(null);

  const onItemClick = (id) => {
    const newSelected = selectedItems.includes(id)
      ? filterArr(selectedItems, (x) => x !== id)
      : uniq([...selectedItems, id]);

    setSelectedItems(newSelected);
    setQuests(
      quests
        .filter((x) => newSelected.includes(x.id))
        .map((i) => ({ x: i.x, y: i.y }))
    );
  };

  const onFilterChange = (e) => setFilter(e.target.value);

  return (
    <div className="relative z-10 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden my-auto xl:mt-18 dark:bg-slate-800">
      <section>
        <Header onFilterChange={onFilterChange} />
        <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6 bg-slate-900/40 dark:ring-1 dark:ring-white/5 max-height-80 overflow-y-scroll">
          {quests.map(
            (q) =>
              (!filter ||
                selectedItems.includes(q.id) ||
                q.title.toLowerCase().includes(filter.toLowerCase())) && (
                <Item
                  key={q.title}
                  {...q}
                  onItemClick={onItemClick}
                  selected={selectedItems.includes(q.id)}
                />
              )
          )}
        </ul>
      </section>
    </div>
  );
};

ItemSelector.propTypes = {
  setQuests: PropTypes.func.isRequired,
};

export default ItemSelector;
