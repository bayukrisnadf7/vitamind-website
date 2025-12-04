import React, { useEffect, useState } from "react";
import { Table } from "../../components/table";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [konseling, setKonseling] = useState([]);

  useEffect(() => {
    // Load data user
    fetch("/api/user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error load user:", err));

    // Load data konseling
    fetch("/api/konseling.json")
      .then((res) => res.json())
      .then((data) => setKonseling(data))
      .catch((err) => console.error("Error load konseling:", err));
  }, []);

  // Ambil 10 aktivitas terbaru
  const recentActivities = konseling.slice(0, 5);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* === Card Jumlah User & Konseling === */}
      <div className="flex gap-5">
        <div className="bg-white p-5 rounded-lg shadow-md w-full h-[150px] flex flex-col justify-center">
          <p className="text-slate-500 text-sm">Total Users</p>
          <p className="text-4xl font-bold">{users.length}</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-full h-[150px] flex flex-col justify-center">
          <p className="text-slate-500 text-sm">Total Konseling</p>
          <p className="text-4xl font-bold">{konseling.length}</p>
        </div>
      </div>

      {/* === Recent Activities === */}
      <div className="bg-white p-5 rounded-lg shadow-md w-full h-full">
        <h2 className="text-lg font-bold mb-4">Recent Activities</h2>

        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>No</Table.HeaderCell>
              <Table.HeaderCell>Nama</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>NIP/NIM</Table.HeaderCell>
              <Table.HeaderCell>Jenis Kelamin</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {recentActivities.map((item, index) => (
              <Table.Row key={item.id}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{item.nama}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.nip_nim}</Table.Cell>
                <Table.Cell>{item.jenis_kelamin}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
