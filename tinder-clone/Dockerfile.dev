# from base image node
FROM node:lts-alpine3.12

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

#copy package.json
COPY ./package*.json ./

#install packages
RUN npm install --silent


COPY ./ ./

# EXPOSE 명령은 해당 컨테이너가 런타임에 지정된 네트워크 포트에서 수신 대기중 이라는것을 알려줍니다, 일반적으로 dockerfile을 작성하는 사람과 컨테이너를 직접 실행할 사람 사이에서 공개할 포트를 알려주기 위해 문서 유형으로 작성할 때 사용 됩니다.
# 이 명령 자체가 작성된 포트를 실행하여 listening 상태로 올려주거나 하지는 않기 때문에, 실제로 포트를 열기 위해선 container run 에서 -p 옵션을 사용해야 합니다. 
#컨테이너의 3000포트를 host에게 open
#ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "start"]

#docker run -p 3000:3000 -it syc1013/tinder-clone