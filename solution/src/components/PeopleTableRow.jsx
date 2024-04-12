export default function PeopleTableRow({ i, data }) {
  return (
    <tr className={i % 2 === 0 ? '' : 'gray'}>
      <td>{data.name}</td>
      <td>{data.location}</td>
    </tr>
  );
}
