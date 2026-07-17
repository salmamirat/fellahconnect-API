const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Role } = require("../models");


exports.register = async(req,res)=>{

try{


const {
nom,
email,
password,
roleId
}=req.body;



const existUser = await User.findOne({

where:{
email
}

});



if(existUser){

return res.status(400).json({

message:"Email existe déjà"

});

}



const hashedPassword = await bcrypt.hash(password,10);



const user = await User.create({

nom,
email,
password:hashedPassword,
roleId

});



res.status(201).json({

message:"Utilisateur créé",

user:{

id:user.id,
nom:user.nom,
email:user.email

}

});



}catch(error){

res.status(500).json({

message:error.message

});

}

};




exports.login = async(req,res)=>{

try{


const {
email,
password
}=req.body;



const user = await User.findOne({

where:{
email
},

include:[

{

model:Role

}

]

});



if(!user){

return res.status(401).json({

message:"Email incorrect"

});

}



const validPassword = await bcrypt.compare(

password,

user.password

);



if(!validPassword){

return res.status(401).json({

message:"Mot de passe incorrect"

});

}



const token = jwt.sign(

{

id:user.id,

role:user.Role.nom

},

process.env.JWT_SECRET,

{

expiresIn:"1d"

}

);



res.json({

token,

user:{

id:user.id,

nom:user.nom,

email:user.email,

role:user.Role.nom

}

});



}catch(error){

res.status(500).json({

message:error.message

});

}

};