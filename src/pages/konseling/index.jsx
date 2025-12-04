import React, { useEffect, useState } from "react";
import { Table } from "../../components/table";
import { useNavigate } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
export default function Konseling() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const navigate = useNavigate();

  // Fetch data
  useEffect(() => {
    fetch("/api/konseling.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal load file JSON");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  // Filter berdasarkan input search (nama, email, nip_nim)
  const filteredData = data.filter((item) => {
    const keyword = search.toLowerCase();
    return (
      item.nama.toLowerCase().includes(keyword) ||
      item.email.toLowerCase().includes(keyword) ||
      item.nip_nim.toLowerCase().includes(keyword)
    );
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="flex flex-col gap-5 p-6">
      <h1 className="text-xl font-bold">Data Konseling</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Cari nama, email, NIP/NIM..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-[450px] p-3 border border-gray-300 rounded-xl"
        />
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Nama</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>NIP/NIM</Table.HeaderCell>
            <Table.HeaderCell>Jenis Kelamin</Table.HeaderCell>
            <Table.HeaderCell>Tanggal</Table.HeaderCell>
            <Table.HeaderCell>Aksi</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {currentData.map((item, index) => (
            <Table.Row key={item.id}>
              <Table.Cell>
                {(currentPage - 1) * rowsPerPage + index + 1}
              </Table.Cell>
              <Table.Cell>{item.nama}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.nip_nim}</Table.Cell>
              <Table.Cell>{item.jenis_kelamin}</Table.Cell>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => navigate(`/konseling/${item.id}`)}
                  className="text-black hover:underline cursor-pointer"
                >
                  <MdDateRange size={20} />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-slate-200 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-slate-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-slate-200 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
