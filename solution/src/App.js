import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

import ActionButtons from './components/ActionButtons';
import LocationsDropdown from './components/LocationsDropdown';
import NameInput from './components/NameInput';
import PeopleTable from './components/PeopleTable';

import { isNameValid, getLocations } from './mock-api/apis';

import './App.css';

function App() {
  // Names stored in state because this isn't a DB assignment :)
  const [namesList, setNamesList] = useState([]);
  const [currentNameInput, setCurrentNameInput] = useState('');
  const [isValidCurrentNameInput, setIsValidCurrentNameInput] = useState(true);
  const [locationsList, setLocationsList] = useState([]);
  const [location, setLocation] = useState('');

  // Fetch list of locations when page loads
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

  // Check if the name is valid (according to the API)
  const validateName = async (nameInput) => {
    try {
      const valid = await isNameValid(nameInput);
      setIsValidCurrentNameInput(valid);
    } catch(error) {
      console.log('There was an error validating the name: ' + error);
    }
  }

  // Create debounced version of validation function
  // So you don't check every split second
  const debouncedValidateName = debounce((nameInput) => {
    validateName(nameInput);
  }, 100);

  // Handle name update
  // Update NameInput and validate name
  const onUpdateNameInput = (e) => {
    const nameInput = e.target.value;
    setCurrentNameInput(nameInput);
    debouncedValidateName(nameInput);
  }

  // Clear input
  const onClear = () => {
    setCurrentNameInput('');
    setLocation('');
  }

  // Handle clicking 'Add button'
  // Add new person to the NamesList as a dictionary with name and location
  // Clear input so user can add another person
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
