#This Dockerfile currently only exposes port 4200 via Docker. If the website is integrated with a server in the future, the processes will continue from this point

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
