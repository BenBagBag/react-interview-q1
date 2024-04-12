import Button from './Button';

export default function ActionButtons() {
  function clearName() {
    alert('cleared!');
  }

  function addName() {
    alert('added!');
  }

  return (
    <div className="action-buttons">
      <Button onClick={clearName} buttonName="Clear" />
      <Button onClick={addName} buttonName="Add" />
    </div>
  );
}
