FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

#installer les dependances 

RUN npm ci

# copier le reste du code 

COPY . .

#exposer le port 

EXPOSE 3000

#commande pour demarer l'application

CMD ["npm","start"]
