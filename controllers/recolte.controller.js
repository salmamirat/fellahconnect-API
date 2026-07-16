const { Recolte, Parcelle, Produit } = require("../models");


exports.createRecolte = async(req,res)=>{

try{

const recolte = await Recolte.create(req.body);

res.status(201).json(recolte);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.getAllRecoltes = async(req,res)=>{

try{

const recoltes = await Recolte.findAll({
include:[
Parcelle,
Produit
]
});


res.json(recoltes);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.getRecolteById = async(req,res)=>{

try{

const recolte = await Recolte.findByPk(
req.params.id,
{
include:[
Parcelle,
Produit
]
}
);


if(!recolte){

return res.status(404).json({
message:"Récolte introuvable"
});

}


res.json(recolte);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.updateRecolte = async(req,res)=>{

try{

const recolte = await Recolte.findByPk(req.params.id);


if(!recolte){

return res.status(404).json({
message:"Introuvable"
});

}


await recolte.update(req.body);


res.json(recolte);


}catch(error){

res.status(500).json({
message:error.message
});

}

};



exports.deleteRecolte = async(req,res)=>{

try{

const recolte = await Recolte.findByPk(req.params.id);


if(!recolte){

return res.status(404).json({
message:"Introuvable"
});

}


await recolte.destroy();


res.json({
message:"Récolte supprimée"
});


}catch(error){

res.status(500).json({
message:error.message
});

}

};