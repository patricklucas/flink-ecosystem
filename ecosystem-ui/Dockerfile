FROM node:10 AS base
RUN mkdir /home/node/app
WORKDIR /home/node/app

FROM base AS build
COPY . .
RUN npm install
RUN npm run build

FROM base
COPY --from=build /home/node/app/dist ./dist
COPY package.json package-lock.json fake-server.js ./
ENV NODE_ENV production
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "server"]
