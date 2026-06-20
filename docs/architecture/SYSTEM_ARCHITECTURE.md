# TRIPOLI PULSE AI
# SYSTEM ARCHITECTURE
# VERSION 1.0

---

# PURPOSE

This document defines the high-level architecture of the entire Tripoli Pulse AI platform.

It acts as the single source of truth for:

- System boundaries
- Services
- Application responsibilities
- Data flow
- Infrastructure
- Communication patterns
- Deployment strategy
- Scalability decisions

All implementation decisions must follow this document.

---

# PRODUCT OVERVIEW

Tripoli Pulse AI is an AI-powered smart-city platform that enables citizens, municipalities, and NGOs to collaboratively improve the city of Tripoli.

The platform provides:

- Infrastructure issue reporting
- Geospatial intelligence
- AI-powered analytics
- Predictive insights
- Community engagement
- Municipality dashboards
- Campaigns and donations
- Digital twin visualization

The platform should feel like:

"An Operating System for Tripoli."

---

# HIGH LEVEL ARCHITECTURE

```txt
                    ┌─────────────────┐
                    │ Informative Web │
                    │    Next.js      │
                    └────────┬────────┘
                             │
                             │ HTTPS
                             │
┌───────────────┐            API Gateway            ┌───────────────┐
│ Mobile App    │──────────────────────────────────│ Web Dashboard │
│ React Native  │                                  │ Next.js       │
└───────┬────────┘                                  └───────┬───────┘
        │                                                   │
        └───────────────────────────────────────────────────┘
                                │
                                ▼
                    ┌─────────────────┐
                    │   NestJS API    │
                    │  (Modular Core) │
                    └─────────────────┘
                                │
            ┌───────────────────┼───────────────────┐
            │                   │                   │
            ▼                   ▼                   ▼
    PostgreSQL            Redis/BullMQ         Cloudinary
    PostGIS               Background Jobs      Image Storage
    pgvector              Queues/Cache

            │                   │
            │                   │
            ▼                   ▼
       AI Services         External Services
   (Ollama + YOLOv8)         (Areeba APIs)
```

---

# APPLICATIONS

## 1. Informative Website

Purpose:

Marketing and presentation website.

Technology:

Next.js

Responsibilities:

- Showcase the platform
- Explain features
- Demonstrate impact
- Explain vision
- Download links
- Contact information

Authentication:

None

Consumes:

Public API endpoints only.

---

## 2. Web Dashboard

Purpose:

Municipality control center.

Technology:

Next.js

Users:

Municipality operators
NGOs
Administrators

Responsibilities:

- Dashboard analytics
- Report management
- Map center
- Predictions
- Recommendations
- Payments
- Campaign management
- Digital twin

Authentication:

Required

Authorization:

RBAC

Consumes:

Private APIs.

---

## 3. Mobile Application

Purpose:

Citizen platform.

Technology:

React Native
Expo SDK 54

Responsibilities:

- Authentication
- Issue reporting
- Interactive maps
- Notifications
- AI recommendations
- Companion system
- Community campaigns

Authentication:

Required

Consumes:

Private APIs.

---

# BACKEND ARCHITECTURE

Framework:

NestJS

Architecture:

Modular Monolith

Pattern:

Controller
Service
Repository
DTO
Entity

Structure:

```txt
src/

modules/
common/
config/
database/
jobs/
guards/
filters/
interceptors/
decorators/
utils/
```

---

# MODULES

## Core

Auth
Users
Roles
Permissions
Settings
Files

## City

Reports
Maps
Neighborhoods
Notifications

## Intelligence

Analytics
Predictions
Recommendations
Vision
AI

## Community

Campaigns
Payments
Companions

## Administration

Admin
Audit

---

# MODULE RESPONSIBILITIES

---

## Auth

Responsibilities:

- Registration
- Login
- Refresh Tokens
- Password Reset
- Session Management

Dependencies:

Users
Roles

---

## Users

Responsibilities:

- Profiles
- Preferences
- Statistics

Dependencies:

Auth

---

## Reports

Responsibilities:

- Create reports
- Update reports
- Status management
- Media uploads
- Geolocation

Dependencies:

Maps
Files
Notifications

---

## Maps

Responsibilities:

- Geospatial queries
- Layer generation
- Heatmaps
- Route calculations

Dependencies:

PostGIS

