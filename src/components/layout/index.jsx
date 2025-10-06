import Sidebar from "../Sidebar/index.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-[100vh]">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
