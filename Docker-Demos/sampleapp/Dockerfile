# FROM node:20
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . ./
# RUN npm run build
# CMD ["node", "dist/main"]

FROM node:20 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20
WORKDIR /app
COPY --from=build-stage /app/package*.json ./
COPY --from=build-stage /app/dist ./dist
# COPY --from=build-stage /app/node_modules ./node_modules
RUN npm install --production
CMD ["node", "dist/main"]