---

## Analytics

Responsibilities:

- Metrics
- Charts
- Trends
- Aggregations

Dependencies:

Reports
Predictions

---

## Predictions

Responsibilities:

- Forecast generation
- Risk scores
- Trend analysis

Dependencies:

Analytics
Reports

---

## AI

Responsibilities:

- Chat assistant
- Summaries
- Recommendations
- Semantic search

Dependencies:

pgvector
Ollama

---

## Vision

Responsibilities:

- Image analysis
- Object detection
- Severity estimation

Dependencies:

YOLOv8
OpenCV

---

## Payments

Responsibilities:

- Areeba integration
- Transactions
- Donations
- Webhooks

Dependencies:

Campaigns

---

## Notifications

Responsibilities:

- Push notifications
- Email notifications
- Report updates
- Campaign alerts

Dependencies:

Users

---

# DATABASE ARCHITECTURE

Primary Database:

PostgreSQL

Extensions:

PostGIS
pgvector

Responsibilities:

Relational Data
Geospatial Queries
Vector Search

---

# STORAGE STRATEGY

## PostgreSQL

Stores:

Users
Reports
Predictions
Campaigns
Transactions
Settings

---

## PostGIS

Stores:

Coordinates
Spatial indexes
Geometries

Supports:

Distance calculations
Heatmaps
Nearby searches

---

## pgvector

Stores:

Embeddings

Supports:

Semantic search
Urban Copilot
Recommendations

---

# CACHE ARCHITECTURE

Technology:

Redis

Responsibilities:

API caching
Session storage
Temporary data
Rate limiting
Queues

Never store permanent business data inside Redis.

---

# BACKGROUND PROCESSING

Technology:

BullMQ

Responsibilities:

Image processing
Notifications
Embedding generation
Predictions
Heatmap generation
Recommendation generation
Cleanup jobs

Heavy tasks must never execute inside request handlers.

---

# FILE STORAGE

Provider:

Cloudinary

Stores:

Images
Report attachments
Companion assets

Never store binary files inside PostgreSQL.

---

# MAP STACK

Frontend:

MapLibre
OpenStreetMap

Backend:

PostGIS

Capabilities:

Markers
Heatmaps
Layers
Routes
Clustering
Spatial search

---

# AI STACK

## LLM

Ollama

Models:

Gemma
Llama

Capabilities:

Summaries
Recommendations
Urban Copilot
Trend explanations

---

## Embeddings

Sentence Transformers

Capabilities:

Semantic search
Similarity search
Context retrieval

---

## Computer Vision

YOLOv8
OpenCV

Capabilities:

Pothole detection
Garbage detection
Flood detection
Infrastructure damage detection

---

# SECURITY ARCHITECTURE

Authentication:

JWT
Refresh Tokens

Authorization:

RBAC

Security:

Helmet
Rate Limiting
Input Validation
CORS
Password Hashing
Audit Logs

Never trust client input.

---

# COMMUNICATION FLOW

Citizen
↓

Mobile App
↓

API Gateway
↓

NestJS Modules
↓

Database / AI Services
↓

Notifications
↓

Dashboard Updates

---

# REPORTING FLOW

Citizen creates report
↓

Upload image
↓

Store media
↓

Save report
↓

AI analyzes image
↓

Generate tags
↓

Generate severity
↓

Notify municipality
↓

Dashboard updates
↓

Municipality resolves issue
↓

Citizen notified

---

# DEPLOYMENT ARCHITECTURE

Applications:

Web Dashboard
Informative Website
Mobile App
API

Infrastructure:

PostgreSQL
Redis
Cloudinary
Ollama

Containers:

web
api
postgres
redis
ollama

---

# DESIGN PRINCIPLES

The system must be:

- Modular
- Scalable
- Type-safe
- Maintainable
- Observable
- Extensible
- Cloud-ready
- Mobile-first

---

# NON-GOALS

Do not:

- Build microservices
- Use multiple databases unnecessarily
- Depend on paid AI APIs
- Put business logic in controllers
- Execute heavy tasks synchronously
- Duplicate data
- Introduce unnecessary complexity

---

# ARCHITECTURE VISION

Tripoli Pulse AI should behave as a unified intelligent platform where citizens, municipalities, and AI services collaborate through one centralized system to continuously understand, monitor, and improve the city of Tripoli.