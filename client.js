const net = require("net");

const connect = function () {
    const net = require("net");
    const conn = net.createConnection({
      host: '165.227.47.243',
      port: 50541
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");

    const movement = (input)=> {

        switch(input){
            case "w":
                setInterval(()=>{
                    conn.write("Move: up")
                }, 50);
            break;
            case "a":
                setInterval(()=>{
                    conn.write("Move: left")
                }, 50);
            break;
            case "s":
                setInterval(()=>{
                    conn.write("Move: down")
                }, 50);
            break;
            case "d":
                setInterval(()=>{
                    conn.write("Move: right")
                }, 50);
            break;
        }
    }

  
    conn.on("data",(data)=>{
        console.log("Response from Server:", data)
    })

    conn.on("connect",()=>{
        console.log("Successfully connected to game server");
        conn.write("Name: ^-^")
 
        
    })
    
    console.log("Connecting ...");
    return conn;
};

module.exports = {
    connect: connect,
    message: "Yo"
}
