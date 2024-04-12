import PeopleTableRow from './PeopleTableRow';

export default function PeopleTable({ peopleData }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Location</td>
        </tr>
      </thead>
      <tbody>
        {peopleData.map((data, i) =>
          <PeopleTableRow {...data} key={i} />
        )}
      </tbody>
    </table>
  )
}
