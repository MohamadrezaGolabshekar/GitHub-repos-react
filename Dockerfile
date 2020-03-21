FROM node:12.2.0-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN npm i -g serve

RUN npm i

COPY . .

RUN npm run build
RUN rm -rf node_modules
RUN rm -rf src public

CMD serve -s build