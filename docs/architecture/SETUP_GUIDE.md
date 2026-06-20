# TRIPOLI PULSE AI
# PROJECT BOOTSTRAP & SETUP GUIDE
# VERSION 1.0

---

# PURPOSE

This document defines how the project must be initialized.

This document ONLY covers:

- Project setup
- Folder structure
- Dependencies
- Configurations
- Infrastructure
- Development tooling

No business functionality should be implemented.

No pages should be built.

No feature logic should be added.

At the end of this setup, the project should be fully bootstrapped and ready for development.

---

# GENERAL PRINCIPLES

Goals:

- Monorepo architecture
- Fully typed codebase
- Scalable structure
- Shared packages
- Fast local development
- Dockerized infrastructure
- Production-ready foundation

Everything must use TypeScript.

Never introduce JavaScript.

---

# REQUIRED VERSIONS

Node.js: >=22 LTS

Package Manager:
pnpm latest

React Native:
Expo SDK 54

TypeScript:
latest stable

PostgreSQL:
17

Redis:
latest stable

Docker:
latest stable

Docker Compose:
latest stable

---

# MONOREPO

Use Turborepo.

Project Structure:

apps/
    web/
    mobile/
    api/

packages/
    ui/
    types/
    validation/
    utils/
    config/
    constants/
    hooks/

docs/
    architecture/
    database/
    api/

scripts/

.github/

---

# INITIALIZATION STEPS

## Step 1

Create repository.

Initialize git.

Initialize pnpm.

Initialize Turborepo.

---

## Step 2

Create apps:

apps/web
apps/mobile
apps/api

---

## Step 3

Create shared packages:

packages/ui
packages/types
packages/validation
packages/utils
packages/config
packages/constants
packages/hooks

---

## Step 4

Configure workspace:

pnpm-workspace.yaml

turbo.json

tsconfig.base.json

---

# TYPESCRIPT

Enable strict mode.

Required:

strict=true

noImplicitAny=true

strictNullChecks=true

noUncheckedIndexedAccess=true

exactOptionalPropertyTypes=true

useUnknownInCatchVariables=true

Never disable strict mode.

Never use:

skipLibCheck=true
any

---

# SHARED TYPES PACKAGE

packages/types

Purpose:

Shared DTOs
API responses
Enums
Interfaces
Database-independent types

Examples:

User
Role
Report
Notification
Prediction
Route
Coordinates
PaginatedResponse

No implementation logic.

Types only.

---

# SHARED VALIDATION PACKAGE

packages/validation

Purpose:

Zod schemas.

Examples:

Auth schemas
Report schemas
Profile schemas
Settings schemas

Never duplicate validation logic.

Frontend and backend must share schemas.

---

# SHARED UI PACKAGE

packages/ui

Purpose:

Reusable design system.

Contains:

Buttons
Cards
Inputs
Dialogs
Badges
Tables
Charts
Loading components
Empty states

No business logic.

Presentation only.

---

# SHARED CONFIG PACKAGE

packages/config

Purpose:

ESLint
Prettier
TypeScript
Tailwind presets
Environment definitions

---

# WEB APPLICATION

Framework:

Next.js latest App Router.

Language:

TypeScript only.

Directory:

apps/web

---

# WEB DEPENDENCIES

Core:

react
react-dom
next

Styling:

tailwindcss
tailwind-merge
class-variance-authority
clsx

UI:

shadcn/ui
lucide-react

State:

zustand
@tanstack/react-query

Forms:

react-hook-form
zod
@hookform/resolvers

Animations:

framer-motion

Maps:

maplibre-gl
react-map-gl
deck.gl

Charts:

recharts

Tables:

@tanstack/react-table

Utilities:

date-fns
react-use

Developer:

typescript
eslint
prettier

---

# NEXTJS STRUCTURE

src/

app/
components/
features/
hooks/
providers/
stores/
services/
lib/
constants/
types/

---

# MOBILE APPLICATION

Framework:

React Native
Expo SDK 54

Directory:

apps/mobile

---

# MOBILE DEPENDENCIES

Core:

expo
react-native
expo-router

Navigation:

expo-router

State:

zustand
@tanstack/react-query

Forms:

react-hook-form
zod
@hookform/resolvers

Maps:

react-native-maps

Location:

expo-location

Camera:

expo-camera
expo-image-picker

Notifications:

expo-notifications

Storage:

expo-secure-store

Networking:

axios

Utilities:

date-fns

Icons:

@expo/vector-icons

Animations:

react-native-reanimated
react-native-gesture-handler
moti

Developer:

typescript
eslint
prettier

---

# MOBILE STRUCTURE

app/
components/
features/
hooks/
providers/
stores/
services/
lib/
constants/
types/

assets/

---

# BACKEND

Framework:

NestJS

Directory:

apps/api

Language:

TypeScript only.

---

# BACKEND DEPENDENCIES

Core:

@nestjs/common
@nestjs/core
@nestjs/platform-express

Configuration:

