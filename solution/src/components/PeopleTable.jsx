import PeopleTableRow from './PeopleTableRow';

export default function PeopleTable({ peopleData }) {
  return (
    <table className="people-table">
      <thead className="people-table-header">
        <tr>
          <td>Name</td>
          <td>Location</td>
        </tr>
      </thead>
      <tbody>
        {peopleData.map((data, i) =>
          <PeopleTableRow data={data} i={i} key={i} />
        )}
      </tbody>
    </table>
  )
}
