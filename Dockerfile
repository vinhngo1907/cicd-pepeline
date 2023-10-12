FROM node:14

# Create app directory
WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]