# FellahConnect API 🌾

API REST pour connecter les agriculteurs marocains aux marchés, gérer les récoltes et obtenir des conseils via un agent IA.

## 🏗️ Architecture

```
fellahconnect-API/
├── config/           # Configuration (DB, JWT)
├── controllers/      # Contrôleurs HTTP
├── middlewares/       # Auth, validation, erreurs, logs
├── migrations/        # Migrations Sequelize
├── models/            # Modèles Sequelize (ORM)
├── routes/            # Définition des routes Express
├── seeders/           # Données de démonstration
├── services/          # Logique métier
├── validators/        # Validation des requêtes
├── utils/             # Helpers et réponses standardisées
├── tools/             # Outils pour l'agent IA (function calling)
├── Prompt/            # System prompt de l'agent IA
├── app.js             # Configuration Express
└── server.js          # Point d'entrée du serveur
```

## 🚀 Installation

### Prérequis
- **Node.js** >= 18
- **PostgreSQL** >= 14
- **npm** ou **yarn**

### Étapes

```bash
# 1. Cloner le projet
git clone https://github.com/salmamirat/fellahconnect-API.git
cd fellahconnect-API

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp .env.example .env
# Modifier .env avec vos paramètres de base de données

# 4. Exécuter les migrations
npx sequelize-cli db:migrate

# 5. Insérer les données de démonstration
npx sequelize-cli db:seed:all

# 6. Lancer le serveur
npm run dev
```

## 🔧 Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `PORT` | Port du serveur | `3000` |
| `NODE_ENV` | Environnement | `development` |
| `DB_HOST` | Hôte PostgreSQL | `127.0.0.1` |
| `DB_PORT` | Port PostgreSQL | `5433` |
| `DB_NAME` | Nom de la base | `database_development` |
| `DB_USER` | Utilisateur DB | `postgres` |
| `DB_PASSWORD` | Mot de passe DB | `password` |
| `JWT_SECRET` | Clé secrète JWT | `fellahconnect_jwt_secret` |
| `JWT_EXPIRES_IN` | Expiration JWT | `24h` |
| `OPENAI_API_KEY` | Clé API OpenAI | — |

## 📡 Endpoints API

### Auth
| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| `POST` | `/auth/register` | Inscription | ❌ |
| `POST` | `/auth/login` | Connexion | ❌ |

### Agriculteurs
| Méthode | Route | Description | Rôle |
|---------|-------|-------------|------|
| `POST` | `/agriculteurs` | Créer | Admin |
| `GET` | `/agriculteurs` | Lister tous | Auth |
| `GET` | `/agriculteurs/:id` | Détails | Auth |
| `GET` | `/agriculteurs/:id/parcelles` | Parcelles d'un agriculteur | Auth |
| `PUT` | `/agriculteurs/:id` | Modifier | Admin |
| `DELETE` | `/agriculteurs/:id` | Supprimer | Admin |

### Parcelles
| Méthode | Route | Description | Rôle |
|---------|-------|-------------|------|
| `POST` | `/parcelles` | Créer | Admin, Farmer |
| `GET` | `/parcelles` | Lister toutes | Auth |
| `GET` | `/parcelles/:id` | Détails | Auth |
| `PUT` | `/parcelles/:id` | Modifier | Admin, Farmer |
| `DELETE` | `/parcelles/:id` | Supprimer | Admin |

### Produits
| Méthode | Route | Description | Rôle |
|---------|-------|-------------|------|
| `POST` | `/produits` | Créer | Admin |
| `GET` | `/produits` | Lister tous | Auth |
| `GET` | `/produits/:id` | Détails | Auth |
| `GET` | `/produits/:id/best-price` | Meilleur prix | Auth |
| `PUT` | `/produits/:id` | Modifier | Admin |
| `DELETE` | `/produits/:id` | Supprimer | Admin |

### Récoltes
| Méthode | Route | Description | Rôle |
|---------|-------|-------------|------|
| `POST` | `/recoltes` | Créer | Admin, Farmer |
| `GET` | `/recoltes` | Lister toutes | Auth |
| `GET` | `/recoltes/:id` | Détails | Auth |
| `PUT` | `/recoltes/:id` | Modifier | Admin, Farmer |
| `DELETE` | `/recoltes/:id` | Supprimer | Admin |

### Marchés
| Méthode | Route | Description | Rôle |
|---------|-------|-------------|------|
| `POST` | `/marches` | Créer | Admin |
| `GET` | `/marches` | Lister tous | Auth |
| `GET` | `/marches/:id` | Détails | Auth |
| `PUT` | `/marches/:id` | Modifier | Admin |
| `DELETE` | `/marches/:id` | Supprimer | Admin |

### Prix Marchés
| Méthode | Route | Description | Rôle |
|---------|-------|-------------|------|
| `POST` | `/prix-marches` | Créer | Admin |
| `GET` | `/prix-marches` | Lister tous | Auth |
| `GET` | `/prix-marches/:id` | Détails | Auth |
| `PUT` | `/prix-marches/:id` | Modifier | Admin |
| `DELETE` | `/prix-marches/:id` | Supprimer | Admin |

### Offres de Vente
| Méthode | Route | Description | Rôle |
|---------|-------|-------------|------|
| `POST` | `/offres-vente` | Créer | Admin, Farmer |
| `GET` | `/offres-vente` | Lister toutes | Auth |
| `GET` | `/offres-vente/:id` | Détails | Auth |
| `PUT` | `/offres-vente/:id` | Modifier | Admin, Farmer |
| `DELETE` | `/offres-vente/:id` | Supprimer | Admin |

### Agent IA
| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| `POST` | `/agent` | Chat avec l'IA | ❌ |

## 🤖 Agent IA

L'agent IA utilise l'API OpenAI avec **function calling** pour interroger la base de données en temps réel. Les outils disponibles :

- `get_prix_produit` — Recherche des prix par nom de produit
- `get_all_produits` — Liste tous les produits
- `get_all_marches` — Liste tous les marchés
- `get_meilleur_prix` — Trouve le meilleur prix pour un produit
- `get_recoltes` — Liste toutes les récoltes

### Exemple

```bash
curl -X POST http://localhost:3000/agent \
  -H "Content-Type: application/json" \
  -d '{"message": "Quel est le prix de la tomate?"}'
```

## 🐳 Docker

```bash
docker-compose up -d
```

## 📄 License

ISC
