import { useEffect, useState } from 'react';

import ActionButtons from './components/ActionButtons';
import NameInput from './components/NameInput';
import PeopleTable from './components/PeopleTable';

import { isNameValid, getLocations } from './mock-api/apis';

import './App.css';

function App() {
  const [namesList, setNamesList] = useState([]);
  const [currentNameInput, setCurrentNameInput] = useState('');
  const [isValidCurrentNameInput, setIsValidCurrentNameInput] = useState(true);
  const [currentLocationInput, setCurrentLocationInput] = useState('');

  const validateNameInput = async (nameInput) => {
    try {
      const valid = await isNameValid(nameInput);
      setIsValidCurrentNameInput(valid);
    } catch(error) {
      console.log('There was an error validating the name: ' + error);
    }
  }

  const onUpdateNameInput = (e) => {
    const nameInput = e.target.value;
    setCurrentNameInput(nameInput);
    validateNameInput(nameInput);
  }

  // useEffect(() => {
  //   let waiting = true;
  //   isNameValid(currentNameInput).then(valid => {
  //     if (!waiting) {
  //       setIsValidCurrentNameInput(valid);
  //       console.log(isNameValid);
  //     }
  //   });
  //   return () => {
  //     waiting = true;
  //   }
  // }, [currentNameInput]);

  return (
    <div className="App">
      <NameInput
        value={currentNameInput}
        onUpdateNameInput={onUpdateNameInput}
        isValidCurrentNameInput={isValidCurrentNameInput}
      />
      <ActionButtons />
      <PeopleTable peopleData={namesList} />
    </div>
  );
}

export default App;
