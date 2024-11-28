import { Server } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  if (req.method === "GET") {
    const io = new Server(res.socket.server);
    io.on("connection", (socket) => {
      console.log("New connection:", socket.id);

      // Listen for messages from the client
      socket.on("chatMessage", (message) => {
        console.log("Received message:", message);
        // Emit the message to all connected clients
        io.emit("chatMessage", message);
      });

      // Handle disconnection
      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });

    res.end();
  } else {
    res.status(405).send("Method Not Allowed");
  }
};