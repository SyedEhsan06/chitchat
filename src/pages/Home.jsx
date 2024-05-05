import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth, googleProvider } from "../firebase/firebase";
import { io } from "socket.io-client"; // Import io from socket.io-client
import { useNavigate } from "react-router";
import axios from "axios";


const SignInButton = ({ onClick, loading }) => (
  <button
    onClick={onClick}
    disabled={loading}
    className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
  >
    <FaGoogle className="mr-2" />
    {loading ? "Signing in..." : "Sign in with Google"}
  </button>
);

const socket = io("http://localhost:3001", {
  transports: ["websocket"],
});

const Home = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [roomId, setRoomId] = useState(null); // State to hold Room ID
  const [roomPassword, setRoomPassword] = useState(null); // State to hold Room Password
  const navigate = useNavigate();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("connect");
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
      if (error.code === "auth/popup-closed-by-user") {
        alert("Popup closed by user");
      }
    } finally {
      setLoading(false);
    }
  };

  const joinRoom = (e) => {
    e.preventDefault();
    // Access the input values from the form and save them to state
    const newRoomId = e.target[0].value;
    const newRoomPassword = e.target[1].value;
    setRoomId(newRoomId);
    setRoomPassword(newRoomPassword);

    // Emit a 'join-room' event to the server with room details
    if (roomId) {
      socket.emit("join room", roomId);
    }
    // Now you can use roomId and roomPassword in your logic
    console.log("Room ID:", roomId);
    console.log("Room Password:", roomPassword);
  };

  if (user) {
    const createUser = async () => {
      let res = await axios.post("http://localhost:3001/create", {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      console.log(res.data);
    };
    createUser();
    navigate("/chat");
    // return (
    //   <div className="flex flex-col items-center justify-center h-screen">
    //     <div className="p-4 bg-gray-200 rounded-md">
    //       <h2 className="text-xl font-semibold mb-2">Join Room</h2>
    //       <form className="flex flex-col space-y-4" onSubmit={joinRoom}>
    //         <input
    //           type="text"
    //           placeholder="Room ID"
    //           className="border rounded-md px-3 py-2"
    //         />
    //         <input
    //           type="password"
    //           placeholder="Room Password"
    //           className="border rounded-md px-3 py-2"
    //         />
    //         <button
    //           type="submit"
    //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
    //         >
    //           Join Room
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // );
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
        <SignInButton onClick={signInWithGoogle} loading={loading} />
      </div>
    );
  }
};

export default Home;
