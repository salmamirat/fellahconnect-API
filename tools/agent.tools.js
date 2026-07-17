const prixService = require("../services/prixMarche.service");

exports.getPrixProduit = async (nomProduit)=>{

    return await prixService.findByNom(nomProduit);

}