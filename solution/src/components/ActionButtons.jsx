import Button from './Button';

export default function ActionButtons({ onClear, onAdd }) {
  return (
    <div className="action-buttons">
      <Button onClick={onClear} buttonName="Clear" />
      <Button onClick={onAdd} buttonName="Add" />
    </div>
  );
}
