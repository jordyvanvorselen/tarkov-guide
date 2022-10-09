import React from "react";
import ItemSelector from "./item-selector/ItemSelector";

const QuestSelector = () => {
  return (
    <div className="quest-selector absolute inset-y-0 right-0 w-96 top-20 right-8">
      <ItemSelector />
    </div>
  );
};

export default QuestSelector;
