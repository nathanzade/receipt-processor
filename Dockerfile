FROM node:18

WORKDIR ./

COPY package*.json ./
RUN npm install

COPY src ./src

EXPOSE 3000

CMD ["node", "src/app/app.js"]
