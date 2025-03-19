# Utilisation de l'image Node.js LTS
FROM node:18-alpine

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers du projet
COPY . .

# Exposition du port sur lequel tourne l'API
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "run", "start"]
