import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TodayTaskProvider from './Components/Context/TodayTasks/TodayTaskProvider';
import MissingTaskProvider from './Components/Context/MissingTasks/MissingTaskProvider';
import ImpTaskProvider from './Components/Context/ImportantTasks/ImpTaskProvider';
import MainContainer from './Components/Tasks/MainContainer';

const App = () => {
  return (
    <Router>
      <TodayTaskProvider>
        <MissingTaskProvider>
          <ImpTaskProvider>
            <MainContainer />
          </ImpTaskProvider>
        </MissingTaskProvider>
      </TodayTaskProvider>
    </Router>
  );
};

export default App;
