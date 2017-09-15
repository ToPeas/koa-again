FROM node:8.5-alpine

LABEL maintainer topeas<peiqixin@gmail.com>

WORKDIR /usr/app

RUN mkdir -p /usr/app

COPY package.json /usr/app

RUN npm i

COPY . /usr/app

# CMD ['pm2','start','src/index.js']
# CMD ['pm2','start','src/index.js']

CMD ["npm","run","dev"]





