const express = require("express");
const router = express.Router();

const app = express();
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

const server = http.createServer(app);

const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', function (){
        console.log('a user is disconnected');
    })
    socket.on('chat message', function (msg){
        console.log('message reçu' + msg);
        io.emit('chat message', msg);
    })
});

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = router;