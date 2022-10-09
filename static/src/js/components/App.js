import React, { useState } from "react";
import Map from "./Map";
import QuestSelector from "./QuestSelector";

const App = () => {
  const [quests, setQuests] = useState([]);

  return (
    <div className="bg-slate-900 h-full w-full dark">
      <Map quests={quests} />
      <QuestSelector setQuests={setQuests} />
    </div>
  );
};

export default App;
