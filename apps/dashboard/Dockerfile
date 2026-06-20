FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./
COPY tsconfig.base.json ./
COPY turbo.json ./

COPY apps/dashboard/package*.json ./apps/dashboard/
COPY packages/types/package*.json ./packages/types/
COPY packages/validation/package*.json ./packages/validation/
COPY packages/ui/package*.json ./packages/ui/
COPY packages/utils/package*.json ./packages/utils/
COPY packages/constants/package*.json ./packages/constants/
COPY packages/hooks/package*.json ./packages/hooks/
COPY packages/config/package*.json ./packages/config/

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build --workspace=dashboard

EXPOSE 3000

CMD ["npm", "run", "start", "--workspace=dashboard"]
