import React from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUserPlus } from "react-icons/fa";

const Chat = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-blue-300 h-screen flex">
      {/* Left Panel */}
      <div className="left-panel bg-blue-600 rounded-s-3xl w-2/5 flex flex-col ">
        {/* Top Bar */}
        <div className="top-bar flex items-center justify-between p-4 border-b border-white">
          {/* User Info */}
          <div className="user-info flex items-center space-x-2">
            <div className="user-avatar w-12 h-12 flex items-center justify-center bg-white rounded-full">
              <img
                src={user?.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-full h-full rounded-full"
              />
            </div>
            <p className="text-white text-sm">{user?.displayName}</p>
          </div>
          {/* Add Friend Button */}
          <div className="add-friend-btn flex items-center space-x-2">
            <button className="flex items-center px-3 py-1 rounded-full bg-yellow-500 hover:bg-yellow-600">
              <FaUserPlus className="text-white" />
              <p className="text-white text-sm">Add Friend</p>
            </button>
          </div>
        </div>
        {/* Friends List */}
        <div className="friends-list flex flex-col flex-1 overflow-y-auto">
          {/* Sample Friend */}
          <div className="friend flex items-center p-4 border-b border-red-200">
            <div className="friend-avatar w-16 h-16 flex items-center justify-center bg-white rounded-full">
              {/* Friend Avatar */}
            </div>
            <div className="friend-info flex flex-col ml-4">
              <p className="text-white text-lg">Friend Name</p>
              <p className="text-white text-sm">Last Message</p>
            </div>
            <div className="friend-status flex items-center space-x-2 ml-auto">
              <p className="text-white text-xs">Time</p>
              <div className="status-indicator w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          {/* Add more friends here */}
        </div>
      </div>
      {/* Right Panel */}
      <div className="right-panel bg-white w-3/5 rounded-e-3xl"></div>
    </div>
  );
};

export default Chat;
