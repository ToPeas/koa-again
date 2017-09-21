FROM node:8.5-alpine

LABEL maintainer topeas<peiqixin@gmail.com>

WORKDIR /usr/app

RUN mkdir -p /usr/app

COPY package.json /usr/app

RUN npm config set registry https://registry.npm.taobao.org

# RUN npm i -g yarn && yarn 
RUN npm install

COPY . /usr/app

# CMD ["yarn","run","start"]

CMD ["npm", "run", "start"]
