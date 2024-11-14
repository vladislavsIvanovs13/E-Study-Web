import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <div>
        <nav id="navbar" className="border-2 border-rtu-green text-center font-bold">
          <ul className="flex">
            <li className="w-1/3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-4 ${isActive ? 'bg-rtu-green text-white underline underline-offset-[16px]' : 'text-rtu-green'}`
                }
              >
                Dienasgrāmata
              </NavLink>
            </li>
            <li className="w-1/3 border-x-2 border-rtu-green">
              <NavLink
                to="/campus-plan"
                className={({ isActive }) =>
                  `block py-4 ${isActive ? 'bg-rtu-green text-white underline underline-offset-[16px]' : 'text-rtu-green'}`
                }
              >
                Ķīpsalas plāns
              </NavLink>
            </li>
            <li className="w-1/3">
              <NavLink
                to="/professors"
                className={({ isActive }) =>
                  `block py-4 ${isActive ? 'bg-rtu-green text-white underline underline-offset-[16px]' : 'text-rtu-green'}`
                }
              >
                Mācībspēki
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
}
