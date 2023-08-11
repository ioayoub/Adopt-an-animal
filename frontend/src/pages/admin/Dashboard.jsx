import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const adminLinks = [
    {
      title: "Dashboard",
      path: "/admin",
    },
    {
      title: "Users",
      path: "/admin/users",
    },
    {
      title: "Animals",
      path: "/admin/animals",
    },
    {
      title: "Categories",
      path: "/admin/categories",
    },
    {
      title: "Favorites",
      path: "/admin/favorites",
    },
    {
      title: "Adoptions",
      path: "/admin/adoptions",
    },
  ];

  return (
    <div className="relative min-h-screen md:flex">
      <div className="bg-blue-800 text-blue-200 flex justify-between md:hidden">
        <NavLink to="#" className="flex items-center space-x-5 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
            />
          </svg>
          <span className="text-2xl font-extrabold ">Dashboard</span>
        </NavLink>
        <button
          className="mobileBtn p-4 focus:outline-none focus:bg-grey-700"
          type="button"
          onClick={toggleSidebar}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`bg-gradient-to-r from-blue-600 to-blue-500 w-64 space-y-6 px-2 py-6 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <nav className="text-white font-sans font-light">
          {adminLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className="py-2.5 px-4 rounded flex items-center space-x-6 transition-duration-200 hover:bg-blue-700 hover:text-white"
            >
              <svg
                className="w-8 h-8 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d={link.path}
                />
              </svg>
              <span>{link.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <Outlet />
    </div>
  );
}

export default Dashboard;
