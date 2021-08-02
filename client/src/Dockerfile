FROM node:14-alpine

WORKDIR /App

COPY package.json ./

COPY package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
