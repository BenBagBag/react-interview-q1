export default function LocationsDropdown({ locationsList, currentLocationInput, onUpdateLocationInput }) {
  const update = (e) => {
    alert('update');
    onUpdateLocationInput(e.target.value);
  }
  return (
    <select
      value={currentLocationInput}
      onChange={update}>
        <option defaultValue disabled>Select Country</option>
        {locationsList.map((location, i) =>
          <option value={location} key={i}>{location}</option>
        )}
    </select>
  );
}
// ? currentLocationInput : locationsList[0]
// (e) => onUpdateLocationInput(e.target.value)
