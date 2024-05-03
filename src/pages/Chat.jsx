import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import { IoCall } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import "./Scroll.css"

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
  console.log(user)
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
    <div className="bg-blue-400 h-screen  justify-center flex items-center">
      {/* Left Panel */}
      <div className="h-5/6 flex justify-center w-4/5 rounded-3xl shadow-2xl ">
      <div className="left-panel bg-blue-600 flex flex-col w-2/5 rounded-s-3xl ">
        {/* Top Bar */}
        <div className="top-bar flex items-center justify-between p-4 border-b border-white">
          {/* User Info */}
          <div className="user-info flex items-center space-x-2">
            <div
              onClick={() => {
                auth.signOut();
              }}
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
      <div className="right-panel bg-white w-full  rounded-r-3xl relative">
        {/* chat navbar */}
      <nav class="flex justify-between items-center  p-7">
        {/* chat nav image */}
  <div class="text-blue-600 text-xl flex items-center gap-3">
          {/* chat nav name */}
  <div className="friend-avatar w-10 h-10 flex bg-blue-600 rounded-full">
                </div>Syed</div>
              {/* chat navbar call video call setting */}  
  <div class="flex space-x-6">
    <a href="#" class="text-blue-600 hover:text-blue-300">
    <MdOutlineVideoCall size={24} />
    </a>
    <a href="#" class="text-blue-600 hover:text-blue-300">
    <IoCall size={20}/>
    </a>
    <a href="#" class="text-blue-600 hover:text-blue-300">
    <BsThreeDotsVertical size={20}/>
    </a>
  </div>
</nav>
        {/* chat send box   */}

     <div className=" bg-gray-200 flex flex-col gap-y-2 h-2/3 hideScroll ">

     <div class="flex items-start gap-2.5">
<div className="friend-avatar w-10 h-10 flex bg-blue-600 rounded-full ml-1">
  /</div>
   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-blue-500 rounded-e-xl rounded-es-xl">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="text-sm font-semibold">Syed</span>
         <span className="text-sm font-normal">11:46</span>
      </div>
      <p class="text-sm font-normal py-2.5">hey my name is syed ,and i am from bihar</p>
      <span class="text-sm font-normal">Delivered</span>
   </div>
</div>

<div class="flex items-start gap-2.5">
<div className="friend-avatar w-10 h-10 flex bg-blue-600 rounded-full ml-1">
  /</div>
   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-blue-500 rounded-e-xl rounded-es-xl">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="text-sm font-semibold">Syed</span>
         <span className="text-sm font-normal">11:46</span>
      </div>
      <p class="text-sm font-normal py-2.5">hey my name is syed ,and i am from bihar</p>
      <span class="text-sm font-normal">Delivered</span>
   </div>
</div>


<div class="flex items-start gap-2.5">
<div className="friend-avatar w-10 h-10 flex bg-blue-600 rounded-full ml-1">
  /</div>
   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-blue-500 rounded-e-xl rounded-es-xl">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="text-sm font-semibold">Syed</span>
         <span className="text-sm font-normal">11:46</span>
      </div>
      <p class="text-sm font-normal py-2.5">hey my name is syed ,and i am from bihar</p>
      <span class="text-sm font-normal">Delivered</span>
   </div>
</div>

<div class="flex flex-row-reverse gap-2.5 ">
<div className="friend-avatar w-10 h-10 flex bg-blue-600 rounded-full mr-1">
  /</div>
   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-500 rounded-s-xl rounded-br-xl dark:bg-gray-700">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="text-sm font-semibold">Syed</span>
         <span className="text-sm font-normal">11:46</span>
      </div>
      <p class="text-sm font-normal py-2.5">hey my name is syed ,and i am from bihar</p>
      <span class="text-sm font-normal">Delivered</span>
   </div>
</div>

</div>

<div class="flex gap-5 ml-12 items-center border-b border-gray-300 py-2 absolute bottom-0 w-5/6">
  <input type="text" placeholder="Type your message..." class=" px-4 py-2 bg-gray-100 focus:outline-none w-full"></input>
  <a href="#" className="text-blue-600 hover:text-blue-300">
  <FaRegSmile size={20}/>
  </a>
  <a href="#"className="text-blue-600 hover:text-blue-300">
  <FaTag size={20}/>
  </a>
  <a href="#" className="text-blue-600 hover:text-blue-300">
  <GrGallery size={20}/>
  </a>
  <a href="#" className="text-blue-600 hover:text-blue-300 ">
  <IoSend size={20}/>
  </a>
</div>
      </div>
      </div>
    </div>
  );
};

export default Chat;
