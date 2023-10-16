#use current Node.js 20.7
FROM node:latest

#set working directory
WORKDIR /usr/src/app

#copy package.json and package-lock.json
COPY package*.json ./

#install typescript globally
RUN npm install -g typescript

#install dependencies
RUN npm install

#copy source code
COPY . .
