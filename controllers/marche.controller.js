const { Marche, PrixMarche } = require("../models");


exports.createMarche = async(req,res)=>{

try{

const marche = await Marche.create(req.body);

res.status(201).json(marche);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.getAllMarches = async(req,res)=>{

try{

const marches = await Marche.findAll({
include:[PrixMarche]
});


res.json(marches);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.getMarcheById = async(req,res)=>{

try{

const marche = await Marche.findByPk(
req.params.id,
{
include:[PrixMarche]
}
);


if(!marche){

return res.status(404).json({
message:"Marché introuvable"
});

}


res.json(marche);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.updateMarche = async(req,res)=>{

try{

const marche = await Marche.findByPk(req.params.id);


if(!marche){

return res.status(404).json({
message:"Introuvable"
});

}


await marche.update(req.body);


res.json(marche);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.deleteMarche = async(req,res)=>{

try{

const marche = await Marche.findByPk(req.params.id);


if(!marche){

return res.status(404).json({
message:"Introuvable"
});

}


await marche.destroy();


res.json({
message:"Marché supprimé"
});


}catch(error){

res.status(500).json({
message:error.message
});

}

};