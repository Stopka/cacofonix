FROM node:20-bullseye as base
WORKDIR /home/node/app
ENV NODE_ENV=production
COPY package*.json  ./

FROM base as dev
ENV NODE_ENV=development
CMD ["yarn", "dev:start"]


FROM base as builder
COPY ./* ./
RUN yarn install
RUN yarn build

FROM base as prod
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build
EXPOSE 3000
CMD ["node", "dist/server.js"]
