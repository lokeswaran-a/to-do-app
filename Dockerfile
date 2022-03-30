FROM node:lts-alpine3.15
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000
CMD ["npm", "start"]