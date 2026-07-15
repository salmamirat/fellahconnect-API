const User = require("./User");
const Role = require("./Role");
const Agriculteur = require("./Agriculteur");
const Parcelle = require("./Parcelle");
const Produit = require("./Produit");
const Recolte = require("./Recolte");
const Marche = require("./Marche");
const PrixMarche = require("./PrixMarche");
const OffreVente = require("./OffreVente");


Role.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(Role, { foreignKey: "roleId" });


User.hasOne(Agriculteur, { foreignKey: "userId" });
Agriculteur.belongsTo(User, { foreignKey: "userId" });


Agriculteur.hasMany(Parcelle, { foreignKey: "agriculteurId" });
Parcelle.belongsTo(Agriculteur, { foreignKey: "agriculteurId" });


Parcelle.hasMany(Recolte, { foreignKey: "parcelleId" });
Recolte.belongsTo(Parcelle, { foreignKey: "parcelleId" });


Produit.hasMany(Recolte, { foreignKey: "produitId" });
Recolte.belongsTo(Produit, { foreignKey: "produitId" });


Produit.hasMany(PrixMarche, { foreignKey: "produitId" });
PrixMarche.belongsTo(Produit, { foreignKey: "produitId" });


Marche.hasMany(PrixMarche, { foreignKey: "marcheId" });
PrixMarche.belongsTo(Marche, { foreignKey: "marcheId" });


Recolte.hasMany(OffreVente, { foreignKey: "recolteId" });
OffreVente.belongsTo(Recolte, { foreignKey: "recolteId" });

module.exports = {
  User,
  Role,
  Agriculteur,
  Produit,
  Parcelle,
  Recolte,
  Marche,
  PrixMarche,
  OffreVente,
};