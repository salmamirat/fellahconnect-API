const { PrixMarche, Produit, Marche } = require("../models");


exports.createPrixMarche = async(req,res)=>{

try{

const prix = await PrixMarche.create(req.body);

res.status(201).json(prix);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.getAllPrixMarches = async(req,res)=>{

try{

const prix = await PrixMarche.findAll({
include:[
Produit,
Marche
]
});


res.json(prix);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.getPrixMarcheById = async(req,res)=>{

try{

const prix = await PrixMarche.findByPk(
req.params.id,
{
include:[
Produit,
Marche
]
}
);


if(!prix){

return res.status(404).json({
message:"Prix marché introuvable"
});

}


res.json(prix);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.updatePrixMarche = async(req,res)=>{

try{

const prix = await PrixMarche.findByPk(req.params.id);


if(!prix){

return res.status(404).json({
message:"Introuvable"
});

}


await prix.update(req.body);


res.json(prix);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.deletePrixMarche = async(req,res)=>{

try{

const prix = await PrixMarche.findByPk(req.params.id);


if(!prix){

return res.status(404).json({
message:"Introuvable"
});

}


await prix.destroy();


res.json({
message:"Prix supprimé"
});


}catch(error){

res.status(500).json({
message:error.message
});

}

};