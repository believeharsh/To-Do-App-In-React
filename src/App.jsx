import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TodayTaskProvider from "./Components/Context/TodayTasks/TodayTaskProvider";
import MissingTaskProvider from "./Components/Context/MissingTasks/MissingTaskProvider";
import ImpTaskProvider from "./Components/Context/ImportantTasks/ImpTaskProvider";
// import AllTasks from "./Components/Tasks/AllTasks";
import GetTasks from "./Components/AllTasks/GetTasks";


const App = () => {
  return (
    // Note : The order in which you nest providers typically does not matter unless the providers are dependent on each other. For instance, if one context depends on another, you should place the dependent provider inside the provider it depends on.

    <Router>
      <TodayTaskProvider>
        <MissingTaskProvider>
          <ImpTaskProvider>
            <GetTasks/>
          </ImpTaskProvider>
        </MissingTaskProvider>
      </TodayTaskProvider>
    </Router>
  );
};

export default App;
