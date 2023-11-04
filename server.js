//console.log("Hello Everyone");
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./Routes/route");
const app = express();
app.use(express.json());

app.use("/", routes);

//DB Connection
mongoose.connect("mongodb+srv://thrisha798:Thrishacs798@cluster0.h9pq1fd.mongodb.net/")

.then(() => {
    console.log("Database is connected successfully");
})
.catch((err) => {
    console.log(err, "something went wrong");
});


//Test API
app.get("/test", (req,res) => {
    res.send("Hello thrisha, This is Test Api");
});

app.listen(5000, ( ) => {
    console.log("Server is Running On Port 5000");
});
