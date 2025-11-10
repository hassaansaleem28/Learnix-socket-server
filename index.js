import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("notification", (data) => {
    io.emit("newNotification", data);
  });

  socket.on("disconnect", () => {
    console.log(" Socket disconnected:", socket.id);
  });
});

httpServer.listen(5050, () => {
  console.log(" Socket.IO server running on port 5050");
});
