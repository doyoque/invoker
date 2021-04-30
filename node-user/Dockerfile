FROM node:12-alpine

WORKDIR /home/node/app

COPY app /home/node/app

RUN npm ci --only=production

CMD ["npm", "run", "app"]
