# Stage 1
FROM node:13-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.19-alpine

COPY --from=node /usr/src/app/dist/youtube /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
