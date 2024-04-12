import { DebounceInput } from 'react-debounce-input';

export default function NameInput({ value, onUpdateNameInput, isValidCurrentNameInput }) {
  return (
    <>
      <div>
        <h2>Name</h2>
      </div>
      <div>
        <DebounceInput
          minLength={2}
          debounceTimeout={100}
          value={value}
          onChange={onUpdateNameInput}
        />
        <h3 className={isValidCurrentNameInput ? 'duplicate-name-warning hide' : 'duplicate-name-warning'}>This name has already been taken.</h3>
      </div>
    </>
  );
}
