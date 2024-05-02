import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router";

const Chat = () => {
  const [user] = useAuthState(auth);
  const [friends, setFriends] = useState([]);
  let friendsList = [
    {
      name: "Siu",
      lastMessage: "Hello",
      status: "online",
    },
    {
      name: "Jane Doe",
      lastMessage: "Hi",
      status: "offline",
    },
    {
      name: "James Doe",
      lastMessage: "Hey",
      status: "online",
    },
  ];
  useEffect(() => {
    setFriends(friendsList);
  }
  , []);
  const navigate = useNavigate();
  console.log(user?.photoURL);
  // let userImage = user?.photoURL;
  if (!user) {
    return (
      <div className="bg-blue-300 h-screen flex items-center justify-center flex-col">
        <p className="text-white text-2xl">Please sign in to chat</p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-blue-500 px-4 py-2 text-white rounded-full hover:bg-blue-600 transition duration-300 mt-4"
        >
          Go back
        </button>
      </div>
    );
  }
  return (
    <div className="bg-blue-400 h-screen flex">
      {/* Left Panel */}
      <div className="left-panel bg-blue-600 rounded-s-3xl w-2/5 flex flex-col ">
        {/* Top Bar */}
        <div className="top-bar flex items-center justify-between p-4 border-b border-white">
          {/* User Info */}
          <div className="user-info flex items-center space-x-2">
            <div
              // onClick={() => {
              //   auth.signOut();
              // }}
              className="user-avatar w-12 h-12 flex items-center justify-center bg-white rounded-full"
            >
              <img
                src={user?.photoURL}
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
          {/* Check if there are any friends */}
          {friends.length === 0 ? (
            <p className="text-white text-center mt-4">No friends yet</p>
          ) : (
            // Map through friends
            friends.map((friend, index) => (
              <div
                key={index}
                className="friend flex items-center p-4 border-b border-red-200"
              >
                <div className="friend-avatar w-16 h-16 flex items-center justify-center bg-white rounded-full">
                  {/* Friend Avatar */}
                </div>
                <div className="friend-info flex flex-col ml-4">
                  <p className="text-white text-lg">{friend.name}</p>
                  <p className="text-white text-sm">{friend.lastMessage}</p>
                </div>
                <div className="friend-status flex items-center space-x-2 ml-auto">
                  <p className="text-white text-xs">
                    {friend.status === "online" ? "Online" : "Offline"}
                  </p>
                  <div
                    className={`status-indicator w-3 h-3 rounded-full ${
                      friend.status === "online" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Right Panel */}
      <div className="right-panel bg-red-400 w-3/5 rounded-e-3xl">

      </div>
    </div>
  );
};

export default Chat;
