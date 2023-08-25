FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY package*.json ./

RUN npm ci
COPY --chown=node:node . . 
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
