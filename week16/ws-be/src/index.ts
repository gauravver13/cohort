import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });


// event handler:
wss.on("connection", function(socket) {
    // console.log('User connected');
    // socket.send('Hi there!');

    // setInterval(() => {
    //     socket.send('Current price of Solana is:: '+ Math.random());
    // }, 3000)

    // socket.on("message", (e) => {
    //     console.log('EVENT: ', e);
    //     console.log('EVENT: ', e.toString());
    // })

    // socket.send("hello");

    socket.on("message", (e) => {
        console.log('USer send ping')
        if(e.toString() === "ping") {
            socket.send("pong");
            // socket.emit("pong"); 
        }
    })
})