@nestjs/config

Validation:

class-validator
class-transformer

Authentication:

passport
passport-jwt
bcrypt
jsonwebtoken

Documentation:

@nestjs/swagger

Database:

prisma
@prisma/client

Queues:

bullmq
@nestjs/bullmq

Caching:

redis
ioredis

Storage:

cloudinary

HTTP:

axios

Scheduling:

@nestjs/schedule

Logging:

nestjs-pino
pino
pino-pretty

Utilities:

date-fns
uuid

Developer:

typescript
eslint
prettier

---

# BACKEND STRUCTURE

src/

main.ts
app.module.ts

modules/
common/
config/
database/
guards/
decorators/
interceptors/
middlewares/
filters/
pipes/
jobs/
utils/

---

# MODULES TO CREATE

auth
users
roles
permissions
reports
maps
neighborhoods
notifications
analytics
predictions
recommendations
vision
ai
payments
campaigns
admin
files
settings

Create modules only.

No functionality.

No controllers.

No services.

No business logic.

---

# DATABASE

Database:

PostgreSQL 17

Extensions:

PostGIS
pgvector

No MongoDB.

No SQLite.

---

# PRISMA

Initialize Prisma.

Configure PostgreSQL.

Enable extensions:

PostGIS
pgvector

Create:

schema.prisma

No models yet.

Only datasource and generator.

---

# REDIS

Initialize Redis.

Used for:

queues
caching
background jobs
sessions

No jobs should be implemented.

Only connection setup.

---

# DOCKER

Create:

Dockerfile.web
Dockerfile.mobile
Dockerfile.api

Create:

docker-compose.yml

Services:

postgres
redis

Optional:

pgadmin

Expose:

postgres
redis

Create persistent volumes.

---

# ENVIRONMENT VARIABLES

Create:

.env.example

Applications:

web
mobile
api

Variables:

DATABASE_URL

REDIS_HOST
REDIS_PORT

JWT_SECRET
JWT_REFRESH_SECRET

CLOUDINARY_NAME
CLOUDINARY_KEY
CLOUDINARY_SECRET

OPENSTREETMAP_URL
MAP_TILE_URL

AREEBA_BASE_URL
AREEBA_MERCHANT_ID
AREEBA_API_KEY

OLLAMA_BASE_URL

---

# API CLIENT SETUP

Create:

axios instances.

Web:

api client

Mobile:

api client

No endpoints.

No requests.

No business services.

---

# REACT QUERY

Create:

QueryClientProvider.

Configure:

retry
cache time
stale time

No queries.

---

# ZUSTAND

Create:

empty stores only.

Examples:

authStore
themeStore
appStore

No business state.

---

# THEMING

Create:

Light theme
Dark theme

Default:

Dark mode.

No screens.

No components.

Only configuration.

---

# TAILWIND

Configure:

colors
spacing
typography
radius
animations

No custom CSS files.

No inline styles.

---

# SHADCN

Initialize.

Generate:

button
card
input
dialog
badge
table
tabs
sheet
dropdown-menu
toast
skeleton

Do not modify generated primitives.

---

# ESLINT

Enable:

typescript rules
unused import checks
react rules
react hooks rules

Warnings should be minimal.

Errors should fail builds.

---

# PRETTIER

Configure:

singleQuote
semi
trailingComma
printWidth

Use project-wide formatting.

---

# GIT

Create:

.gitignore

Ignore:

node_modules
dist
build
coverage
.env
.next
.expo
turbo
prisma migrations generated artifacts

---

# GIT HOOKS

Install:

husky
lint-staged

Pre-commit:

lint
typecheck
format

---

# CI

Create GitHub Actions:

Install dependencies
Lint
Typecheck
Build

No deployments.

---

# OPENSTREETMAP SETUP

Configure:

MapLibre
OpenStreetMap tile provider

No map pages.

No map components.

Only initialization.

---

# AI INFRASTRUCTURE

Install only:

ollama client
transformers dependencies
opencv dependencies

No models.

No inference code.

No prompts.

No AI logic.

---

# PAYMENT INFRASTRUCTURE

Create:

payments module.

Environment variables.

Areeba configuration service.

No payment flows.

No checkout implementation.

No endpoints.

---

# SUCCESS CRITERIA

At the end of setup:

✓ Monorepo works

✓ All applications run independently

✓ Shared packages compile

✓ Docker infrastructure runs

✓ PostgreSQL runs

✓ Redis runs

✓ Prisma initializes

✓ PostGIS enabled

✓ pgvector enabled

✓ Environment variables configured

✓ React Query configured

✓ Zustand configured

✓ Tailwind configured

✓ Shadcn configured

✓ Map infrastructure configured

✓ Areeba configuration prepared

✓ AI infrastructure prepared

✓ CI works

✓ Lint passes

✓ Typecheck passes

✓ No functionality implemented

✓ No pages implemented

✓ No business logic implemented

Project status after completion:

"Foundation complete and ready for feature development."