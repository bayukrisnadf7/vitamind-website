import { Table } from "../../components/table";

export default function Konseling() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold">Konseling</h1>
      <div className="bg-white p-5 rounded-lg shadow-md w-full h-full">
        <h2 className="text-lg font-bold mb-4">Data Konselings</h2>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>No</Table.HeaderCell>
              <Table.HeaderCell>Activity</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Activity 1</Table.Cell>
              <Table.Cell>2023-01-01</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>Activity 2</Table.Cell>
              <Table.Cell>2023-01-02</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
