import React from "react";
import PropTypes from "prop-types";

import ItemSelector from "./item-selector/ItemSelector";

const QuestSelector = ({ setQuests }) => {
  return (
    <div className="quest-selector absolute inset-y-0 right-0 w-96 top-20 right-8">
      <ItemSelector setQuests={setQuests} />
    </div>
  );
};

QuestSelector.propTypes = {
  setQuests: PropTypes.func.isRequired,
};

export default QuestSelector;
