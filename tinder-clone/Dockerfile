#from base image node
FROM node:lts-alpine3.12 as builder

WORKDIR '/usr/app'

#copy package.json
COPY ./package.json ./

#install packages
RUN npm install 

COPY ./ ./

RUN npm run build
# /app/build 에 소스코드 담긴다.

#second block - nginx
FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html