const express = require("express");
const app = express();
app.use(express.json());


require("./config/config.json");

  
const sign_in_route = require("./routes/signup_and_login");
app.use("/auth", sign_in_route);


app.listen(6000, () => { 
  console.log("server is running on port 6000");
});










// Name: {
//     type: Sequelize.STRING
//   }
//   Number: {
//     type: Sequelize.INTEGER
//   },
//      Email: {
//     type: Sequelize.STRING
//   },
//   Password: {
//     type: Sequelize.STRING
//   },