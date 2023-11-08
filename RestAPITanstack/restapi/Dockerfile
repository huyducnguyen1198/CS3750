#use an offical Node.js
FROM node:latest

#set working directory
WORKDIR /usr/src/app

#copy package.json and package-lock.json
COPY package*.json ./

#install dependencies
RUN npm install

#copy app source code
COPY . .

#compile typescript
RUN npm run build

RUN npx prisma generate
#command to run when container starts
#CMD ["npm", "start"]
CMD sh -c "npx prisma migrate deploy & npx prisma studio & npm start "
