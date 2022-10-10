import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { uniq, filter as filterArr } from "lodash";

import axios from "axios";
import Cookies from "js-cookie";

import Header from "./Header";
import Item from "./Item";

const QuestSelector = ({ setQuestCoords }) => {
  useEffect(() => {
    fetchQuests();
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState(null);
  const [quests, setQuests] = useState([]);

  const fetchQuests = async () => {
    const baseUrl = Cookies.get("api-base-url");
    const response = await axios.get(`${baseUrl}quests`);
    setQuests(response.data);
  };

  const onItemClick = (id) => {
    const newSelected = selectedItems.includes(id)
      ? filterArr(selectedItems, (x) => x !== id)
      : uniq([...selectedItems, id]);

    setSelectedItems(newSelected);
    setQuestCoords(
      quests
        .filter((x) => newSelected.includes(x.id))
        .map((quest) => ({ coordinates: quest.coordinates }))
    );
  };

  const onFilterChange = (e) => setFilter(e.target.value);

  return (
    <div className="quest-selector absolute inset-y-0 right-0 w-96 top-20 right-8">
      <div className="relative z-10 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden my-auto xl:mt-18 dark:bg-slate-800">
        <section>
          <Header onFilterChange={onFilterChange} />
          <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6 bg-slate-900/40 dark:ring-1 dark:ring-white/5 max-height-80 overflow-y-scroll">
            {quests &&
              quests.map(
                (q) =>
                  (!filter ||
                    selectedItems.includes(q.id) ||
                    q.name.toLowerCase().includes(filter.toLowerCase())) && (
                    <Item
                      key={q.name}
                      {...q}
                      title={q.name}
                      subtitle={q.trader}
                      onItemClick={onItemClick}
                      selected={selectedItems.includes(q.id)}
                    />
                  )
              )}
          </ul>
        </section>
      </div>
    </div>
  );
};

QuestSelector.propTypes = {
  setQuestCoords: PropTypes.func.isRequired,
};

export default QuestSelector;
