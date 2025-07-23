FROM node:22-alpine AS build_image
WORKDIR /app
ENV VITE_CACHE_DIR=/app/.vite_cache

COPY package.json yarn.lock ./
RUN mkdir -p $VITE_CACHE_DIR
RUN yarn
COPY . .
RUN yarn build

FROM node:22-alpine AS production_image
WORKDIR /app

COPY --from=build_image /app/dist/ /app/dist/
COPY --from=build_image /app/node_modules/ /app/node_modules/
COPY package.json yarn.lock vite.config.js ./

EXPOSE 3000

CMD ["yarn", "preview"]
