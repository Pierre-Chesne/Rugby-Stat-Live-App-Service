FROM node:14.17.6
ENV NODE_ENV=test
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "node", "app.js" ]
EXPOSE 5500