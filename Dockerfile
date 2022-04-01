FROM node:lts-alpine3.15
WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY . /app/
EXPOSE 3000
CMD ["yarn", "start"]