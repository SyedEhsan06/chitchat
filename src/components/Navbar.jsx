import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="text-white hover:text-gray-300">
            {user ? `${user.displayName}` : "My App"}
          </Link>
        </h1>
        <div>
          <h1
            className="
    text-3xl
    font-bold
    text-center
    text-white
    "
          >
            CHIT CHAT
          </h1>
        </div>
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-red-600 transition duration-300 mr-4"
            >
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
