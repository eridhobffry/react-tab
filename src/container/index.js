import React from "react";
import Tabs from "../components/tabs";
import Panel from "../components/panel";

const App = () => {
  return (
    <>
      <Tabs selected={0}>
        <Panel title="Übersicht">This is the first panel</Panel>
        <Panel title="Document">This is the second panel</Panel>
      </Tabs>
    </>
  );
};

export default App;
