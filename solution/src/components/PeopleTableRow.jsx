export default function PeopleTableRow({ name, location }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{location}</td>
    </tr>
  );
}
