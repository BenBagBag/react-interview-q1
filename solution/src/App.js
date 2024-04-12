import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

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
  const [location, setLocation] = useState('');

  useEffect(() => {
    const locationsAsync = async () => {
      try {
        const locations = await getLocations();
        setLocationsList(locations);
        setLocation(locations[0]);
      } catch(error) {
        console.log('There was an error fetching the locations: ' + error);
      }
    }
    locationsAsync();
  }, [])

  const validateName = async (nameInput) => {
    try {
      const valid = await isNameValid(nameInput);
      setIsValidCurrentNameInput(valid);
    } catch(error) {
      console.log('There was an error validating the name: ' + error);
    }
  }

  const debouncedValidateName = debounce((nameInput) => {
    validateName(nameInput);
  }, 100);

  const onUpdateNameInput = (e) => {
    e.preventDefault();
    const nameInput = e.target.value;
    setCurrentNameInput(nameInput);
    debouncedValidateName(nameInput);
  }

  const onClear = () => {
    setCurrentNameInput('');
    setLocation('');
  }

  const onAdd = () => {
    let currentNamesList = namesList;
    currentNamesList.push({
      'name': currentNameInput,
      'location': location
    });
    setNamesList(currentNamesList);
    onClear();
  }

  return (
    <div className="app">
      <NameInput
        value={currentNameInput}
        onUpdateNameInput={onUpdateNameInput}
        isValidCurrentNameInput={isValidCurrentNameInput}
      />
      <LocationsDropdown
        currentLocationInput={location}
        onUpdateLocationInput={setLocation}
        locationsList={locationsList}
      />
      <ActionButtons onClear={onClear} onAdd={onAdd} />
      <PeopleTable peopleData={namesList} />
    </div>
  );
}

export default App;
