FROM node:8.5

LABEL maintainer topeas<peiqixin@gmail.com>

WORKDIR /usr/app

RUN mkdir -p /usr/app

COPY package.json /usr/app

RUN npm i -g yarn && yarn 

COPY . /usr/app

CMD ["yarn","run","start"]





