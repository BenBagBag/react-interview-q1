import { useEffect, useState } from 'react';

import ActionButtons from './components/ActionButtons';
import LocationsDropdown from './components/LocationsDropdown';
import NameInput from './components/NameInput';
import PeopleTable from './components/PeopleTable';

import { isNameValid, getLocations } from './mock-api/apis';

import './App.css';

function App() {
  const [namesList, setNamesList] = useState([]);
  const [currentNameInput, setCurrentNameInput] = useState('');
  const [isValidCurrentNameInput, setIsValidCurrentNameInput] = useState(true);
  const [locationsList, setLocationsList] = useState([]);
  const [currentLocationInput, setCurrentLocationInput] = useState('');

  useEffect(() => {
    const locationsAsync = async () => {
      try {
        const locations = await getLocations();
        setLocationsList(locations);
        // setCurrentLocationInput(locations[0]);
      } catch(error) {
        console.log('There was an error fetching the locations: ' + error);
      }
    }
    locationsAsync();
  })

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

  // const onUpdateLocationInput = (e) => {
  //   console.log(e.target.value);
  //   setCurrentLocationInput(e.target.value);
  // }

  const onClear = () => {
    setCurrentNameInput('');
    setCurrentLocationInput('');
  }

  const onAdd = () => {
    let currentNamesList = namesList;
    currentNamesList.push({
      'name': currentNameInput,
      'location': currentLocationInput
    });
    setNamesList(currentNamesList)
  }

  return (
    <div className="App">
      <NameInput
        value={currentNameInput}
        onUpdateNameInput={onUpdateNameInput}
        isValidCurrentNameInput={isValidCurrentNameInput}
      />
      <LocationsDropdown
        locationsList={locationsList}
        currentLocationInput={currentLocationInput}
        onUpdateLocationInput={setCurrentLocationInput}
      />
      <ActionButtons onClear={onClear} onAdd={onAdd} />
      <PeopleTable peopleData={namesList} />
    </div>
  );
}

export default App;
