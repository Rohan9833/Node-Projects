// const app = require("./src/app");
const app = require("./src/projectapp");
const DB = require("./src/db/db");
port = 4000;


DB();
app.listen(port,()=>{
    console.log(`your server is running on  localhost:${port} `)
})


 