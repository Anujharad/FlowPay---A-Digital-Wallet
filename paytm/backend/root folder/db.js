const mongoose = require('mongoose');
 mongoose.connect("mongodb+srv://anuj123:09876anuj@cluster0.8xivp.mongodb.net/User");

 const userSchema= mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
 });
  const User = mongoose.model("User",userSchema);
   module.exports= {
    User
   }

   