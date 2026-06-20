FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./
COPY tsconfig.base.json ./
COPY turbo.json ./

COPY apps/mobile/package*.json ./apps/mobile/

RUN npm ci --legacy-peer-deps

COPY . .

EXPOSE 8081

CMD ["npm", "run", "web", "--workspace=mobile"]
