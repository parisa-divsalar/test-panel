FROM node:18-alpine as build

COPY .npmrc /root/.npmrc
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN yarn install --silent --network-timeout 1000000

COPY . ./
RUN yarn build

ENTRYPOINT [ "yarn", "start" ]
