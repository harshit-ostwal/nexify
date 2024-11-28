"use client"
import { useEffect, useState } from "react";
import io from "socket.io-client";

const Chat = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const socketConnection = io();

        setSocket(socketConnection);

        socketConnection.on("chatMessage", (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        return () => {
            socketConnection.disconnect();
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (message.trim()) {
            socket.emit("chatMessage", message);
            setMessage("");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
            <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">Real-Time Chat</h1>
                <div className="p-4 mt-4 overflow-y-scroll border-b-2 messages h-72">
                    {messages.map((msg, index) => (
                        <div key={index} className="p-2 mb-2 bg-gray-100 rounded-lg message">
                            {msg}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
                    <input
                        type="text"
                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button
                        type="submit"
                        className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;