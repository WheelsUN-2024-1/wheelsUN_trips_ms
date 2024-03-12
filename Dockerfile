# Usar la imagen oficial de Node.js LTS como base
FROM node:lts-alpine

# Establecer el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copiar los archivos de la aplicación
COPY package.json package-lock.json .env ./
COPY tsconfig.json ./
COPY src ./src


RUN npm install 
RUN npm install nodemon 
RUN npm install -D 
RUN npm install -g ts-node



# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3002

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]