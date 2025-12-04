import React, { useEffect, useState } from "react";
import { Table } from "../../components/table";
import { useNavigate } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/user.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal load file JSON");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredUsers = users.filter((user) => {
    const keyword = search.toLowerCase();
    return (
      user.nama.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword) ||
      user.nip_nim.toLowerCase().includes(keyword)
    );
  });

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const currentData = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Data User</h1>

      <input
        type="text"
        placeholder="Cari nama, email, atau NIP/NIM..."
        className="w-[450px] p-3 border border-gray-300 rounded-xl mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Nama</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>NIP/NIM</Table.HeaderCell>
            <Table.HeaderCell>Jenis Kelamin</Table.HeaderCell>
            <Table.HeaderCell>Aksi</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {currentData.length > 0 ? (
            currentData.map((item, index) => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  {(currentPage - 1) * rowsPerPage + index + 1}
                </Table.Cell>
                <Table.Cell>{item.nama}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.nip_nim}</Table.Cell>
                <Table.Cell>{item.jenis_kelamin}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/user/${item.id}`)}
                      className="text-black hover:underline cursor-pointer"
                    >
                      <ImProfile size={20} />
                    </button>

                    <button
                      onClick={() => navigate(`/user/${item.id}`)}
                      className="text-black hover:underline cursor-pointer"
                    >
                      <FaUserDoctor size={20} />
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={6} className="text-center py-4">
                Tidak ada data ditemukan
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      {/* Pagination */}
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
};

export default UserPage;
