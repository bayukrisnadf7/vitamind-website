import { IoIosLogOut } from "react-icons/io";
import { FaHome, FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-[#56B3FD] text-white p-4">
      <div className="flex gap-3 justify-center items-center">
        <img src="images/logo.png" alt="logo" width={50} className="rounded-full" />
        <h2 className="text-2xl font-bold">VitaMind</h2>
      </div>
      <div className="flex flex-col h-full justify-between">
        <ul className="mt-8 font-semibold">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `mb-2 p-3 rounded-xl text-lg flex gap-3 items-center transition ${
                  isActive ? "bg-white text-[#56B3FD]" : "hover:bg-white hover:text-[#56B3FD]"
                }`
              }
            >
              <FaHome className="inline text-2xl" />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                `mb-2 p-3 rounded-xl text-lg flex gap-3 items-center transition ${
                  isActive ? "bg-white text-[#56B3FD]" : "hover:bg-white hover:text-[#56B3FD]"
                }`
              }
            >
              <FaUser className="inline text-2xl" />
              Data User
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/konseling"
              className={({ isActive }) =>
                `mb-2 p-3 rounded-xl text-lg flex gap-3 items-center transition ${
                  isActive ? "bg-white text-[#56B3FD]" : "hover:bg-white hover:text-[#56B3FD]"
                }`
              }
            >
              <MdDateRange className="inline text-2xl" />
              Jadwal Konseling
            </NavLink>
          </li>
        </ul>

        {/* Logout */}
        <ul className="font-semibold mb-10">
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `p-3 rounded-xl text-lg flex gap-3 items-center transition ${
                  isActive ? "bg-white text-[#56B3FD]" : "hover:bg-white hover:text-[#56B3FD]"
                }`
              }
            >
              <IoIosLogOut className="inline text-2xl" />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
