# Dockerfile example taken from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# TODO: (SM) database support https://www.bezkoder.com/docker-compose-nodejs-mysql/
FROM node:10

# Create app directory
WORKDIR /usr/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "src/server.js" ]