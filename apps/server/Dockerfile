FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./
COPY tsconfig.base.json ./
COPY turbo.json ./

COPY apps/server/package*.json ./apps/server/
COPY packages/types/package*.json ./packages/types/
COPY packages/validation/package*.json ./packages/validation/
COPY packages/constants/package*.json ./packages/constants/
COPY packages/utils/package*.json ./packages/utils/

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build --workspace=server

EXPOSE 3000

CMD ["npm", "run", "start:prod", "--workspace=server"]
