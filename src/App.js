import React, { useState } from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';

const App = () => {
  const [ textsState, setTexts ] = useState({
    texts: [
      { first: "This is the first task!" },
      { second: "Thanks for the visit!" },
      { userName: "Freezer" }
    ]
  });

  const clickNameHandler = (newUserName) => {
    setTexts({ 
      texts: [
        { first: "Later!" },
        { second: "Soon!" },
        { userName: newUserName }
      ] 
    });
  }

  const inputNameChangeHandler = (event) => {
    setTexts({ 
      texts: [
        { first: "Later!" },
        { second: "Soon!" },
        { userName: event.target.value }
      ] 
    });
  }


  return (
    <div className="App">          
      <UserOutput first={ textsState.texts[0].first } />
      <UserOutput second={ textsState.texts[2].userName } click={ clickNameHandler.bind(this, 'Lilit') } >
        { textsState.texts[1].second }
      </UserOutput>
      <UserInput changed={ inputNameChangeHandler } userName={ textsState.texts[2].userName } />
    </div>
  );
}

export default App;
