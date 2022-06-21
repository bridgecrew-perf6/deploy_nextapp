FROM node:17

WORKDIR /usr/local/app

COPY  package*.json .

RUN npm install

COPY . .

RUN yarn build  

RUN echo HAPPY_CODE

EXPOSE 3000

CMD ["sh","-c","yarn start"]
