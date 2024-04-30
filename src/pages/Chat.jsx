import React from "react";

const Chat = () => {
  return (
    <div className="bg-[#7fb2f3] w-full h-[100vh] flex flex-row">
      <div className="left rounded-s-2xl mx-2 mt-2 mb-2 mr-0 bg-[#536dfe] w-2/5 flex flex-col">
        <div className="topBar flex flex-row w-full justify-between items-center p-2 h-[10%] border-b-2 border-b-white"></div>
        <div className="friendsList w-full h-[90%] flex flex-col">
          <div className="friend w-full h-16 flex flex-row items-center p-2 border-b-2 border-b-red-200">
            <div className="icon w-[60px] h-full flex justify-center items-center rounded-full bg-white">
              {/* <img src="" alt="icon" /> */}
            </div>
            <div className="name w-full h-full flex flex-col justify-center ml-6">
              <p className="text-white text-xl">Friend Name</p>
              <p className="text-white text-xs">Last Message</p>
            </div>
            <div className="lastSeen w-1/4 h-full flex flex-row gap-3 justify-center items-center">
              <p className="text-white text-xs">Time</p>
              <div className="status w-2 h-2 rounded-full bg-green-400"></div>
              </div>
          </div>
        </div>
      </div>
      <div className="right rounded-e-2xl mr-2 mt-2 mb-2 mx-0 bg-white w-3/5"></div>
    </div>
  );
};

export default Chat;
