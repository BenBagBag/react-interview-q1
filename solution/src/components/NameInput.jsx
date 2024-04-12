export default function NameInput({ value, onUpdateNameInput, isValidCurrentNameInput }) {
  return (
    <div className="input-holder">
      <div className="input-label">
        <h2>Name</h2>
      </div>
      <div className="input">
        <input value={value} onChange={onUpdateNameInput} />
        <p className={isValidCurrentNameInput ? 'duplicate-name-warning hide' : 'duplicate-name-warning'}>This name has already been taken.</p>
      </div>
    </div>
  );
}
