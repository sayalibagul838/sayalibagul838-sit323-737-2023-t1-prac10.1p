FROM node:18.15.0
WORKDIR H:\Deakin\SIT737_Cloud\programs\pass_task 
COPY package*.json app.js ./
RUN npm install
EXPOSE 3000

HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1

CMD ["node", "app.js"]