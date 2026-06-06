function Sidebar() {
  return (
    <div className="w-64 bg-slate-800 min-h-screen p-6">

      <h2 className="text-xl font-bold mb-8">
        Navigation
      </h2>

      <ul className="space-y-4">
        <li className="cursor-pointer hover:text-blue-400">
          Dashboard
        </li>

        <li className="cursor-pointer hover:text-blue-400">
          History
        </li>

        <li className="cursor-pointer hover:text-blue-400">
          Reports
        </li>

        <li className="cursor-pointer hover:text-blue-400">
          Settings
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;