// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

const handleUserInput = function (input) {
   
    const move = (movement)=>{

        setTimeout(()=>{
            connection.write(`Move: ${movement}`)
         }, 10);
    }

    switch(input){
        case "w":
            move("up");
            break;
        case "a":
            move("left");
            break;
        case "s":
            move("down");
            break;
        case "d":
            move("right");
            break;
    }

};

module.exports = { setupInput }
