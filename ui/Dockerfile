FROM node:22-alpine AS build_image
WORKDIR /app
ENV VITE_CACHE_DIR=/app/.vite_cache

COPY package.json package-lock.json ./
RUN mkdir -p $VITE_CACHE_DIR
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS production_image
WORKDIR /app

COPY --from=build_image /app/dist/ /app/dist/
COPY --from=build_image /app/node_modules/ /app/node_modules/
COPY package.json package-lock.json vite.config.js ./

EXPOSE 6969

CMD ["npm", "run", "preview"]
