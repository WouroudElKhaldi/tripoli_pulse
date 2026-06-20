Purpose: Complete understanding of the project.

# Project Overview
- Project Name
- Vision
- Mission
- Problem Statement
- Goals
- Target Users

# Smart City Problems We Solve
- Infrastructure issues
- Lack of transparency
- Poor citizen engagement
- Lack of city analytics
- Slow issue resolution

# Platform Overview
- Informative Website
- Municipality Dashboard
- Mobile Application

# User Types
- Citizen
- Municipality Employee
- Municipality Manager
- NGO Representative
- System Administrator
- Super Admin

# Core Features
- Authentication
- Reporting System
- Maps
- Analytics
- Notifications
- Campaigns
- Payments
- AI Assistant
- Computer Vision
- Neighborhood Scores
- Predictions
- Recommendations
- Digital Twin
- Companion System

# Technology Stack
Frontend:
- Next.js
- React
- React Native Expo 54

Backend:
- NestJS
- Prisma
- PostgreSQL
- Redis
- BullMQ

Infrastructure:
- Docker
- Cloudinary

AI:
- Ollama
- Gemma
- Mistral
- Llama
- Sentence Transformers
- YOLOv8
- OpenCV

Payments:
- Areeba

# Monorepo Structure

```txt
tripoli-pulse/
├── agents/
│   ├── DECISION_LOG.md
│   ├── IMPLEMENTATION_RULES.md
│   └── MASTER_CONTEXT.md
├── apps/
│
│   ├── dashboard/                     # Municipality Dashboard (Next.js)
│   │   ├── app/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── features/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── stores/
│   │   │   ├── providers/
│   │   │   ├── lib/
│   │   │   ├── constants/
│   │   │   ├── types/
│   │   │   ├── assets/
│   │   │   └── styles/
│   │   ├── public/
│   │   ├── tests/
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│
│   ├── website/                       # Informative Marketing Website
│   │   ├── app/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── sections/
│   │   │   ├── hooks/
│   │   │   ├── providers/
│   │   │   ├── lib/
│   │   │   ├── constants/
│   │   │   ├── types/
│   │   │   ├── assets/
│   │   │   └── styles/
│   │   ├── public/
│   │   ├── tests/
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│
│   ├── mobile/                        # Citizen Mobile Application (Expo SDK 54)
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   ├── (tabs)/
│   │   │   ├── modals/
│   │   │   └── _layout.tsx
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── features/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── stores/
│   │   │   ├── providers/
│   │   │   ├── lib/
│   │   │   ├── constants/
│   │   │   ├── types/
│   │   │   ├── assets/
│   │   │   └── styles/
│   │   ├── tests/
│   │   ├── app.json
│   │   ├── babel.config.js
│   │   ├── metro.config.js
│   │   ├── tsconfig.json
│   │   └── package.json
│
│   └── server/                        # NestJS Backend
│       ├── src/
│       │   ├── app.module.ts
│       │   ├── main.ts
│       │   │
│       │   ├── common/
│       │   │   ├── decorators/
│       │   │   ├── guards/
│       │   │   ├── interceptors/
│       │   │   ├── filters/
│       │   │   ├── middleware/
│       │   │   ├── pipes/
│       │   │   ├── exceptions/
│       │   │   └── utils/
│       │   │
│       │   ├── config/
│       │   ├── database/
│       │   ├── queues/
│       │   ├── workers/
│       │   ├── events/
│       │   ├── jobs/
│       │   └── modules/
│       │
│       │       ├── auth/
│       │       ├── users/
│       │       ├── reports/
│       │       ├── maps/
│       │       ├── analytics/
│       │       ├── predictions/
│       │       ├── recommendations/
│       │       ├── campaigns/
│       │       ├── donations/
│       │       ├── notifications/
│       │       ├── ai/
│       │       ├── companion/
│       │       ├── payments/
│       │       ├── digital-twin/
│       │       └── admin/
│       │
│       ├── prisma/
│       ├── tests/
│       ├── tsconfig.json
│       └── package.json
│
├── design/
│   ├── dashboard/
│   ├── mobile/
│   ├── website/
│   ├── final_prompt.md
│   └── global_design_system.md
│
├── docs/
│   ├── api/
│   ├── architecture/
│   ├── features/
│   └── product/
│
├── infrastructure/
│
│   ├── docker/
│   │   ├── development/
│   │   └── production/
│   │
│   ├── nginx/
│   ├── monitoring/
│   ├── redis/
│   ├── postgres/
│   └── scripts/
│
├── rules/
│   ├── architecture-rules.mdc
│   ├── coding-standards.mdc
│   ├── tripoli-pulse.mdc
│   └── ui-rules.mdc
│
├── packages/
│
│   ├── ui/                            # Shared UI Components
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── providers/
│   │   ├── icons/
│   │   ├── animations/
│   │   ├── styles/
│   │   └── package.json
│
│   ├── theme/                         # Design Tokens
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── shadows.ts
│   │   ├── radius.ts
│   │   └── package.json
│
│   ├── types/
│   │   ├── auth.ts
│   │   ├── reports.ts
│   │   ├── maps.ts
│   │   ├── analytics.ts
│   │   ├── payments.ts
│   │   └── package.json
│
│   ├── constants/
│   ├── validation/
│   ├── hooks/
│   ├── utils/
│   ├── api-client/
│   ├── maps/
│   ├── ai/
│   ├── config/
│   ├── analytics/
│   ├── notifications/
│   └── eslint-config/
│
├── .env
├── .env.example
├── .gitignore
├── turbo.json
├── docker-compose.yml
├── pnpm-workspace.yaml
├── package.json
├── tsconfig.base.json
├── eslint.config.js
├── prettier.config.js
├── commitlint.config.js
├── README.md
└── LICENSE
```

# Architecture Principles
- `apps/` → Deployable applications
- `packages/` → Shared reusable code
- `infrastructure/` → Docker and deployment configuration
- `docs/` → Product and technical documentation
- `design/` → Stitch AI prompts and design specifications
- `agents/` → AI agent operating system
- `rules/` → Mandatory coding and architecture constraints
- `tasks/` → Implementation phases and milestones
- Modular
- Feature-based
- Event-driven
- Type-safe
- AI-ready
- Scalable
- Maintainable

## Dependency Direction

```txt
apps
  ↓
packages
  ↓
utilities
```

Never:

```txt
packages
  ↓
apps
```

Applications may depend on packages.

Packages must NEVER depend on applications.

# Development Philosophy
- Build foundations first
- No shortcuts
- Shared packages first
- Production quality code

# Important Documents
Links to:
- SYSTEM_ARCHITECTURE
- PRODUCT_REQUIREMENTS
- FEATURE_MATRIX
- DATABASE_SCHEMA
- API_SPECIFICATION
- AI_IMPLEMENTATION_GUIDE
- DEVELOPMENT_ROADMAP
- Rules

# Current Project Status
- Completed
- In Progress
- Pending