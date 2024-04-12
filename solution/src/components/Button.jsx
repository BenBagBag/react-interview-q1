export default function Button({ onClick, buttonName }) {
  return (
    <button className="button" onClick={onClick}>{buttonName}</button>
  );
}
