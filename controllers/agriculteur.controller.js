const { Agriculteur, User, Parcelle } = require("../models");


exports.createAgriculteur = async(req,res)=>{

try{

const agriculteur = await Agriculteur.create(req.body);


res.status(201).json(agriculteur);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.getAllAgriculteurs = async(req,res)=>{

try{

const agriculteurs = await Agriculteur.findAll({

include:[

{

model:User,

attributes:["id","nom","email"]

}

]

});


res.json(agriculteurs);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.getAgriculteurById = async(req,res)=>{

try{


const agriculteur = await Agriculteur.findByPk(

req.params.id,

{

include:[

{

model:User,

attributes:["id","nom","email"]

},

Parcelle

]

}

);



if(!agriculteur){

return res.status(404).json({

message:"Agriculteur introuvable"

});

}



res.json(agriculteur);



}catch(error){

res.status(500).json({

message:error.message

});

}

};



exports.getAgriculteurParcelles = async(req,res)=>{

try{


const agriculteur = await Agriculteur.findByPk(

req.params.id,

{

include:[Parcelle]

}

);



if(!agriculteur){

return res.status(404).json({

message:"Agriculteur introuvable"

});

}



res.json(agriculteur.Parcelles);



}catch(error){

res.status(500).json({

message:error.message

});

}

};



exports.updateAgriculteur = async(req,res)=>{

try{


const agriculteur = await Agriculteur.findByPk(req.params.id);



if(!agriculteur){

return res.status(404).json({

message:"Agriculteur introuvable"

});

}



await agriculteur.update(req.body);



res.json(agriculteur);



}catch(error){

res.status(500).json({

message:error.message

});

}

};



exports.deleteAgriculteur = async(req,res)=>{

try{


const agriculteur = await Agriculteur.findByPk(req.params.id);



if(!agriculteur){

return res.status(404).json({

message:"Agriculteur introuvable"

});

}



await agriculteur.destroy();



res.json({

message:"Agriculteur supprimé"

});



}catch(error){

res.status(500).json({

message:error.message

});

}

};