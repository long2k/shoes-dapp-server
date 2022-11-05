FROM node:18.7.0

WORKDIR /shoeapp


COPY package.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 5500
CMD [ "nodemon", "index.js" ]