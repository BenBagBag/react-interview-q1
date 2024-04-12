export default function LocationsDropdown({ currentLocationInput, onUpdateLocationInput, locationsList }) {
  return (
    <div className="input-holder">
      <div className="input-label">
        <h2>Location</h2>
      </div>
      <div className="input">
        <select
          value={currentLocationInput}
          onChange={(e) => onUpdateLocationInput(e.target.value)}>
            {locationsList.map((location, i) =>
              <option value={location} key={i}>{location}</option>
            )}
        </select>
      </div>
    </div>
  );
}
