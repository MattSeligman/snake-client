const { IP, PORT } = require("./constants");

const connect = function () {
    const net = require("net");
    const conn = net.createConnection({
      host: IP,
      port: PORT
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    conn.on("data",(data)=>{
        console.log("Response from Server:", data)
    })

    conn.on("connect",()=>{
        console.log("Successfully connected to game server");
        conn.write("Name: ^-^") 
    })

    conn.on("error",()=>{
        console.log("Event has crashed"); 
    })
    
    console.log("Connecting ...");
    return conn;
};

module.exports = {
    connect
}
