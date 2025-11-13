FROM node:20 AS builder
WORKDIR /flying_ship
COPY ./client ./client
RUN cd client && npm ci && npm run build

FROM node:20
WORKDIR /flying_ship/server
COPY ./server/package*.json ./
RUN  npm ci --omit=dev
COPY ./server ./

# copy build client files
COPY --from=builder /flying_ship/client/dist ./dist
EXPOSE 3005
CMD [ "node", "index.js" ]