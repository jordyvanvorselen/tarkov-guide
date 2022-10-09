import React from "react";
import Map from "./Map";
import QuestSelector from "./QuestSelector";

const App = () => {
  return (
    <div className="bg-slate-900 h-full w-full dark">
      <Map />
      <QuestSelector />
    </div>
  );
};

export default App;
