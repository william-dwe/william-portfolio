# import base image
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat

###########################
########## LOCAL ##########
###########################

# import devcontainer image
FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bookworm AS local
RUN echo "[FE] Done init service in local"
CMD sleep infinity

###########################
####### DEVELOPMENT #######
###########################

# install dependency, only when needed
FROM base AS dev_deps
COPY package.json package-lock.json ./
RUN npm install

# runner - development
FROM base AS dev
ENV NODE_ENV development

COPY /public ./public
COPY --from=dev_deps ./node_modules ./node_modules
COPY . .

ENV PORT 3000
EXPOSE ${PORT}

RUN echo "[FE] Done init service in dev"

CMD npm run dev

###########################
####### PRODUCTION ########
###########################

# install dependency, only when needed
FROM base AS prod_deps
COPY package.json package-lock.json ./
RUN npm install --silent --production

# build image, only when needed
FROM base AS builder
COPY --from=prod_deps ./node_modules ./node_modules
COPY . .
RUN npm run build

# runner - production
FROM base AS prod
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs .next/standalone ./
COPY --from=builder --chown=nextjs:nodejs .next/static ./.next/static

USER nextjs

ENV HOSTNAME 0.0.0.0
ENV PORT 3000
EXPOSE ${PORT}

RUN echo "[FE] Done init service in prod"

CMD node server.js


