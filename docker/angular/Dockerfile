FROM node:alpine

WORKDIR /var/www/client

COPY ./client/package.json ./var/www/client

RUN npm install

RUN npm install -g @angular/cli


EXPOSE 4200
CMD["npm", "start"]
