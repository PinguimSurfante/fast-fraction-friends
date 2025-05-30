import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Menu() {
  const [visible, setVisible] = useState(false);

  return (
    // Somente em telas menores que sm (mobile)
    <div className="sm:hidden bg-kid-yellow shadow-md rounded-b-2xl p-2">
      {/* Top bar com botão à esquerda e título à direita */}
      <div className="flex items-center justify-between px-4">
        <button
          id="menu-btn"
          className="text-purple-800 focus:outline-none"
          onClick={() => setVisible(!visible)}
        >
          <svg
            className="size-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <h1 className="text-lg font-bold text-purple-700">Fraction Fast Pack</h1>
      </div>

      {/* Dropdown do menu */}
      {visible && (
        <div className="flex flex-col bg-yellow-100 p-6 rounded-2xl shadow-lg mt-4 mx-4 space-y-4">
          <NavLink
            to="/lessons"
            className="text-purple-700 text-2xl font-bold"
            onClick={() => setVisible(false)}
          >
            📘 Lessons
          </NavLink>
          <NavLink
            to="/games"
            className="text-purple-700 text-2xl font-bold"
            onClick={() => setVisible(false)}
          >
            🎮 Games
          </NavLink>
          <NavLink
            to="/progress"
            className="text-purple-700 text-2xl font-bold"
            onClick={() => setVisible(false)}
          >
            📊 Progress
          </NavLink>
          <NavLink
            to="/profile"
            className="text-purple-700 text-2xl font-bold"
            onClick={() => setVisible(false)}
          >
            👤 Profile
          </NavLink>
        </div>
      )}
    </div>
  );
}
