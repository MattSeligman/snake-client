const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

const handleUserInput = function (input) {
    
    if(input === "w"){
        setTimeout(()=>{
            this.write("Move: up")
        }, 50);
    } else{
        return
    }

};

module.exports = { setupInput }
