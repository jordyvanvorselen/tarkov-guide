import React, { useState } from "react";
import Map from "./Map";
import QuestSelector from "./quest-selector/QuestSelector";

const App = () => {
  const [questCoords, setQuestCoords] = useState([]);

  return (
    <div className="bg-slate-900 h-full w-full dark">
      <Map coordinates={questCoords} />
      <QuestSelector setQuestCoords={setQuestCoords} />
    </div>
  );
};

export default App;
