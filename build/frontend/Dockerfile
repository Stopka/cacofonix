FROM node:20-bullseye AS base
WORKDIR /srv

FROM base AS build
COPY application/package*.json ./
COPY application/yarn.lock ./
RUN yarn install
COPY application/. .
RUN yarn build

FROM base as dev
CMD yarn dev:start

FROM base AS prod
RUN groupadd -g 1001 nodejs
RUN useradd -m -u 1001 -g 1001 nextjs
USER nextjs
WORKDIR /srv
COPY --from=build --chown=nextjs:nodejs /srv/. ./
CMD yarn build && yarn start
