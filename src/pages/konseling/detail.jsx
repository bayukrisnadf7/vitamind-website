import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function KonselingDetail() {
  const { id } = useParams();
  const [konseling, setKonseling] = useState(null);
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/konseling.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((u) => u.id === Number(id));
        setKonseling(selected);
      });
  }, [id]);

  if (!konseling) return <p className="p-6">Loading...</p>;

  const handleChange = (e) => {
    setKonseling({ ...konseling, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      alert("Tanggal berhasil diperbarui!");
      setSaving(false);
    }, 700);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-5">Detail Konseling</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* NAMA */}
          <div>
            <label className="block font-semibold mb-1">Nama</label>
            <input
              value={konseling.nama}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              value={konseling.email}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* NIP / NIM */}
          <div>
            <label className="block font-semibold mb-1">NIP/NIM</label>
            <input
              value={konseling.nip_nim}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* JENIS KELAMIN */}
          <div>
            <label className="block font-semibold mb-1">Jenis Kelamin</label>
            <input
              value={konseling.jenis_kelamin}
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100"
            />
          </div>

          {/* TANGGAL LAHIR – sementara hardcode jika belum ada di JSON */}
          <div>
            <label className="block font-semibold mb-1">
              Tanggal Konseling
            </label>
            <input
              type="date"
              name="date"
              value={konseling.date}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2"
            />
          </div>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="mt-6 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {saving ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </div>
  );
}
