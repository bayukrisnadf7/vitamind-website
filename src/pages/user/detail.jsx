import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((u) => u.id === Number(id));
        setUser(selected);
      });
  }, [id]);

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-5">Detail User</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* NAMA */}
          <div>
            <label className="block font-semibold mb-1">Nama</label>
            <input
              value={user.nama}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              value={user.email}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* NIP / NIM */}
          <div>
            <label className="block font-semibold mb-1">NIP/NIM</label>
            <input
              value={user.nip_nim}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* JENIS KELAMIN */}
          <div>
            <label className="block font-semibold mb-1">Jenis Kelamin</label>
            <input
              value={user.jenis_kelamin}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* TANGGAL LAHIR – sementara hardcode jika belum ada di JSON */}
          <div>
            <label className="block font-semibold mb-1">Tanggal Lahir</label>
            <input
              value={user.tanggal_lahir || "-"}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* ALAMAT */}
          <div>
            <label className="block font-semibold mb-1">Alamat</label>
            <input
              value={user.alamat || "-"}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* KOTA */}
          <div>
            <label className="block font-semibold mb-1">Kabupaten/Kota</label>
            <input
              value={user.kota || "-"}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* PROVINSI */}
          <div>
            <label className="block font-semibold mb-1">Provinsi</label>
            <input
              value={user.provinsi || "-"}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* NOMOR TELEPON */}
          <div>
            <label className="block font-semibold mb-1">Nomor Telepon</label>
            <input
              value={user.no_telp || "-"}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
